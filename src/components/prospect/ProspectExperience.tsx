"use client";

import Image from "next/image";
import { Fragment, type ReactNode } from "react";
import ProspectNavigation from "./ProspectNavigation";
import ProspectVideo from "./ProspectVideo";
import ScenarioCalculator from "./ScenarioCalculator";
import EmailAcceptance from "./EmailAcceptance";
import type { ProspectPageData } from "@/content/prospect-pages";
import "./prospect.css";

const money = (value: number) => new Intl.NumberFormat("en-CA", {
  style: "currency", currency: "CAD", maximumFractionDigits: 0
}).format(value);

export default function ProspectExperience({ page }: { page: ProspectPageData }) {
  const isPilot = page.offerName === "AlignRISE early pilot";
  const sectionOrder = page.sectionOrder || ["opportunity", "assessment", "deliverables", ...(page.toolkit ? ["toolkit"] : []), ...(page.calculator ? ["calculator"] : []), ...((page.extraSections||[]).map(s=>s.id)), "proposal"];
  const sectionLabels: Record<string,string> = {opportunity:"Opportunity",assessment:"Approach",deliverables:"What you get",toolkit:"3-month Toolkit",calculator:"Potential value",proposal:"Proposal"};
  const nav = [
    ...(page.video ? [{id:"introduction",title:"Welcome"}] : []),
    ...sectionOrder.map(id=>({id,title:sectionLabels[id] || page.extraSections?.find(s=>s.id===id)?.title || id})),
    ...(page.acceptance ? [{id:"accept",title:"Accept"}] : [])
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
    "how-alignrise-works": (isPilot && <section className="client-proposal-section client-proposal-section-light" id="how-alignrise-works">
      <div className="client-proposal-container">
        <p className="client-proposal-overline">THE ALIGNRISE METHOD</p>
        <h2>Work on your business, one priority at a time.</h2>
        <p className="client-proposal-context">AlignRISE combines practical business tools, personalized AI guidance and direct accountability with Brent. You work at your own pace, using the tools to build a stronger business without a traditional consulting engagement.</p>
        <div className="client-proposal-card-grid">
          {[
            ["01 · ASSESS","Understand your business","Identify what makes your service valuable and what is holding back growth."],
            ["02 · ALIGN","Get everyone and everything working together","Clarify your ideal customers, unique value and the people, processes and measures that support consistent delivery."],
            ["03 · ACT","Turn priorities into progress","Use your customized AI prompts and templates to build the tools you need and implement improvements."]
          ].map(([step,title,detail])=><article className="client-proposal-step" key={step}><p className="client-proposal-overline">{step}</p><h3>{title}</h3><p>{detail}</p></article>)}
        </div>
        <div className="client-proposal-card" style={{marginTop:"1.5rem"}}><h3>Your tools. Your pace. My support.</h3><p>Start with a 30-minute call to personalize your toolkit. Work through your priorities using AI-guided prompts and templates, then meet with me once a month to review progress, resolve obstacles and decide what comes next.</p><p>No comprehensive assessment required before you begin.</p></div>
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
    toolkit: (page.toolkit && <section className="client-proposal-section client-proposal-toolkit-section" id="toolkit">
      <div className="client-proposal-container">
        <div className="client-proposal-toolkit-banner">
          <span className="client-proposal-toolkit-badge">INCLUDED WITH YOUR KICKSTART</span>
          <h2>{page.toolkit.heading}</h2>
          <p>{page.toolkit.summary}</p>
          <div className="client-proposal-toolkit-facts">
            <strong>{page.toolkit.durationMonths} months included</strong>
            {page.toolkit.monthlyPriceCad != null && <span>Normally {money(page.toolkit.monthlyPriceCad)}/month + HST — included at no additional charge</span>}
          </div>
        </div>
        <div className="client-proposal-card-grid client-proposal-toolkit-grid">
          {page.toolkit.features.map((feature,i) => <article className="client-proposal-card" key={i}>
            <h3>{feature.heading}</h3>
            <p>{feature.description}</p>
          </article>)}
        </div>
        <p className="client-proposal-toolkit-continuation">{page.toolkit.continuationNote}</p>
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
            {page.normalPrice && <del>{money(page.normalPrice)}{isPilot ? "/month" : ""}</del>}
            <strong>{money(page.price)}{isPilot ? "/month" : ""}</strong>
            <span>{isPilot ? "CAD + HST · first three months" : "CAD + applicable HST"}</span>
          </div>
          {page.toolkit && <p className="client-proposal-offer-includes"><strong>Also included:</strong> {page.toolkit.durationMonths} months of the AlignRISE monthly package (3P Toolkit, AI-guided tools and monthly accountability reviews).</p>}
          {page.guarantee && <div className="client-proposal-guarantee">
            <h3>Opportunity guarantee</h3><p>{page.guarantee}</p>
          </div>}
          <p className="client-proposal-offer-note">{page.note}</p>
          <details className="client-proposal-terms">
            <summary>Review scope and commercial conditions</summary>
            <dl>
              {([
                ["Engagement scope",page.terms.scope],["Client responsibilities",page.terms.clientResponsibilities],
                ["Timing",page.terms.schedule],["Exclusions",page.terms.exclusions],["Fee and payment",page.terms.payment],
                ["Cancellation and refunds",page.terms.cancellation],["Confidentiality",page.terms.confidentiality],
                ["Liability",page.terms.liability],["Proposal validity",page.terms.validity],
                ["Parties and authorized signature",page.terms.contractingEntity]
              ] as const).map(([key,value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}
            </dl>
          </details>
          {page.acceptance
            ? <EmailAcceptance page={page}/>
            : <a href={"mailto:"+page.contactEmail+"?subject="+encodeURIComponent(page.contactSubject)} className="client-proposal-button client-proposal-button-inverse">Email Brent to discuss</a>}
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
        <span className="client-proposal-header-label">A PERSONALIZED ALIGNRISE PROPOSAL</span>
      </div>
    </header>
    <ProspectNavigation links={nav}/>
    <section className="client-proposal-hero" aria-labelledby="client-proposal-headline">
      <div className="client-proposal-container">
        <div className="client-proposal-hero-identity">
          <div className="client-proposal-client-mark">
            {/* Use the client's official mark, never synthetic artwork. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {page.clientLogo.src ? <img src={page.clientLogo.src} alt={page.clientLogo.alt} referrerPolicy="no-referrer" loading="eager"/> : <strong>{page.clientName}</strong>}
          </div>
          <span className="client-proposal-overline">{page.eyebrow}</span>
        </div>
        <div className={page.video ? "client-proposal-hero-grid" : "client-proposal-hero-grid client-proposal-hero-grid-no-video"}>
          <div className="client-proposal-hero-copy">
            <h1 id="client-proposal-headline">{page.title}</h1>
            <p className="client-proposal-lead"><strong>{page.greeting}</strong> {page.intro}</p>
            <div className="client-proposal-hero-actions">
              <a className="client-proposal-button client-proposal-button-hero" href="#assessment">{isPilot ? "See how AlignRISE works" : "See how KickStart works"}</a>
              <a className="client-proposal-button client-proposal-button-outline" href="#opportunity">See the opportunity</a>
            </div>
          </div>
          {page.video && <ProspectVideo video={page.video} inHero />}
        </div>
      </div>
    </section>
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
