import Image from "next/image";

const symptoms = [
  "Too much knowledge lives in the owner's head.",
  "Execution depends on a few key people.",
  "Priorities are busy, but unclear.",
  "Processes exist informally or inconsistently.",
  "Metrics are tracked, but not acted on.",
  "Growth creates more complexity instead of more freedom.",
];

const businessLens = [
  {
    name: "People",
    text: "Role clarity, capability, coaching, engagement, and the leadership habits that help the team execute.",
  },
  {
    name: "Product",
    text: "Customer value, service quality, delivery consistency, journey design, retention, and trust.",
  },
  {
    name: "Profit",
    text: "Revenue, margin, cash flow, efficiency, owner return, reinvestment capacity, and business value.",
  },
];

const managementLens = [
  {
    name: "Planning",
    text: "Direction, goals, priorities, roles, action plans, and sequencing.",
  },
  {
    name: "Processes",
    text: "Workflows, SOPs, tools, documentation, journey maps, and repeatability.",
  },
  {
    name: "Performance",
    text: "KPIs, scorecards, trends, accountability, analysis, and action from data.",
  },
];

const steps = [
  {
    name: "Diagnose",
    text: "Assess the business across People, Product, Profit, and the operating habits underneath them.",
  },
  {
    name: "Align",
    text: "Turn the findings into priorities, owners, role clarity, goals, and practical improvement work.",
  },
  {
    name: "Execute",
    text: "Run a weekly accountability rhythm that connects planning, processes, and performance.",
  },
  {
    name: "Review",
    text: "Measure what changed, tighten the system, and prepare the business for responsible AI support.",
  },
];

const audiences = [
  {
    name: "Owners",
    text: "Free yourself from being the operating system and see what to fix first.",
  },
  {
    name: "Consultants and Advisors",
    text: "Use a structured, repeatable discovery and prioritization system with clients.",
  },
  {
    name: "Leaders",
    text: "Execute through clearer decision-making, coaching, ownership, and follow-up.",
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
  "Risk and Compliance",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <nav className="nav" aria-label="Main navigation">
          <a className="navBrand" href="#home" aria-label="AlignRISE home">
            <Image src="/alignrise-icon.svg" alt="" width={44} height={44} priority />
            <span>AlignRISE</span>
          </a>
          <div className="navLinks">
            <a href="#system">How It Works</a>
            <a href="#owners">For Owners</a>
            <a href="#resources">Resources</a>
            <a className="navCta" href="mailto:info@alignrise.ca?subject=AlignRISE%20Business%20Alignment%20Review">Book a Review</a>
          </div>
        </nav>

        <div className="heroInner">
          <Image className="heroLogo" src="/alignrise-logo.svg" alt="AlignRISE logo" width={300} height={300} priority />
          <p className="eyebrow">AlignRISE by 3P Solutions</p>
          <h1>AlignRISE™ Business Alignment System</h1>
          <p className="heroLead">
            Build the system your business needs to scale without everything depending on you.
          </p>
          <div className="heroActions">
            <a className="buttonPrimary" href="mailto:info@alignrise.ca?subject=Start%20the%20AlignRISE%20Review">
              Start the AlignRISE Review
            </a>
            <a className="buttonSecondary" href="#system">
              See the Framework
            </a>
          </div>
          <div className="heroProof" aria-label="AlignRISE core lenses">
            <span>People</span>
            <span>Product</span>
            <span>Profit</span>
            <span>Planning</span>
            <span>Processes</span>
            <span>Performance</span>
          </div>
        </div>
      </section>

      <section className="section problemSection" id="problem">
        <div className="sectionHeader">
          <p className="eyebrow">The real problem</p>
          <h2>Most businesses do not struggle because the owner lacks effort.</h2>
          <p>
            They struggle because the business does not run as a system. The symptoms show up in people,
            customer experience, profitability, and the owner's calendar.
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

      <section className="section systemSection" id="system">
        <div className="sectionHeader compact">
          <p className="eyebrow">The system</p>
          <h2>Align People, Product, and Profit before growth creates more complexity.</h2>
          <p>
            AlignRISE connects the business health lens with the operating habits that make improvement repeatable.
          </p>
        </div>

        <div className="lensBlock">
          <div className="lensLabel">3Ps of Business</div>
          <div className="cardGrid three">
            {businessLens.map((item) => (
              <article className="infoCard" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="lensBlock">
          <div className="lensLabel">3Ps of Management</div>
          <div className="cardGrid three">
            {managementLens.map((item) => (
              <article className="infoCard" key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section processSection" id="how-it-works">
        <div className="sectionHeader compact">
          <p className="eyebrow">How it works</p>
          <h2>Diagnose the gap. Align the work. Run the rhythm.</h2>
        </div>
        <div className="processGrid">
          {steps.map((step, index) => (
            <article className="processCard" key={step.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section matrixSection" id="resources">
        <div className="matrixIntro">
          <p className="eyebrow">Business Alignment Review</p>
          <h2>A practical map for the 10 core business functions.</h2>
          <p>
            Each function can be assessed through People, Product, Profit and through Planning, Processes,
            and Performance. The goal is not more documentation. The goal is a business that runs with more
            clarity, consistency, and accountability.
          </p>
        </div>
        <div className="functionList" aria-label="10 core business functions">
          {functions.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section audienceSection" id="owners">
        <div className="sectionHeader compact">
          <p className="eyebrow">Who it is for</p>
          <h2>Owners, advisors, and leaders who need the business to run better.</h2>
        </div>
        <div className="cardGrid three">
          {audiences.map((audience) => (
            <article className="audienceCard" key={audience.name}>
              <h3>{audience.name}</h3>
              <p>{audience.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section nowSection" id="why-now">
        <div>
          <p className="eyebrow">Why now</p>
          <h2>Alignment before automation.</h2>
        </div>
        <p>
          AI can help a business move faster, but it cannot fix unclear goals, inconsistent processes,
          weak documentation, poor accountability, or misaligned decision-making. AlignRISE creates the
          clarity and knowledge foundation required for AI to assist human leaders responsibly.
        </p>
      </section>

      <section className="finalCta" id="book">
        <Image src="/alignrise-icon.svg" alt="" width={92} height={92} />
        <p className="eyebrow">Start with the review</p>
        <h2>See where the business is breaking and what to fix first.</h2>
        <a className="buttonPrimary" href="mailto:info@alignrise.ca?subject=Book%20an%20AlignRISE%20Alignment%20Review">
          Book an Alignment Review
        </a>
      </section>
    </main>
  );
}
