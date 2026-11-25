"use client";

import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import ProspectNavigation from "./ProspectNavigation";
import ProspectVideo from "./ProspectVideo";
import ScenarioCalculator from "./ScenarioCalculator";
import type { ProspectPageData } from "@/content/prospect-pages";
import "./prospect.css";

const money = (value: number) => new Intl.NumberFormat("en-CA", {
  style: "currency", currency: "CAD", maximumFractionDigits: 0
}).format(value);

export default function ProspectExperience({ page }: { page: ProspectPageData }) {
  const email = "mailto:" + page.contactEmail + "?subject=" + encodeURIComponent(page.contactSubject)
    + "&body=" + encodeURIComponent("Hi Brent,\n\nI'd like to review the AlignRISE proposal and request a formal engagement agreement.\n\n");
  const sectionOrder = page.sectionOrder || ["opportunity", "assessment", "deliverables", ...(page.calculator ? ["calculator"] : []), ...((page.extraSections||[]).map(s=>s.id)), "proposal"];
  const sectionLabels: Record<string,string> = {opportunity:"Opportunity",assessment:"Approach",deliverables:"What you get",calculator:"Potential value",proposal:"Proposal"};
  const nav = [
    ...(page.video ? [{id:"introduction",title:"Welcome"}] : []),
    ...sectionOrder.map(id=>({id,title:sectionLabels[id] || page.extraSections?.find(s=>s.id===id)?.title || id}))
  ];
  const sectionContent: Record<string, ReactNode> = {
    opportunity: (<section className="client-proposal-section" id="opportunity">
      <div className="client-proposal-container">
        <h2>The opportunity</h2>
        {page.context.map((p,i) => <p className="client-proposal-context" key={i}>{p.body}</p>)}
        <div className="client-proposal-card-grid">
          {page.opportunities.map((o,i) => <article className="client-proposal-card" key={i}>
            <h3>{o.title}</h3><p>{o.detail}</p>
          </article>)}
        </div>
      </div>
    </section>),
    assessment: (<section className="client-proposal-section client-proposal-section-light" id="assessment">
      <div className="client-proposal-container">
        <p className="client-proposal-overline">{page.offerName}</p>
        <h2>How we'll approach it</h2>
        <div className="client-proposal-card-grid">
          {page.process.map((step,i) => <article className="client-proposal-step" key={i}>
            <span className="client-proposal-step-number">0{i+1}</span><h3>{step.heading}</h3><p>{step.detail}</p>
          </article>)}
        </div>
      </div>
    </section>),
    deliverables: (<section className="client-proposal-section" id="deliverables">
      <div className="client-proposal-container">
        <h2>What you'll receive</h2>
        <div className="client-proposal-card-grid">
          {page.deliverables.map((d,i) => <article className="client-proposal-card" key={i}>
            <h3>{d.title}</h3><p>{d.detail}</p>
          </article>)}
        </div>
      </div>
    </section>),
    calculator: (page.calculator && <section className="client-proposal-section client-proposal-section-light" id="calculator">
      <div className="client-proposal-container">
        <h2>{page.calculator.heading}</h2>
        {page.calculator.explanation && <p className="client-proposal-context">{page.calculator.explanation}</p>}
        {page.calculator.kind === "appointments" && <ScenarioCalculator
          defaultAppointments={page.calculator.appointmentsPerWeek}
          defaultValue={page.calculator.averageValue}
          weeks={page.calculator.weeksPerYear}
          maxLocations={page.calculator.maxLocations}
          defaultLocations={page.calculator.locations}/>}
        <p className="client-proposal-small">{page.calculator.disclaimer}
          {page.calculator.sourceUrl && <> <a href={page.calculator.sourceUrl} target="_blank" rel="noopener noreferrer">{page.calculator.sourceLabel || "Service pricing"} ↗</a></>}
        </p>
      </div>
    </section>),
    proposal: (<section className="client-proposal-section" id="proposal">
      <div className="client-proposal-container">
        <div className="client-proposal-offer">
          <p className="client-proposal-offer-label">PERSONALIZED PROPOSAL · {page.offerName}</p>
          <h2>{page.offerHeadline}</h2>
          <div className="client-proposal-price">
            {page.normalPrice && <del>{money(page.normalPrice)}</del>}
            <strong>{money(page.price)}</strong>
            <span>CAD + applicable HST</span>
          </div>
          {page.guarantee && <div className="client-proposal-guarantee">
            <h3>Opportunity guarantee</h3><p>{page.guarantee}</p>
          </div>}
          <p className="client-proposal-offer-note">{page.note}</p>
          <details className="client-proposal-terms">
            <summary>Review scope and commercial conditions</summary>
            <dl>
              {([
                ["Assessment scope",page.terms.scope],["Client responsibilities",page.terms.clientResponsibilities],
                ["Timing",page.terms.schedule],["Exclusions",page.terms.exclusions],["Fee and payment",page.terms.payment],
                ["Cancellation and refunds",page.terms.cancellation],["Confidentiality",page.terms.confidentiality],
                ["Liability",page.terms.liability],["Proposal validity",page.terms.validity],
                ["Parties and authorized signature",page.terms.contractingEntity]
              ] as const).map(([key,value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}
            </dl>
          </details>
          <p className="client-proposal-nonbinding">This page is a proposal, not a binding contract. A formal engagement agreement must be reviewed and signed by authorized representatives before work begins.</p>
          <a href={email} className="client-proposal-button client-proposal-button-inverse">Request the engagement agreement</a>
          <p className="client-proposal-small client-proposal-cta-explain">Opens an email draft. This is not electronic acceptance or a signature.</p>
        </div>
      </div>
    </section>),
  };
  return <main id="top" className="client-proposal">
    <header className="client-proposal-header">
      <div className="client-proposal-container client-proposal-marks">
        <a href="https://alignrise.ca/" target="_blank" rel="noopener noreferrer" aria-label="Visit AlignRISE">
          <Image src="/alignrise-logo.svg" width={90} height={90} alt="AlignRISE" priority className="client-proposal-alignrise-logo"/>
        </a>
        <span className="client-proposal-for">A proposal prepared for</span>
        <div className="client-proposal-client-mark">
          {/* The client's actual, publicly served brand asset; never redraw client marks. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={page.clientLogo.src} alt={page.clientLogo.alt} referrerPolicy="no-referrer" loading="eager"/>
        </div>
      </div>
    </header>
    <ProspectNavigation links={nav}/>
    <section className="client-proposal-hero">
      <div className="client-proposal-container">
        <p className="client-proposal-overline">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="client-proposal-lead"><strong>{page.greeting}</strong> {page.intro}</p>
        <a className="client-proposal-button" href="#opportunity">Explore the opportunity ↓</a>
      </div>
    </section>
    <ProspectVideo video={page.video}/>
    {sectionOrder.map(id => <Fragment key={id}>{sectionContent[id] ?? (() => {
      const extra = page.extraSections?.find(section => section.id === id);
      return extra ? <section className="client-proposal-section" id={extra.id}>
        <div className="client-proposal-container"><h2>{extra.title}</h2>{extra.paragraphs.map((text,i)=><p className="client-proposal-context" key={i}>{text}</p>)}</div>
      </section> : null;
    })()}</Fragment>)}
    <footer className="client-proposal-footer">
      <div className="client-proposal-container">
        <span>AlignRISE™ by 3P Solutions · Prepared for {page.clientName}</span>
        <a href={"mailto:"+page.contactEmail}>{page.contactEmail}</a>
      </div>
    </footer>
  </main>;
}
