"use client";

import { useState, type FormEvent } from "react";
import type { LegacyProspectPageData } from "@/content/prospect-pages";

export default function EmailAcceptance({page}:{page: LegacyProspectPageData}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const proposalVersion = page.acceptance?.proposalVersion;
  if (!page.acceptance) return null;
  const questionSubject = `${page.clientName} — question about AlignRISE KickStart proposal`;
  const questionBody = [
    "Hi Brent,",
    "",
    `I have a question about the AlignRISE KickStart proposal for ${page.clientName}.`,
    "",
    "My question:",
    "",
    "",
    `Proposal reference: ${proposalVersion}`,
    `Proposal URL: https://clients.alignrise.ca/p/${page.slug}`,
    "",
    "Thanks,"
  ].join("\n");
  const questionsEmail = `mailto:${page.contactEmail}?subject=${encodeURIComponent(questionSubject)}&body=${encodeURIComponent(questionBody)}`;
  function submit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !business.trim() || !authorized) return;
    const subject = `${page.clientName} — AlignRISE KickStart acceptance request [${proposalVersion}]`;
    const body = [
      "Hi Brent,",
      "",
      "I have reviewed the AlignRISE KickStart proposal and its scope and commercial conditions, including confidentiality and liability, and would like to proceed by email authorization.",
      "",
      "I confirm I am authorized to act for the business identified below.",
      `Proposal reference: ${proposalVersion}`,
      `Proposal URL: https://clients.alignrise.ca/p/${page.slug}`,
      `Engagement: ${page.offerName}`,
      `Fee: CAD $${page.price.toLocaleString("en-CA")} plus applicable HST`,
      ...(page.toolkit ? [`Included: ${page.toolkit.durationMonths} months of AlignRISE Toolkit access and three 45-minute monthly accountability sessions, without automatic renewal.`] : []),
      ...(page.guarantee ? [`Opportunity guarantee: ${page.guarantee}`] : []),
      "",
      `Authorized representative: ${name.trim()}`,
      `Business email: ${email.trim()}`,
      `Legal business name: ${business.trim()}`,
      "",
      "Please confirm the invoicing details, scheduling and next steps by reply.",
      "",
      "Cheers,",
      name.trim()
    ].join("\n");
    window.location.href = `mailto:${page.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return <div id="accept" className="client-proposal-accept-inline" aria-label="Email authorization">
    <p className="client-proposal-accept-eyebrow">READY TO MOVE FORWARD?</p>
    <h3>Accept by email</h3>
    <p className="client-proposal-accept-intro">Review the scope and commercial conditions above, then complete the details below. We’ll prepare an email for you to review and send.</p>
    <p className="client-proposal-accept-version">Proposal reference: <strong>{proposalVersion}</strong></p>
        <form onSubmit={submit} className="client-proposal-accept-form">
          <div className="client-proposal-accept-grid">
            <label htmlFor="accept-name">Authorized representative
              <input id="accept-name" type="text" autoComplete="name" maxLength={150} required value={name} onChange={e=>setName(e.target.value)} placeholder="Full name"/>
            </label>
            <label htmlFor="accept-email">Business email
              <input id="accept-email" type="email" autoComplete="email" maxLength={254} required value={email} onChange={e=>setEmail(e.target.value)} placeholder="name@company.ca"/>
            </label>
          </div>
          <label htmlFor="accept-business">Legal business name for invoicing
            <input id="accept-business" type="text" autoComplete="organization" maxLength={200} required value={business} onChange={e=>setBusiness(e.target.value)} placeholder="Full registered business name"/>
          </label>
          <label className="client-proposal-accept-check" htmlFor="accept-authorized">
            <input id="accept-authorized" type="checkbox" checked={authorized} onChange={e=>setAuthorized(e.target.checked)} required/>
            <span>I am authorized to act on behalf of the named business. I have reviewed the proposal and its terms, including confidentiality and limitation of liability, and want to proceed with acceptance by email.</span>
          </label>
          <div className="client-proposal-accept-actions">
            <button className="client-proposal-button client-proposal-accept-submit" type="submit">Prepare acceptance email</button>
            <a className="client-proposal-question-link" href={questionsEmail}>Have a question before confirming? Email Brent</a>
          </div>
          <p className="client-proposal-accept-fine">This opens an email draft. You must review and send it yourself. No form details are submitted to the website, and no agreement is automatically recorded by clicking this button. 3P Solutions will reply to confirm the engagement, outstanding scheduling/payment details and next steps.</p>
        </form>
  </div>;
}
