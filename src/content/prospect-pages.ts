export type ProspectVideoData = { src: string; poster: string; heading?: string; caption?: string };
export type ProspectCalculatorData = {
  kind: "appointments";
  heading: string;
  explanation?: string;
  appointmentsPerWeek: number;
  averageValue: number;
  weeksPerYear: number;
  locations: number;
  maxLocations: number;
  sourceLabel?: string;
  sourceUrl?: string;
  disclaimer: string;
};
export type ProspectPageData = {
  slug: string;
  status: "draft" | "published" | "archived";
  clientName: string;
  clientLogo: { src: string; alt: string; sourceUrl: string };
  eyebrow: string;
  title: string;
  greeting: string;
  intro: string;
  context: { heading: string; body: string }[];
  opportunities: { title: string; detail: string }[];
  process: { heading: string; detail: string }[];
  deliverables: { title: string; detail: string }[];
  toolkit?: {
    heading: string;
    summary: string;
    durationMonths: number;
    monthlyPriceCad?: number;
    features: { heading: string; description: string }[];
    continuationNote: string;
  };
  price: number;
  normalPrice?: number;
  offerName: string;
  offerHeadline: string;
  sectionOrder?: string[];
  guarantee?: string;
  note: string;
  terms: {
    scope: string;
    clientResponsibilities: string;
    schedule: string;
    exclusions: string;
    payment: string;
    cancellation: string;
    confidentiality: string;
    liability: string;
    validity: string;
    contractingEntity: string;
  };
  calculator?: ProspectCalculatorData;
  video?: ProspectVideoData;
  extraSections?: { id: string; title: string; paragraphs: string[] }[];
  acceptance?: { proposalVersion: string };
  contactEmail: string;
  contactSubject: string;
};

export const prospectPages: Record<string, ProspectPageData> = {
  "hand-stone-guelph-waterloo": {
    slug: "hand-stone-guelph-waterloo",
    status: "published",
    clientName: "Hand & Stone Guelph + Waterloo",
    clientLogo: {
      src: "https://d9hhrg4mnvzow.cloudfront.net/handandstone.ca/we-are-hiring/dad42628-h-slogoregisterportraitcmyk_10jx09o000000000000028.png",
      alt: "Hand & Stone Massage and Facial Spa official logo",
      sourceUrl: "https://handandstone.ca/we-are-hiring/"
    },
    eyebrow: "A PERSONALIZED KICKSTART PROPOSAL FOR ERIN & LAYTON PHILLIPS",
    title: "You have the therapists. Let's fill the calendars.",
    greeting: "Erin and Layton,",
    intro: "You’ve done the hard work of building your team. The next opportunity is filling more appointments, helping guests rebook, introducing services that fit their needs and generating referrals.",
    context: [
      { heading: "The opportunity", body: "With staffing improving in Guelph, the focus can shift from finding therapists to filling open appointments. Let's find where the guest experience and local operations can make a measurable difference—within your franchise standards." }
    ],
    opportunities: [
      { title: "Rebook", detail: "Make booking the next appointment a natural part of checkout." },
      { title: "Discover", detail: "Help guests find relevant services, including facials, when appropriate." },
      { title: "Refer", detail: "Turn great guest experiences into more recommendations and referrals." }
    ],
    process: [
      { heading: "Listen and observe", detail: "Meet Erin, front-desk colleagues, an RMT and an aesthetician; walk through the guest journey and review available booking information." },
      { heading: "Identify and prioritize", detail: "Evaluate practical changes within local control, estimate their potential value and rank the most actionable opportunities." }
    ],
    deliverables: [
      { title: "CX opportunity assessment", detail: "What is helping—or hurting—repeat bookings, service discovery, referrals and available appointment utilization." },
      { title: "Prioritized 90-day action plan", detail: "Clear actions, estimated impact assumptions and suggested owners for Guelph; identify transferable lessons for Waterloo." },
      { title: "Working review with Erin", detail: "Walk through the findings, assumptions, priorities and immediate next decisions together." }
    ],
    toolkit: {
      heading: "Your next 90 days don't end with a report.",
      summary: "Your KickStart also includes three months of the AlignRISE monthly package: the practical tools and guidance to work through the priorities we identify, rather than leaving you with another assessment to file away.",
      durationMonths: 3,
      monthlyPriceCad: 299,
      features: [
        { heading: "The complete 3P Toolkit", description: "Use practical planning, process, performance and accountability tools to translate the 90-day plan into repeatable improvements across People, Product and Profit." },
        { heading: "AI-guided Assess → Align → Act", description: "Use guided prompts to clarify priorities, develop the operating tools you need, and put the changes into practice within your business." },
        { heading: "Monthly accountability review", description: "One 45-minute accountability session each month for three months to review progress, resolve obstacles and decide what needs attention next." }
      ],
      continuationNote: "Three months are included in this KickStart fee at no additional subscription charge. There is no automatic renewal or obligation to continue; any subscription after that period requires a separate agreement."
    },
    normalPrice: 5000,
    price: 2500,
    offerName: "AlignRISE KickStart — focused CX assessment",
    offerHeadline: "Let’s make your available capacity work harder.",
    sectionOrder: ["opportunity", "assessment", "deliverables", "toolkit", "calculator", "proposal"],
    guarantee: "If the assessment does not identify at least $25,000 in credible annual improvement opportunities, the assessment fee will be refunded. Identified opportunities are not guaranteed realized results.",
    note: "Includes the focused KickStart assessment, deliverables and three months of AlignRISE monthly-package access, with three 45-minute accountability sessions. The total proposed fee is CAD $2,500 plus applicable HST. This webpage is not an executed agreement or a commitment to results.",
    terms: {
      scope: "Focused on-site guest experience and booking opportunity review at Hand & Stone Guelph, a 90-day action plan and executive review, plus three months of AlignRISE monthly-package access (3P Toolkit, guided Assess–Align–Act workflow and one 45-minute accountability session per month). Lessons potentially applicable at Waterloo are included in the findings; a separate Waterloo on-site assessment is not.",
      clientResponsibilities: "Arrange access to the owner and an appropriate sample of front-desk, RMT and esthetics team members, plus suitable scheduling and business information. Share only information authorized under franchise and privacy rules.",
      schedule: "On-site assessment date and final readout date to be agreed in writing before engagement. The working target is a concise readout and 90-day plan following the visit.",
      exclusions: "No done-for-you implementation services, advertising spend, additional software purchases, coaching beyond the three included monthly accountability reviews, separate Waterloo site audit or guarantee of booked appointments is included unless separately agreed.",
      payment: "CAD $2,500 plus applicable HST includes the assessment, deliverables, and the first three months of the AlignRISE monthly package (normally CAD $299/month plus HST). There is no automatic renewal. 3P Solutions will confirm invoice instructions and due date in writing before work begins; no payment is collected through this page.",
      cancellation: "The on-site date will be scheduled by mutual agreement. Either party may request rescheduling with reasonable notice. Cancellation before services begin will be confirmed in writing, with any paid but unearned fees returned, less only non-refundable expenses approved in writing in advance. Once work begins, the parties will agree in writing on fees for work completed and any refund due. The stated opportunity guarantee remains available according to its terms.",
      confidentiality: "3P Solutions will use non-public business information only to perform this engagement, keep it confidential and protect it with reasonable safeguards. Disclosure is limited to professional advisers or service providers bound to confidentiality, or as required by law. These obligations exclude information already public without breach, independently developed, or lawfully received without restriction, and continue after the engagement. Client identification or case studies require advance written permission. Do not provide personal health information or identifiable guest records without a separately approved data-handling arrangement.",
      liability: "This is an advisory assessment. The client decides whether and how to implement recommendations. To the maximum extent permitted by law, 3P Solutions' total aggregate liability arising from this engagement, including negligence, is limited to CAD $2,500 (excluding HST). 3P Solutions is not liable for indirect or consequential losses, including lost profits or business interruption. This does not reduce the expressly stated opportunity-guarantee refund or exclude fraud, wilful misconduct or liability that cannot lawfully be limited.",
      validity: "Proposal reference AR-HS-GW-2026-11-24-v1, issued November 24, 2026. The terms remain an offer until changed or withdrawn in writing by 3P Solutions. Scheduling is subject to mutual availability.",
      contractingEntity: "3P Solutions, a sole proprietorship, is the service provider. The client must identify its full legal contracting entity and the representative authorized to act for it in the acceptance email. No separate electronic signature is required for this initial engagement; the parties confirm the engagement and outstanding logistics by email."
    },
    calculator: {
      kind: "appointments",
      heading: "What could a few more completed appointments mean?",
      explanation: "Illustrative annual service revenue—not profit and not a forecast. Edit the assumptions to explore scenarios.",
      appointmentsPerWeek: 5,
      averageValue: 130,
      weeksPerYear: 48,
      locations: 1,
      maxLocations: 2,
      sourceLabel: "Hand & Stone published service pricing",
      sourceUrl: "https://handandstone.ca/locations/guelph/",
      disclaimer: "The $130 starting appointment value is illustrative. Realized revenue depends on service mix, actual completed bookings, discounts and capacity. Costs, taxes and implementation expenses are excluded."
    },
    video: {
      src: "/proposal-media/hand-stone-introduction.mp4",
      poster: "/proposal-media/hand-stone-introduction-poster-v2.jpg",
      heading: "A personal introduction",
      caption: "A personal message for Erin and Layton."
    },
    acceptance: { proposalVersion: "AR-HS-GW-2026-11-24-v1" },
    contactEmail: "brent@3psolutions.ca",
    contactSubject: "Hand & Stone — AlignRISE KickStart proposal"
  }
,
 "kw-chair-massage": {
  "slug": "kw-chair-massage",
  "status": "draft",
  "clientName": "KW Chair Massage",
  "clientLogo": {
    "src": "",
    "alt": "KW Chair Massage",
    "sourceUrl": "https://kwchairmassage.com/"
  },
  "eyebrow": "A PERSONALIZED ALIGNRISE PILOT FOR FRANCES VAN DIEREN",
  "title": "Grow your business without compromising what makes it special.",
  "greeting": "Frances,",
  "intro": "It was great chatting with you. You've built a business you're proud of, and I want to help you grow it without sacrificing the quality your customers value. I'd like to give you the complete AlignRISE package for free as part of our early pilot, and personally help you put it to work.",
  "context": [
    {
      "heading": "The opportunity",
      "body": "Identify what makes your business different and what needs to be in place to consistently deliver that value as you grow."
    }
  ],
  "opportunities": [
    {
      "title": "Define your value",
      "detail": "Identify what makes KW Chair Massage different and which customers you want more of."
    },
    {
      "title": "Deliver consistently",
      "detail": "Clarify the processes and resources needed to protect your service quality."
    },
    {
      "title": "Grow with confidence",
      "detail": "Understand capacity and build a practical plan to pursue new customers."
    }
  ],
  "process": [
    {
      "heading": "Personalize your starting point",
      "detail": "A complimentary 30-minute session to customize your starting package."
    },
    {
      "heading": "Work on your business",
      "detail": "Use the AlignRISE tools and AI-assisted prompts to tackle one meaningful improvement at a time."
    },
    {
      "heading": "Three personal accountability sessions",
      "detail": "Meet with Brent once a month for three months to review your progress, work through obstacles and agree on your next priorities."
    }
  ],
  "deliverables": [
    {
      "title": "FREE — Complete AlignRISE toolkit",
      "detail": "The practical business planning, process and performance tools to help you build a business that can grow with confidence."
    },
    {
      "title": "FREE — Personalized starting package",
      "detail": "A complimentary 30-minute introductory call with Brent, followed by customized tools and AI-guided prompts focused on your business and your priorities."
    },
    {
      "title": "50% OFF — Three monthly accountability sessions",
      "detail": "One personal session with Brent each month for three months. Review progress, get help overcoming obstacles and decide what to do next. You pay only for Brent’s time, at half the regular monthly rate."
    }
  ],
  "price": 150,
  "normalPrice": 300,
  "offerName": "AlignRISE early pilot",
  "offerHeadline": "The entire AlignRISE package is yours. FREE.",
  "sectionOrder": [
    "opportunity",
    "how-alignrise-works",
    "assessment",
    "deliverables",
    "proposal"
  ],
  "note": "As an early pilot participant, you receive the complete AlignRISE toolkit, personalized AI-guided starting package and 30-minute introductory session at no cost. Your only investment is my time: three personal monthly accountability sessions, one each month, at half my regular rate. Just CAD $150 per month + HST for three months ($450 + HST total). After that, continue only if you see the value, at the regular $300/month + HST. No automatic renewal.",
  "terms": {
    "scope": "Complimentary complete AlignRISE toolkit, personalized starting package and 30-minute introductory session, plus three paid monthly personal accountability sessions with Brent (one each month).",
    "clientResponsibilities": "Participate in onboarding and work through agreed priorities.",
    "schedule": "Introductory call and three monthly accountability sessions scheduled by mutual agreement; session duration confirmed at onboarding.",
    "exclusions": "No KickStart assessment, done-for-you consulting, additional paid software or guaranteed business results.",
    "payment": "All toolkit and introductory onboarding materials are complimentary. Only the three monthly accountability sessions are charged, at CAD $150/month plus HST (50% off the regular $300/month rate). Total pilot investment CAD $450 plus HST. Optional continuation at $300/month plus HST.",
    "cancellation": "No automatic renewal after the pilot; cancellation terms to be agreed before paid services begin.",
    "confidentiality": "Do not provide identifiable client health information.",
    "liability": "Business decisions remain with the owner; final conditions to be agreed before paid services begin.",
    "validity": "Proposed pilot offer, November 26, 2026; subject to mutual confirmation.",
    "contractingEntity": "3P Solutions is the provider; client legal entity to be confirmed."
  },
  "contactEmail": "brent@3psolutions.ca",
  "contactSubject": "KW Chair Massage — AlignRISE pilot",
  "extraSections": [
    {
      "id": "how-alignrise-works",
      "title": "What is AlignRISE — and how does it work?",
      "paragraphs": [
        "AlignRISE is a practical, self-guided business improvement system for small business owners. It brings together the same business frameworks and tools I use in my consulting work, with personalized AI-guided assistance and human accountability, so you can work ON your business without hiring a full-time consultant.",
        "ASSESS — Understand where your business is today, what is working, and what is preventing you from achieving your goals. For KW Chair Massage, we will start with what makes your service valuable and what currently limits your confidence to grow.",
        "ALIGN — Clarify what you want to achieve, who your ideal customers are, what makes you different, and what people, processes and performance measures need to be in place to deliver that value consistently.",
        "ACT — Turn those priorities into manageable actions. Use your personalized AI prompts and practical templates to develop the tools your business actually needs, at your own pace. Each month, we meet personally to review progress, work through obstacles and identify what to tackle next.",
        "You do the work in your own business, with guidance from AlignRISE and accountability from me. You don't need to complete a comprehensive business assessment or build every system before getting started. We start with your biggest priority and build from there."
      ]
    }
  ]
}
};
