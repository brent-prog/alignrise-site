"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const bookingUrl = "https://calendly.com/brent3p/30min";
const linkedInUrl = "https://www.linkedin.com/company/3psolutionscanada";

const symptoms = [
  "The owner is still the escalation path for too many decisions.",
  "Good people are busy, but priorities are not always clear.",
  "Processes live in heads, habits, spreadsheets, and side conversations.",
  "Metrics exist, but they do not always change what happens next.",
  "Customers get value, but not always the same value every time.",
  "Growth adds complexity before it creates freedom.",
];

const systemCells = [
  {
    lens: "People",
    planning: "Clarify roles, goals, incentives, responsibilities, and ownership.",
    processes: "Build the habits for hiring, onboarding, coaching, communication, and accountability.",
    performance: "Track capability, engagement, retention, coaching quality, and execution follow-through.",
  },
  {
    lens: "Product",
    planning: "Define the customer promise, journey priorities, standards, and improvement roadmap.",
    processes: "Document sales, delivery, support, handoffs, SOPs, tools, and feedback loops.",
    performance: "Measure quality, consistency, retention, referrals, complaints, and value created.",
  },
  {
    lens: "Profit",
    planning: "Set revenue goals, margin targets, cash priorities, and reinvestment decisions.",
    processes: "Standardize pricing, billing, reporting, forecasting, cost control, and financial rhythm.",
    performance: "Review revenue, margin, cash flow, efficiency, business value, and owner return.",
  },
];

const reviewSteps = [
  {
    number: "01",
    title: "Assess",
    text: "Work through the AlignRISE diagnostic across People, Product, Profit, Planning, Processes, and Performance.",
  },
  {
    number: "02",
    title: "Map the gaps",
    text: "See where the business is clear, where it is drifting, and where it depends too much on individual memory or effort.",
  },
  {
    number: "03",
    title: "Prioritize",
    text: "Separate noise from the highest-impact system improvements the business should address first.",
  },
  {
    number: "04",
    title: "Implement",
    text: "Use the review to guide roles, rhythms, processes, measures, and documentation that make the business easier to run.",
  },
  {
    number: "05",
    title: "Review",
    text: "Create a repeatable weekly rhythm to check what changed, what is stuck, and what needs to improve next.",
  },
];

const audiences = [
  {
    name: "Business Owners",
    headline: "Run the review without waiting for a consultant.",
    text: "Use AlignRISE to see where the business is too dependent on you and what systems need to be clarified first.",
  },
  {
    name: "Consultants and Advisors",
    headline: "Use a structured operating framework.",
    text: "Apply AlignRISE with clients as a practical diagnostic system instead of rebuilding discovery from scratch every time.",
  },
  {
    name: "Leaders and Managers",
    headline: "Improve execution through better systems.",
    text: "Connect priorities, roles, coaching, process, and performance so the team can improve consistently.",
  },
];

const functions = [
  "Leadership and Strategy",
  "Marketing",
  "Sales",
  "Operations",
  "Customer Experience",
  "Human Resources",
  "Finance",
  "Technology",
  "Administration",
  "Legal, Risk, and Compliance",
];

const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#system", label: "System" },
  { href: "#review", label: "How It Works" },
  { href: "#who", label: "Who It's For" },
];

export default function Home() {
  const year = new Date().getFullYear();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    function handleResize() {
      if (window.innerWidth > 820) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Main navigation">
          <a className="navBrand" href="#home" aria-label="AlignRISE home" onClick={() => setIsMenuOpen(false)}>
            <span className="navWordmark">
              <span>Align</span><strong>RISE</strong>
            </span>
          </a>

          <div className="navDesktopLinks">
            {navLinks.map((link) => (
              <a href={link.href} key={link.href}>{link.label}</a>
            ))}
          </div>

          <div className="navControls">
            <div className="mobileMenu" ref={menuRef}>
              <button
                className="menuButton"
                type="button"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </button>
              {isMenuOpen && (
                <div className="mobileMenuLinks" id="mobile-navigation">
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.href} onClick={() => setIsMenuOpen(false)}>{link.label}</a>
                  ))}
                </div>
              )}
            </div>
            <a className="navCta" href={bookingUrl} target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <Image className="heroLogo" src="/alignrise-logo.svg" alt="AlignRISE logo" width={260} height={260} priority />
            <p className="eyebrow">AlignRISE™ by 3P Solutions</p>
            <h1>Your business is growing. It should not be getting harder to run.</h1>
            <p className="heroLead">
              AlignRISE is a self-directed business alignment system that helps owners, advisors, and leaders diagnose how the business actually runs and build repeatable systems across People, Product, and Profit.
            </p>
            <div className="heroActions">
              <a className="buttonPrimary" href={bookingUrl} target="_blank" rel="noreferrer">
                Start With AlignRISE
              </a>
              <a className="buttonSecondary" href="#review">
                See How It Works
              </a>
            </div>
          </div>

          <aside className="diagnosticPanel" aria-label="AlignRISE diagnostic summary">
            <div className="panelTopline">Self-Directed Alignment Snapshot</div>
            <div className="scoreRow">
              <span>People</span>
              <strong>Clear?</strong>
            </div>
            <div className="bar"><span className="barAmber" /></div>
            <div className="scoreRow">
              <span>Product</span>
              <strong>Consistent?</strong>
            </div>
            <div className="bar"><span className="barBlue" /></div>
            <div className="scoreRow">
              <span>Profit</span>
              <strong>Visible?</strong>
            </div>
            <div className="bar"><span className="barPurple" /></div>
            <div className="panelDivider" />
            <p>
              Use the review to see where the business is aligned, where it is drifting, and what system needs to be built next.
            </p>
            <div className="panelTags">
              <span>Assess</span>
              <span>Prioritize</span>
              <span>Implement</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section problemSection" id="problem">
        <div className="sectionIntro">
          <p className="eyebrow">The real problem</p>
          <h2>Most businesses do not fail because the owner lacks effort.</h2>
          <p>
            They struggle because the business does not run as a system. When the system is unclear,
            the owner becomes the memory, the manager, the process, the quality check, and the backup plan.
          </p>
        </div>
        <div className="symptomGrid">
          {symptoms.map((symptom) => (
            <div className="symptom" key={symptom}>
              <span aria-hidden="true" />
              <p>{symptom}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section darkSection" id="system">
        <div className="sectionIntro centered">
          <p className="eyebrow">The AlignRISE system</p>
          <h2>A practical way to diagnose and improve the business yourself.</h2>
          <p>
            AlignRISE connects People, Product, and Profit with the management disciplines that make improvement repeatable: Planning, Processes, and Performance.
          </p>
        </div>

        <div className="matrix" aria-label="People Product Profit and Planning Processes Performance matrix">
          <div className="matrixHeader empty">3P Business Lens</div>
          <div className="matrixHeader">Planning</div>
          <div className="matrixHeader">Processes</div>
          <div className="matrixHeader">Performance</div>
          {systemCells.map((row) => (
            <div className="matrixRow" key={row.lens}>
              <div className="matrixLens">{row.lens}</div>
              <div>{row.planning}</div>
              <div>{row.processes}</div>
              <div>{row.performance}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section reviewSection" id="review">
        <div className="reviewIntro">
          <p className="eyebrow">How AlignRISE works</p>
          <h2>Run the review. Find the gaps. Build the operating system.</h2>
          <p>
            AlignRISE gives you a structured way to assess the business, identify the highest-impact gaps, and turn the findings into practical work your team can actually execute.
          </p>
        </div>
        <div className="reviewSteps">
          {reviewSteps.map((step) => (
            <article className="stepCard" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section functionsSection">
        <div className="sectionIntro splitIntro">
          <div>
            <p className="eyebrow">10 core functions</p>
            <h2>See the whole business, not just the loudest problem.</h2>
          </div>
          <p>
            AlignRISE helps you look across each business function through People, Product, Profit and through Planning, Processes, and Performance. The goal is clarity, consistency, and accountability.
          </p>
        </div>
        <div className="functionList" aria-label="10 core business functions">
          {functions.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section audienceSection" id="who">
        <div className="sectionIntro centered">
          <p className="eyebrow">Who it is for</p>
          <h2>Built for people who want a practical system, not another vague strategy conversation.</h2>
        </div>
        <div className="audienceGrid">
          {audiences.map((audience) => (
            <article className="audienceCard" key={audience.name}>
              <p className="audienceLabel">{audience.name}</p>
              <h3>{audience.headline}</h3>
              <p>{audience.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section aiSection" id="ai-readiness">
        <div>
          <p className="eyebrow">AI readiness</p>
          <h2>Build the system before you automate the chaos.</h2>
        </div>
        <p>
          AI can help a business move faster, but it cannot fix unclear goals, inconsistent processes,
          weak documentation, poor accountability, or misaligned decision-making. AlignRISE helps create the clarity and knowledge foundation required for AI to assist human leaders responsibly.
        </p>
      </section>

      <section className="finalCta" id="book">
        <Image src="/alignrise-icon.svg" alt="" width={88} height={88} />
        <p className="eyebrow">Start with the system</p>
        <h2>Run your own business alignment review.</h2>
        <p>
          AlignRISE gives you a structured way to see where the business is breaking, what needs to be clarified, and what to build first.
        </p>
        <a className="buttonPrimary" href={bookingUrl} target="_blank" rel="noreferrer">
          Start With AlignRISE
        </a>
      </section>

      <footer className="siteFooter">
        <div className="footerInner">
          <div className="footerBrandBlock">
            <a className="footerBrand" href="#home" aria-label="AlignRISE home">
              <span>Align</span><strong>RISE</strong>
            </a>
            <p>
              AlignRISE™ is a self-directed business alignment system built to help owners, advisors, and leaders diagnose and improve the business across People, Product, and Profit.
            </p>
            <a className="footerCta" href={bookingUrl} target="_blank" rel="noreferrer">
              Start With AlignRISE
            </a>
          </div>

          <div className="footerLinkGroup">
            <h2>Site</h2>
            <a href="#problem">Problem</a>
            <a href="#system">System</a>
            <a href="#review">How It Works</a>
            <a href="#who">Who It&apos;s For</a>
          </div>

          <div className="footerLinkGroup">
            <h2>Core Lens</h2>
            <span>People</span>
            <span>Product</span>
            <span>Profit</span>
            <span>Planning, Processes, Performance</span>
          </div>

          <div className="footerLinkGroup">
            <h2>Contact</h2>
            <a href="https://3psolutions.ca" target="_blank" rel="noreferrer">3P Solutions</a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:brent@3psolutions.ca">brent@3psolutions.ca</a>
            <a href={bookingUrl} target="_blank" rel="noreferrer">Calendly</a>
          </div>
        </div>

        <div className="footerBottom">
          <p>© {year} AlignRISE™ by 3P Solutions. All rights reserved.</p>
          <p>Alignment before automation.</p>
        </div>
      </footer>
    </main>
  );
}
