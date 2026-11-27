import type { ProspectPageData } from "@/content/prospect-pages";

type Story = NonNullable<NonNullable<ProspectPageData["presentation"]>["visualStory"]>;
type Method = NonNullable<NonNullable<ProspectPageData["presentation"]>["method"]>;

function StoryIcon({kind}:{kind:number}) {
  const paths = [
    <><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5M10 7v6M7 10h6"/></>,
    <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18m-13 5 3 3 5-5"/></>,
    <><path d="M3 20h18M5 17l5-5 4 2 6-9M15 5h5v5"/></>,
    <><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h4"/></>,
    <><path d="M12 2v4m0 12v4M2 12h4m12 0h4M5 5l3 3m8 8 3 3m0-14-3 3M8 16l-3 3"/><circle cx="12" cy="12" r="5"/></>,
    <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2m1-11 2 2 4-4"/></>
  ];
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}

export function OpportunityStory({story}:{story:Story}) {
 return <section className="client-proposal-section ar-story-opportunity" id="opportunity"><div className="client-proposal-container">
 <p className="client-proposal-overline">THE OPPORTUNITY</p><h2>{story.opportunityHeading}</h2><p className="ar-story-lead">{story.opportunityLead}</p>
 <ol className="ar-growth-path">{story.journey.map((step,i)=><li key={step.label}><div className="ar-path-track"><span className="ar-path-node"><StoryIcon kind={i}/></span><span className="ar-path-index">0{i+1}</span></div><p className="ar-path-label">{step.label}</p><h3>{step.title}</h3><p>{step.detail}</p></li>)}</ol>
 <div className="ar-outcome"><svg aria-hidden="true" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="18" cy="18" r="15"/><path d="m10 18 5 5 11-12"/></svg><strong>{story.outcome}</strong></div>
 </div></section>;
}

export function MethodStory({method,story,aiRequirement,clientName="Takoda Equine"}:{method:Method;story:Story;aiRequirement?:string;clientName?:string}) {
 return <section className="client-proposal-section ar-story-method" id="how-alignrise-works"><div className="client-proposal-container">
 <p className="client-proposal-overline">THE ALIGNRISE SYSTEM</p><h2>{method.heading}</h2><p className="ar-story-lead">{method.intro}</p>
 <div className="ar-system"><div className="ar-system-inputs">{method.components?.map((c,i)=><div key={c.heading} className="ar-system-input"><span className="ar-system-icon"><StoryIcon kind={i+3}/></span><div><h3>{c.heading}</h3><p>{c.description}</p></div><span className="ar-system-link" aria-hidden="true"/></div>)}</div><div className="ar-system-result"><span>WORK ON YOUR BUSINESS</span><strong><span>People</span><span>Product</span><span>Profit</span></strong><p>Clear priorities. Practical systems. Measurable progress.</p></div></div>
 <p className="ar-story-lead ar-system-summary">{method.introSecond}</p>
 <div className="ar-method-divider"><span>THE CONTINUOUS IMPROVEMENT PROCESS</span></div>
 <h2>Assess. Align. Act.</h2><ol className="ar-cycle">{method.steps.map((step,i)=><li key={step.label}><span className="ar-cycle-index">0{i+1}</span><div><p className="ar-cycle-label">{step.label}</p><h3>{step.title}</h3><p>{step.detail}</p></div><span className="ar-cycle-arrow" aria-hidden="true">→</span></li>)}</ol><div className="ar-cycle-return"><span aria-hidden="true">↶</span> Review progress and repeat</div>
 <div className="ar-application"><p className="ar-mini-label">IN PRACTICE · {clientName.toUpperCase()}</p><h3>{method.exampleTitle}</h3><ol>{story.application.map((item,i)=><li key={item}><span>0{i+1}</span>{item}</li>)}</ol><p className="ar-example-note">Illustrative starting priorities, not assessment findings or guaranteed results.</p></div>
 {aiRequirement && <p className="ar-ai-note"><strong>What you’ll need:</strong> {aiRequirement}</p>}
 <a href="https://alignrise.ca/" target="_blank" rel="noopener noreferrer" className="client-proposal-button client-proposal-learn-more">Learn more about AlignRISE ↗</a>
 </div></section>;
}

export function OnboardingStory({page}:{page:ProspectPageData}) {
 const labels=["COMPLIMENTARY · 30 MIN","YOUR STARTING PACKAGE · FREE","MONTHLY · 45 MIN"];
 return <section className="client-proposal-section ar-story-start" id="assessment"><div className="client-proposal-container"><p className="client-proposal-overline">GETTING STARTED</p><h2>Three simple steps to get moving.</h2><ol className="ar-onboard">{page.process.map((step,i)=><li key={step.heading}><span className="ar-onboard-num">0{i+1}</span><div><p className="ar-mini-label">{labels[i]}</p><h3>{step.heading}</h3><p>{step.detail}</p></div></li>)}</ol></div></section>;
}
