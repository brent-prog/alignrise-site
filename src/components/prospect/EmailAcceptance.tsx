"use client";

import { useState, type FormEvent } from "react";
import type { ProspectPageData } from "@/content/prospect-pages";

export default function EmailAcceptance({page}:{page: ProspectPageData}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const proposalVersion = page.acceptance?.proposalVersion;
  if (!page.acceptance) return null;
  const summary = [
    ["Engagement", page.offerName],
    ["Scope and deliverables", page.terms.scope],
    ["Fee and payment", page.terms.payment],
    ["Opportunity guarantee", page.guarantee || "No opportunity guarantee is offered."],
    ["Client cooperation", page.terms.clientResponsibilities],
    ["Timing", page.terms.schedule],
    ["Exclusions", page.terms.exclusions],
    ["Cancellation and rescheduling", page.terms.cancellation],
    ["Confidentiality", page.terms.confidentiality],
    ["Responsibility and liability", page.terms.liability],
    ["Proposal validity", page.terms.validity],
    ["Contracting parties", page.terms.contractingEntity]
  ];
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
  return <section id="accept" className="client-proposal-acceptance" aria-label="Email authorization">
    <div className="client-proposal-container">
      <div className="client-proposal-accept-card">
        <p className="client-proposal-overline">READY TO MOVE FORWARD?</p>
        <h2>Review and accept by email</h2>
        <p>Review the engagement terms and enter the details of the person authorized to proceed. The button prepares an email for you to review and send yourself.</p>
        <p className="client-proposal-accept-version">Proposal reference: <strong>{proposalVersion}</strong></p>
        <div className="client-proposal-accept-terms">
          {summary.map(([label, value])=><p key={label}><strong>{label}:</strong> {value}</p>)}
        </div>
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
          <button className="client-proposal-button client-proposal-accept-submit" type="submit">Prepare acceptance email</button>
          <p className="client-proposal-accept-fine">This opens an email draft. You must review and send it yourself. No form details are submitted to the website, and no agreement is automatically recorded by clicking this button. 3P Solutions will reply to confirm the engagement, outstanding scheduling/payment details and next steps.</p>
        </form>
      </div>
    </div>
  </section>;
}
