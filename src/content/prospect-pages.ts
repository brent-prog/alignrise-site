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
    normalPrice: 5000,
    price: 2500,
    offerName: "AlignRISE KickStart — focused CX assessment",
    offerHeadline: "Let’s make your available capacity work harder.",
    sectionOrder: ["opportunity", "assessment", "deliverables", "calculator", "proposal"],
    guarantee: "If the assessment does not identify at least $25,000 in credible annual improvement opportunities, the assessment fee will be refunded. Identified opportunities are not guaranteed realized results.",
    note: "This is a personalized commercial proposal—not an executed agreement or a commitment to results. All amounts are Canadian dollars plus applicable HST.",
    terms: {
      scope: "Focused on-site guest experience and booking opportunity review at Hand & Stone Guelph. Lessons potentially applicable at Waterloo are included in the findings; a separate Waterloo on-site assessment is not.",
      clientResponsibilities: "Arrange access to the owner and an appropriate sample of front-desk, RMT and esthetics team members, plus suitable scheduling and business information. Share only information authorized under franchise and privacy rules.",
      schedule: "On-site assessment date and final readout date to be agreed in writing before engagement. The working target is a concise readout and 90-day plan following the visit.",
      exclusions: "No implementation services, advertising spend, software purchases, ongoing coaching, separate Waterloo site audit or guarantee of booked appointments is included unless separately agreed.",
      payment: "CAD $2,500 plus applicable HST. Payment timing and method to be set out in the signed engagement agreement; no payment is collected through this page.",
      cancellation: "Cancellation, rescheduling and any refund conditions beyond the stated opportunity guarantee must be specified in the engagement agreement before work begins.",
      confidentiality: "Any client records supplied for assessment will be used only for the engagement subject to mutually agreed confidentiality, privacy and data-handling provisions; do not upload personal health or guest records through this page.",
      liability: "Any limitation of liability and related risk allocation will be established in the signed engagement agreement, not by this public proposal page.",
      validity: "Offer validity and any expiry date will be confirmed in the engagement agreement. No expiry date is implied by this webpage.",
      contractingEntity: "3P Solutions is the proposed service provider. The client contracting entity and authorized signing representatives must be verified before signature."
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
    contactEmail: "brent@3psolutions.ca",
    contactSubject: "Hand & Stone — AlignRISE KickStart proposal"
  }
};
