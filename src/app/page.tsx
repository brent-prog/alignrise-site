import Image from "next/image";

const bookingUrl = "https://calendly.com/brent3p/30min";

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
    planning: "Role clarity, goals, incentives, and ownership.",
    processes: "Hiring, onboarding, coaching, communication, and accountability habits.",
    performance: "Engagement, capability, retention, coaching quality, and execution follow-through.",
  },
  {
    lens: "Product",
    planning: "Customer promise, journey priorities, service standards, and improvement roadmap.",
    processes: "Sales, delivery, support, handoffs, SOPs, tools, and customer feedback loops.",
    performance: "Quality, consistency, retention, referrals, complaints, and customer value created.",
  },
  {
    lens: "Profit",
    planning: "Revenue goals, margin targets, cash priorities, and reinvestment decisions.",
    processes: "Pricing, billing, reporting, forecasting, cost control, and financial cadence.",
    performance: "Revenue, margin, cash flow, efficiency, business value, and owner return.",
  },
];

const reviewSteps = [
  {
    number: "01",
    title: "Diagnose the system",
    text: "Assess the business across People, Product, Profit and the operating habits underneath them.",
  },
  {
    number: "02",
    title: "Name the real gaps",
    text: "Separate symptoms from root causes so the team stops chasing the loudest problem.",
  },
  {
    number: "03",
    title: "Prioritize the work",
    text: "Turn the review into focused actions, owners, timelines, and a weekly accountability rhythm.",
  },
  {
    number: "04",
    title: "Review what changed",
    text: "Use performance evidence to tighten the system and decide the next best improvement.",
  },
];

const audiences = [
  {
    name: "Business Owners",
    headline: "Stop being the operating system.",
    text: "See where the business is too dependent on you, what needs to be clarified, and what to fix first.",
  },
  {
    name: "Consultants and Advisors",
    headline: "Stop starting from scratch.",
    text: "Use a structured business review system with clients instead of rebuilding discovery every time.",
  },
  {
    name: "Leaders and Managers",
    headline: "Execute through people.",
    text: "Connect priorities, roles, coaching, process, and performance so the team improves consistently.",
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

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Main navigation">
          <a className="navBrand" href="#home" aria-label="AlignRISE home">
            <span className="navWordmark">
              <span>Align</span><strong>RISE</strong>
            </span>
          </a>
          <div className="navLinks">
            <a href="#problem">Problem</a>
            <a href="#system">System</a>
            <a href="#review">Review</a>
            <a href="#who">Who It&apos;s For</a>
            <a className="navCta" href={bookingUrl} target="_blank" rel="noreferrer">
              Book a Review
            </a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <Image className="heroLogo" src="/alignrise-logo.svg" alt="AlignRISE logo" width={260} height={260} priority />
            <p className="eyebrow">AlignRISE™ by 3P Solutions</p>
            <h1>Your business is growing. It should not be getting harder to run.</h1>
            <p className="heroLead">
              AlignRISE helps owners, advisors, and leaders turn scattered effort into an aligned,
              repeatable business system across People, Product, and Profit.
            </p>
            <div className="heroActions">
              <a className="buttonPrimary" href={bookingUrl} target="_blank" rel="noreferrer">
                Start the AlignRISE Review
              </a>
              <a className="buttonSecondary" href="#system">
                See the System
              </a>
            </div>
          </div>

          <aside className="diagnosticPanel" aria-label="AlignRISE diagnostic summary">
            <div className="panelTopline">Business Alignment Snapshot</div>
            <div className="scoreRow">
              <span>People</span>
              <strong>Aligned?</strong>
            </div>
            <div className="bar"><span className="barAmber" /></div>
            <div className="scoreRow">
              <span>Product</span>
              <strong>Consistent?</strong>
            </div>
            <div className="bar"><span className="barBlue" /></div>
            <div className="scoreRow">
              <span>Profit</span>
              <strong>Improving?</strong>
            </div>
            <div className="bar"><span className="barPurple" /></div>
            <div className="panelDivider" />
            <p>
              The review shows where the business is clear, where it is drifting, and where the next improvement needs ownership.
            </p>
            <div className="panelTags">
              <span>Planning</span>
              <span>Processes</span>
              <span>Performance</span>
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
          <h2>Align the business through the 3Ps that actually determine whether it works.</h2>
          <p>
            People, Product, and Profit are connected. Planning, Processes, and Performance are how the business improves them.
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
          <p className="eyebrow">Business Alignment Review</p>
          <h2>Not more theory. A practical review that turns into accountable work.</h2>
          <p>
            AlignRISE gives the business a repeatable review rhythm. It helps the team see the whole system,
            decide what matters most, and follow through instead of collecting another list of good ideas.
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
            Each function can be assessed through People, Product, Profit and through Planning, Processes,
            and Performance. The goal is clarity, consistency, and accountability.
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
          <h2>Built for people responsible for making the business run better.</h2>
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
          weak documentation, poor accountability, or misaligned decision-making. AlignRISE creates the
          clarity and knowledge foundation required for AI to assist human leaders responsibly.
        </p>
      </section>

      <section className="finalCta" id="book">
        <Image src="/alignrise-icon.svg" alt="" width={88} height={88} />
        <p className="eyebrow">Start with the review</p>
        <h2>See where the business is breaking and what to fix first.</h2>
        <p>
          The first step is not a bigger plan. It is a clearer diagnosis of the system you already have.
        </p>
        <a className="buttonPrimary" href={bookingUrl} target="_blank" rel="noreferrer">
          Book an Alignment Review
        </a>
      </section>

      <footer className="siteFooter">
        <div className="footerInner">
          <div className="footerBrandBlock">
            <a className="footerBrand" href="#home" aria-label="AlignRISE home">
              <span>Align</span><strong>RISE</strong>
            </a>
            <p>
              AlignRISE™ helps owners, advisors, and leaders diagnose where the business is breaking and build an aligned,
              repeatable system across People, Product, and Profit.
            </p>
            <a className="footerCta" href={bookingUrl} target="_blank" rel="noreferrer">
              Book an Alignment Review
            </a>
          </div>

          <div className="footerLinkGroup">
            <h2>Site</h2>
            <a href="#problem">Problem</a>
            <a href="#system">System</a>
            <a href="#review">Review</a>
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
