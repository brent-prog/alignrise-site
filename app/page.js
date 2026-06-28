'use client';

import { useMemo, useState } from 'react';
import { categories, questions, scoreAssessment } from '../lib/assessment';

const bookingUrl = 'https://calendly.com/brent3p/30min';
const email = 'info@alignrise.ca';
const linkedinUrl = 'https://www.linkedin.com/in/brentpattison/';

const defaultLead = { name: '', email: '', company: '' };

export default function Home() {
  const [lead, setLead] = useState(defaultLead);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const completedCount = useMemo(() => Object.keys(answers).length, [answers]);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage('');

    if (!lead.name || !lead.email || !lead.company) {
      setMessage('Please enter your name, email, and company before scoring.');
      return;
    }
    if (completedCount !== questions.length) {
      setMessage(`Please answer all ${questions.length} questions before scoring.`);
      return;
    }

    const localResult = scoreAssessment(answers);
    setResult(localResult);
    setStatus('sending');

    try {
      const response = await fetch('/api/alignrise-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead, answers })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to send results right now.');
      setStatus('sent');
      setMessage('Your AlignRise Score report has been emailed.');
    } catch (error) {
      setStatus('local');
      setMessage('Your score is shown below. Email/PDF delivery still needs the Vercel email settings configured.');
    }
  }

  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top">AlignRise</a>
        <nav>
          <a href="#score">Get Your Score</a>
          <a href={bookingUrl} target="_blank">Book Review</a>
          <a href={linkedinUrl} target="_blank">LinkedIn</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Business Alignment Operating System</p>
          <h1>Most Businesses Don't Run As Systems.</h1>
          <p className="lead">
            Take the free AlignRise Score assessment to discover where your business is strongest,
            where it is vulnerable, and what to improve next.
          </p>
          <div className="actions">
            <a className="button primary" href="#score">Get Your AlignRise Score™</a>
            <a className="button secondary" href={bookingUrl} target="_blank">Book an Alignment Review</a>
          </div>
        </div>
        <div className="heroPanel">
          <div className="scorePreview">
            <span>Your AlignRise Score™</span>
            <strong>{result ? result.overall : '--'} / 100</strong>
            <p>{result ? result.band : 'Complete the assessment below.'}</p>
          </div>
        </div>
      </section>

      <section className="section problem">
        <div className="sectionHead">
          <p className="eyebrow">The Real Problem</p>
          <h2>Why Does Everything Still Depend On You?</h2>
          <p>
            Many business owners are trapped in the day-to-day operation of their business.
            The same issues keep resurfacing. Decisions bottleneck at the top. Knowledge lives in people's heads.
            Everyone is working hard, but progress feels slower than it should. The problem is rarely effort.
            The problem is alignment.
          </p>
        </div>
      </section>

      <section id="score" className="section">
        <div className="sectionHead">
          <p className="eyebrow">AlignRise Score™</p>
          <h2>Get Your Business Alignment Score</h2>
          <p>
            Answer 18 questions across People, Product, Profit, Planning, Processes, and Performance.
            Your result will appear instantly and the PDF report will be emailed to you.
          </p>
        </div>

        <form className="assessment" onSubmit={handleSubmit}>
          <div className="leadGrid">
            <label>Name<input value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} /></label>
            <label>Email<input type="email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} /></label>
            <label>Company<input value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} /></label>
          </div>

          {categories.map((category) => (
            <div className="categoryBlock" key={category.id}>
              <h3>{category.label}</h3>
              {questions.filter((q) => q.category === category.id).map((question) => (
                <fieldset className="question" key={question.id}>
                  <legend>{question.text}</legend>
                  <div className="scale">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <label key={value} className={Number(answers[question.id]) === value ? 'selected' : ''}>
                        <input
                          type="radio"
                          name={question.id}
                          value={value}
                          checked={Number(answers[question.id]) === value}
                          onChange={() => setAnswers({ ...answers, [question.id]: value })}
                        />
                        <span>{value}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}
            </div>
          ))}

          <div className="submitBar">
            <p>{completedCount} of {questions.length} answered</p>
            <button className="button primary" type="submit">
              {status === 'sending' ? 'Sending Report...' : 'Calculate My AlignRise Score™'}
            </button>
          </div>
          {message && <p className="message">{message}</p>}
        </form>

        {result && <Results result={result} />}
      </section>

      <section className="section system">
        <div className="sectionHead">
          <p className="eyebrow">The System</p>
          <h2>Alignment Drives Results</h2>
          <p>
            AlignRise evaluates how the critical parts of your business work together.
            When these elements are aligned, businesses become easier to run, easier to grow, and more valuable.
          </p>
        </div>
        <div className="systemGrid">
          {['People', 'Product', 'Profit', 'Planning', 'Processes', 'Performance'].map((item) => <div key={item}>{item}</div>)}
        </div>
      </section>

      <section className="section experience">
        <p className="eyebrow">Credibility</p>
        <h2>Built From Real Operations Experience</h2>
        <p>AlignRise wasn't developed in a classroom.</p>
        <p>It was built through years of leading customer experience, operations, and business improvement teams across North America, the Caribbean, India, and the Philippines.</p>
        <p>Whether supporting a 20-person team or an operation of 40,000 employees, the same lesson kept appearing:</p>
        <p>Businesses improve when people, processes, technology, and performance measures are aligned.</p>
        <p>They struggle when those elements pull in different directions.</p>
        <p>AlignRise captures those lessons in a practical operating system designed to help business owners build organizations that are easier to run, easier to scale, and more valuable.</p>
      </section>

      <section className="section cta">
        <h2>Stop Running Your Business By Gut Feel.</h2>
        <p>Discover where alignment is breaking down and identify the next steps to improve execution, accountability, and growth.</p>
        <div className="actions center">
          <a className="button primary" href="#score">Get Your AlignRise Score™</a>
          <a className="button secondary" href={bookingUrl} target="_blank">Book an Alignment Review</a>
        </div>
      </section>

      <footer>
        <strong>AlignRise</strong>
        <a href={`mailto:${email}`}>{email}</a>
        <a href={bookingUrl} target="_blank">Calendly</a>
        <a href={linkedinUrl} target="_blank">LinkedIn</a>
      </footer>
    </main>
  );
}

function Results({ result }) {
  return (
    <div className="results">
      <div>
        <p className="eyebrow">Your Result</p>
        <h2>{result.overall} / 100</h2>
        <p className="resultBand">{result.band}</p>
      </div>
      <div className="resultBars">
        {categories.map((category) => (
          <div className="barRow" key={category.id}>
            <span>{category.label}</span>
            <div><i style={{ width: `${result.categoryScores[category.id]}%` }} /></div>
            <strong>{result.categoryScores[category.id]}</strong>
          </div>
        ))}
      </div>
      <div className="recommendation">
        <h3>Biggest Opportunity: {result.lowestCategory.label}</h3>
        <p>
          This is the area most likely creating friction, rework, or management drag.
          Book an Alignment Review to walk through the result and identify the highest-impact next steps.
        </p>
        <a className="button primary" href={bookingUrl} target="_blank">Book Alignment Review</a>
      </div>
    </div>
  );
}
