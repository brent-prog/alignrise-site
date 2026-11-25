"use client";

import Image from "next/image";
import ProspectNavigation from "./ProspectNavigation";
import ProspectVideo from "./ProspectVideo";
import ScenarioCalculator from "./ScenarioCalculator";
import "./prospect.css";
import type { ProspectPageData } from "@/content/prospect-pages";

const money = (n: number) => new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 }).format(n);

export default function ProspectExperience({ page }: { page: ProspectPageData }) {
  const email = "mailto:" + page.contactEmail + "?subject=" + encodeURIComponent(page.contactSubject) + "&body=" + encodeURIComponent("Hi Brent,\n\nThanks for putting this together. Let's discuss the AlignRISE KickStart for Hand & Stone.\n\nErin");
  const style = {
    shell: { background: "#f8fafc", color: "#111827", fontFamily: "Arial, Helvetica, sans-serif", minHeight: "100vh" } as const,
    wrap: { maxWidth: 1060, margin: "0 auto", padding: "0 22px" } as const,
    h2: { fontSize: "clamp(26px,3.5vw,35px)", letterSpacing: "-.03em", color: "#201060", margin: "0 0 16px", lineHeight: 1.2 } as const,
    body: { fontSize: 16, lineHeight: 1.65, color: "#475569" } as const
  };
  const btn = { display: "inline-block", textDecoration: "none", background: "#4840e0", color: "#fff", borderRadius: 9, padding: "14px 20px", fontSize: 15, fontWeight: 750 } as const;
  return <main id="top" style={style.shell}>
    <header style={{ background: "#201060", padding: "10px 0" }}>
      <div style={{ ...style.wrap, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 15 }}>
        <a href="https://alignrise.ca/" aria-label="AlignRISE home"><Image src="/alignrise-logo.svg" width={108} height={108} style={{ height: 65, width: "auto" }} alt="AlignRISE" priority /></a>
        <span style={{ color: "#ddd6fe", fontSize: 12 }}>AlignRISE™ by 3P Solutions</span>
      </div>
    </header>
    <ProspectNavigation links={[
      ...(page.video ? [{id:"introduction",title:"Introduction"}] : []),
      {id:"opportunity",title:"Opportunity"},
      {id:"assessment",title:"KickStart"},
      {id:"calculator",title:"Value"},
      {id:"proposal",title:"Next step"}
    ]}/>
    <ProspectVideo video={page.video}/>
    <section style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "48px 0 46px" }}>
      <div style={style.wrap}>
        <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".1em", color: "#4840e0" }}>{page.eyebrow}</p>
        <h1 style={{ fontSize: "clamp(36px,5.3vw,59px)", maxWidth: 860, lineHeight: 1.08, letterSpacing: "-.045em", margin: "18px 0", color: "#201060" }}>{page.title}</h1>
        <p style={{ ...style.body, maxWidth: 870, fontSize: 18 }}><strong style={{ color: "#111827" }}>{page.greeting}</strong> {page.intro}</p>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16, marginTop: 22 }}>
          <a href="#proposal" style={btn}>See your KickStart</a><a href="#opportunity" style={{ color: "#4840e0", fontWeight: 700 }}>Calculate the opportunity ↓</a>
        </div>
      </div>
    </section>
    <section style={{ padding: "42px 0" }}><div style={style.wrap}>
      <h2 style={style.h2}>The opportunity now: more bookings.</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(245px,1fr))", gap: 14 }}>
        {page.context.map((c, i) => <article key={i} style={{ border: "1px solid #e2e8f0", borderRadius: 12, background: "#fff", padding: 22 }}><h3 style={{ margin: "0 0 9px", fontSize: 18, color: "#201060" }}>{c.heading}</h3><p style={{ ...style.body, fontSize: 14, margin: 0 }}>{c.body}</p></article>)}
      </div>
    </div></section>
    <section id="opportunity" style={{ background: "#201060", padding: "45px 0", scrollMarginTop: 20 }}><div style={style.wrap}>
      <p style={{ letterSpacing: ".1em", color: "#c7d2fe", fontSize: 12, fontWeight: 800 }}>THE OPPORTUNITY</p>
      <h2 style={{ ...style.h2, color: "#fff", maxWidth: 730 }}>Three ways to fill more appointments.</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(225px,1fr))", gap: 12 }}>
        {page.opportunities.map((o, i) => <article key={i} style={{ background: "#fff", borderRadius: 11, padding: 20 }}><span style={{ color: "#4840e0", fontWeight: 800, fontSize: 12 }}>0{i + 1}</span><h3 style={{ color: "#201060", margin: "9px 0", fontSize: 18 }}>{o.title}</h3><p style={{ ...style.body, fontSize: 14, margin: 0 }}>{o.detail}</p></article>)}
      </div>
    </div></section>
    <section id="calculator" style={{ padding: "30px 0" }}><div style={style.wrap}>
      <p style={{ color: "#4840e0", fontWeight: 800, letterSpacing: ".1em", fontSize: 12 }}>ILLUSTRATIVE OPPORTUNITY CALCULATOR</p>
      <h2 style={style.h2}>What would a few more appointments be worth?</h2>
      <p style={{ ...style.body, maxWidth: 810 }}>Move the sliders to see potential added service revenue. These are examples, not a forecast.</p>
      <ScenarioCalculator defaultAppointments={5} defaultValue={130} weeks={48}/>
      <p style={{ fontSize: 12, lineHeight: 1.6, color: "#64748b" }}>The starting $130 appointment value is illustrative, informed by public <a href="https://handandstone.ca/spa-menu/theboardwalk/" target="_blank" rel="noopener noreferrer" style={{ color: "#4840e0" }}>Hand & Stone service prices</a>. Actual revenue depends on completed appointments, service mix and discounts. It is not profit.</p>
    </div></section>
    <section id="proposal" style={{ background: "#fff", padding: "45px 0", scrollMarginTop: 20 }}><div style={style.wrap}>
      <p style={{ color: "#4840e0", fontWeight: 800, letterSpacing: ".1em", fontSize: 12 }}>YOUR ALIGNRISE KICKSTART</p>
      <h2 style={style.h2}>A focused review. Practical next steps.</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 18 }}>
        {page.process.map((p, i) => <article key={i} style={{ padding: "10px 6px" }}><div style={{ fontWeight: 800, color: "#4840e0" }}>0{i + 1}</div><h3 style={{ color: "#201060", fontSize: 19, margin: "9px 0" }}>{p.heading}</h3><p style={{ ...style.body, fontSize: 14, margin: 0 }}>{p.detail}</p></article>)}
      </div>
    </div></section>
    {page.extraSections?.map(section => <section key={section.id} id={section.id} style={{padding:"28px 0", background:"#fff"}}><div style={style.wrap}><h2 style={style.h2}>{section.title}</h2>{section.paragraphs.map((p,i)=><p style={style.body} key={i}>{p}</p>)}</div></section>)}
    <section id="proposal" style={{ padding: "30px 0" }}><div style={style.wrap}>
      <div style={{ background: "#201060", borderRadius: 16, color: "#fff", padding: "clamp(22px,4vw,42px)" }}>
        <p style={{ color: "#c7d2fe", fontWeight: 800, fontSize: 12, letterSpacing: ".1em" }}>A PERSONAL OFFER</p>
        <h2 style={{ color: "#fff", fontSize: "clamp(26px,3.5vw,36px)", margin: "12px 0" }}>Your KickStart. Half the regular fee.</h2>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap" }}><span style={{ fontSize: 16, color: "#c7d2fe", textDecoration: "line-through" }}>{money(page.normalPrice)}</span><strong style={{ fontSize: 44 }}>{money(page.price)}</strong><span style={{ color: "#ddd6fe", fontSize: 13 }}>CAD + applicable HST</span></div>
        <div style={{ background: "#fff", padding: 22, borderRadius: 11, color: "#201060", margin: "20px 0" }}><h3 style={{ margin: "0 0 9px" }}>The $25,000 opportunity guarantee</h3><p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>{page.guarantee}</p></div>
        <p style={{ fontSize: 13, lineHeight: 1.65, color: "#e2e8f0" }}>{page.note}</p>
        <a href={email} style={{ ...btn, background: "#fff", color: "#201060" }}>Let's discuss the assessment</a>
      </div>
    </div></section>
    <footer style={{ borderTop: "1px solid #e2e8f0", padding: "25px 0 35px", background: "#fff" }}><div style={{ ...style.wrap, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 12, color: "#64748b" }}><span>AlignRISE™ by 3P Solutions · Prepared for Erin & Layton Phillips</span><a style={{ color: "#4840e0" }} href={"mailto:" + page.contactEmail}>brent@3psolutions.ca</a></div></footer>
  </main>;
}
