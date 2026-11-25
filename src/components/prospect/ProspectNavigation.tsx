"use client";
import { useState } from "react";
export type ProposalNavLink = { id: string; title: string };
export default function ProspectNavigation({ links }: { links: ProposalNavLink[] }) {
  const [expanded, setExpanded] = useState(false);
  return <nav aria-label="Proposal sections" className="proposal-nav">
    <div className="proposal-nav-inner">
      <a href="#top" className="proposal-nav-top">↑ Top</a>
      <button className="proposal-nav-toggle" type="button" aria-expanded={expanded}
        aria-controls="proposal-nav-links" onClick={() => setExpanded(x => !x)}>Sections {expanded ? "−" : "+"}</button>
      <div id="proposal-nav-links" className={"proposal-nav-links" + (expanded ? " is-open" : "")}>
        {links.map(link => <a href={"#" + link.id} key={link.id} onClick={() => setExpanded(false)}>{link.title}</a>)}
      </div>
      <a className="proposal-nav-site" href="https://alignrise.ca/" target="_blank" rel="noopener noreferrer">AlignRISE ↗</a>
    </div>
  </nav>;
}
