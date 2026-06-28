import { Resend } from 'resend';
import PDFDocument from 'pdfkit';
import { categories, questions, scoreAssessment } from '../../../lib/assessment';

export async function POST(request) {
  try {
    const { lead, answers } = await request.json();
    if (!lead?.name || !lead?.email || !lead?.company) {
      return Response.json({ error: 'Missing lead details.' }, { status: 400 });
    }
    if (!answers || questions.some((question) => !answers[question.id])) {
      return Response.json({ error: 'Missing assessment answers.' }, { status: 400 });
    }
    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
      return Response.json({ error: 'Email delivery is not configured.' }, { status: 500 });
    }

    const result = scoreAssessment(answers);
    const pdf = await buildPdf({ lead, answers, result });
    const resend = new Resend(process.env.RESEND_API_KEY);
    const notifyEmail = process.env.LEAD_NOTIFY_EMAIL || 'info@alignrise.ca';

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [lead.email],
      bcc: [notifyEmail],
      subject: `Your AlignRise Score: ${result.overall}/100`,
      html: buildEmailHtml({ lead, result }),
      attachments: [{ filename: 'alignrise-score-report.pdf', content: pdf.toString('base64') }]
    });

    return Response.json({ ok: true, result });
  } catch (error) {
    return Response.json({ error: error.message || 'Unable to process assessment.' }, { status: 500 });
  }
}

function buildEmailHtml({ lead, result }) {
  return `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.5">
      <h1>Your AlignRise Score: ${result.overall}/100</h1>
      <p><strong>${result.band}</strong></p>
      <p>Thanks ${escapeHtml(lead.name)}. Your PDF report is attached.</p>
      <p>Your biggest opportunity is <strong>${result.lowestCategory.label}</strong>.</p>
      <p><a href="https://calendly.com/brent3p/30min">Book an Alignment Review</a></p>
    </div>`;
}

function buildPdf({ lead, answers, result }) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 48 });
    const chunks = [];
    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    doc.fontSize(24).text('AlignRise Score Report', { underline: false });
    doc.moveDown();
    doc.fontSize(12).text(`Name: ${lead.name}`);
    doc.text(`Company: ${lead.company}`);
    doc.text(`Email: ${lead.email}`);
    doc.moveDown();
    doc.fontSize(28).text(`${result.overall} / 100`);
    doc.fontSize(16).text(result.band);
    doc.moveDown();

    doc.fontSize(16).text('Category Scores');
    doc.moveDown(0.5);
    categories.forEach((category) => {
      doc.fontSize(12).text(`${category.label}: ${result.categoryScores[category.id]} / 100`);
    });

    doc.moveDown();
    doc.fontSize(16).text(`Biggest Opportunity: ${result.lowestCategory.label}`);
    doc.fontSize(12).text('This is the area most likely creating friction, rework, or management drag. Book an Alignment Review to walk through your result and identify the highest-impact next steps.');

    doc.moveDown();
    doc.fontSize(16).text('Responses');
    doc.moveDown(0.5);
    questions.forEach((question) => {
      doc.fontSize(10).text(`${question.text} Score: ${answers[question.id]}/5`);
    });

    doc.moveDown();
    doc.fontSize(12).text('Book an Alignment Review: https://calendly.com/brent3p/30min');
    doc.text('Email: info@alignrise.ca');
    doc.end();
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}
