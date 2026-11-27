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
  status: "draft" | "review" | "published" | "archived";
  clientName: string;
  clientLogo: { src: string; alt: string; sourceUrl: string };
  eyebrow: string;
  title: string;
  greeting: string;
  intro: string;
  context: { heading: string; body: string }[];
  opportunities: { title: string; detail: string }[];
  process: { heading: string; detail: string }[];
  deliverables?: { title: string; detail: string }[];
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
  terms?: {
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
  presentation?: { priceCadence?: string; priceCaption?: string; heroAction?: {label:string;target:string}; bookingUrl?:string; nextStepLabel?:string; nextStepBody?:string; sectionLabels?:Record<string,string>; approachHeading?:string; aiRequirement?:string; showTerms?:boolean; method?: {heading:string;intro:string;steps:{label:string;title:string;detail:string}[];exampleTitle:string;example:string}; freeItems?:string[]; paidTitle?:string; paidDetail?:string };
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
  "video": {
    "src": "/proposal-media/kw-chair-massage-introduction.mp4",
    "poster": "/proposal-media/kw-chair-massage-poster-v2.jpg",
    "heading": "A personal introduction",
    "caption": "A personal message for Frances."
  },
  "slug": "kw-chair-massage",
  "status": "published",
  "clientName": "KW Chair Massage",
  "clientLogo": {
    "src": "/proposal-media/kw-chair-massage-logo.webp",
    "alt": "KW Chair Massage official logo",
    "sourceUrl": "https://kwchairmassage.com/"
  },
  "eyebrow": "A PERSONALIZED ALIGNRISE PILOT FOR FRANCES VAN DIEREN",
  "title": "Grow your business without compromising what makes it special.",
  "greeting": "Frances,",
  "intro": "You’ve built a business you’re proud of. Let’s grow it without sacrificing service quality. I’d like to give you the complete AlignRISE toolkit for free and help you put it to work.",
  "context": [
    {
      "heading": "The opportunity",
      "body": "Build the foundations for growth without losing what makes your service special."
    }
  ],
  "opportunities": [
    {
      "title": "Define your value",
      "detail": "Clarify what sets KW Chair Massage apart and who you want to serve."
    },
    {
      "title": "Deliver consistently",
      "detail": "Build repeatable processes that protect service quality."
    },
    {
      "title": "Grow with confidence",
      "detail": "Know your capacity before attracting new customers."
    }
  ],
  "process": [
    {
      "heading": "Talk for 30 minutes",
      "detail": "A complimentary conversation to identify your priorities."
    },
    {
      "heading": "Get your personalized package",
      "detail": "Use your customized tools and AI prompts at your own pace."
    },
    {
      "heading": "Meet once a month",
      "detail": "Three personal accountability sessions to support progress."
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
    "proposal"
  ],
  "note": "Total: CAD $450 + HST over three months. Optional continuation: $300/month + HST. No automatic renewal. Your own paid AI subscription is required and is not included.",
  "contactEmail": "brent@3psolutions.ca",
  "contactSubject": "KW Chair Massage — AlignRISE pilot",
  "presentation": {
    "priceCadence": "/month",
    "priceCaption": "CAD + HST · first three months",
    "heroAction": {
      "label": "Discover how AlignRISE works",
      "target": "how-alignrise-works"
    },
    "bookingUrl": "https://calendly.com/brent3p/30min",
    "aiRequirement": "You’ll need your own paid AI subscription, preferably Claude or ChatGPT. Your AI account and subscription are separate from AlignRISE.",
    "nextStepLabel": "Email Brent to arrange a time",
    "nextStepBody": "Hi Brent,\nI'd like to arrange the complimentary 30-minute introductory call for KW Chair Massage.\nThanks, Frances",
    "sectionLabels": {
      "assessment": "Getting started",
      "how-alignrise-works": "How it works",
      "proposal": "Pilot offer"
    },
    "approachHeading": "Here's how we'll get started",
    "showTerms": false,
    "method": {
      "heading": "What is AlignRISE?",
      "intro": "The 3P business toolkit, your AI assistant and personal accountability. A self-guided system for working ON your business, at your own pace.",
      "steps": [
        {
          "label": "ASSESS",
          "title": "Understand your business",
          "detail": "Identify your strengths and the constraints holding you back."
        },
        {
          "label": "ALIGN",
          "title": "Define what success looks like",
          "detail": "Define your ideal customers, unique value and the systems to deliver it."
        },
        {
          "label": "ACT",
          "title": "Put improvements into practice",
          "detail": "Turn priorities into action with AI prompts and practical templates."
        }
      ],
      "exampleTitle": "What this could look like for KW Chair Massage",
      "example": "For example: define your unique value, create a booking-to-event checklist and map practitioner capacity before increasing advertising."
    },
    "freeItems": [
      "Complete AlignRISE starter toolkit",
      "Personalized AI-guided starting package",
      "30-minute introductory call"
    ],
    "paidTitle": "Pay only for my time",
    "paidDetail": "One personal accountability session with Brent each month for three months. Review progress, solve problems and plan next steps."
  }
},
  "takoda-equine": {
  "slug": "takoda-equine",
  "status": "published",
  "clientName": "Takoda Equine",
  "clientLogo": {
    "src": "https://www.takodaequine.com/wp-content/uploads/2026/01/Logo-takda-300x200.png",
    "alt": "Takoda Equine",
    "sourceUrl": "https://www.takodaequine.com/"
  },
  "eyebrow": "PREPARED ESPECIALLY FOR DIANE MURRAY",
  "title": "You know how to deliver a great experience. Let's get more people experiencing it.",
  "greeting": "Diane,",
  "intro": "You've developed a unique service. Let's build the business around it so you can spend more of your time doing what you do best.",
  "context": [
    {
      "heading": "The opportunity",
      "body": "Your experiential leadership development work gives business owners, executives and teams a distinctive way to explore communication, trust and decision-making. The immediate priority is connecting that value to the right buyers and converting interest into bookings."
    }
  ],
  "opportunities": [
    {
      "title": "Find",
      "detail": "Prioritize business owners, leadership teams and other ideal customers; clarify the value of your experiences and which offerings to promote first."
    },
    {
      "title": "Book",
      "detail": "Build a focused outreach and referral plan, including potential HR and leadership-development partners, and develop a repeatable path from inquiry to booking."
    },
    {
      "title": "Grow",
      "detail": "Set clear priorities, understand your financial goals and develop the skills to run your business with confidence."
    }
  ],
  "process": [
    {
      "heading": "Talk for 30 minutes",
      "detail": "A complimentary conversation to identify your priorities and get started."
    },
    {
      "heading": "Use your personalized toolkit",
      "detail": "Work through your business priorities with practical tools and guided AI workflows."
    },
    {
      "heading": "Review your progress",
      "detail": "Personal accountability support to help you stay focused and turn decisions into action."
    }
  ],
  "price": 150,
  "normalPrice": 300,
  "offerName": "AlignRISE subscription",
  "offerHeadline": "The complete AlignRISE toolkit is yours. FREE.",
  "sectionOrder": [
    "opportunity",
    "how-alignrise-works",
    "assessment",
    "proposal"
  ],
  "note": "Introductory total: $450 CAD + HST over three months. Optional continuation: $300 CAD/month + HST. Accountability session frequency and cancellation terms are subject to confirmation before enrollment.",
  "terms": {
    "scope": "Complimentary toolkit and 30-minute onboarding; paid personal accountability support. Guided AI workflows are included in the toolkit.",
    "clientResponsibilities": "Participate in agreed sessions and retain responsibility for business decisions and implementation.",
    "schedule": "Accountability session frequency and duration to be confirmed.",
    "exclusions": "No done-for-you implementation, advertising spend or guaranteed business outcomes.",
    "payment": "CAD $150/month plus applicable HST for the first three months ($450 plus HST total). Optional continuation at CAD $300/month plus applicable HST.",
    "cancellation": "Commitment, renewal and cancellation terms to be confirmed before enrollment.",
    "confidentiality": "3P Solutions will use non-public business information only to perform this engagement, keep it confidential and protect it with reasonable safeguards. Disclosure is limited to professional advisers or service providers bound to confidentiality, or as required by law. These obligations exclude information already public without breach, independently developed, or lawfully received without restriction, and continue after the engagement. Client identification or case studies require advance written permission. Do not provide personal health information or identifiable guest records without a separately approved data-handling arrangement.",
    "liability": "AlignRISE, provided by 3P Solutions, offers business education, tools, guidance and accountability support, not regulated professional advice or guaranteed business outcomes. The Client assumes sole responsibility for evaluating and implementing all recommendations, including AI-generated content, and for all resulting business decisions and outcomes. To the fullest extent permitted by law, 3P Solutions, its proprietor and representatives shall not be liable for any direct, indirect, consequential, financial or other losses, damages or claims arising from the engagement, including claims of negligence. Where liability cannot lawfully be excluded but may be limited, aggregate liability shall not exceed the fees paid by the Client to 3P Solutions during the preceding three months, excluding taxes. These provisions survive termination of the engagement.",
    "validity": "Offer subject to availability and written confirmation of engagement details.",
    "contractingEntity": "3P Solutions, a sole proprietorship, is the service provider. Client legal entity and authorized representative to be confirmed."
  },
  "contactEmail": "brent@3psolutions.ca",
  "contactSubject": "Takoda Equine — AlignRISE subscription",
  "presentation": {
    "priceCadence": "/month",
    "priceCaption": "CAD + HST · first three months",
    "heroAction": {
      "label": "Discover how AlignRISE works",
      "target": "how-alignrise-works"
    },
    "nextStepLabel": "Email Brent to discuss",
    "sectionLabels": {
      "assessment": "Getting started",
      "how-alignrise-works": "How it works",
      "proposal": "Your offer"
    },
    "approachHeading": "Here's how we'll get started",
    "method": {
      "heading": "What is AlignRISE?",
      "intro": "The 3P business toolkit, guided AI workflows and personal accountability. A self-guided system for working ON your business, at your own pace.",
      "steps": [
        {
          "label": "ASSESS",
          "title": "Understand your business",
          "detail": "Understand your customers, services, current business and immediate priorities."
        },
        {
          "label": "ALIGN",
          "title": "Define what success looks like",
          "detail": "Use the 3P business framework and guided AI workflows to decide where to focus."
        },
        {
          "label": "ACT",
          "title": "Put improvements into practice",
          "detail": "Put practical actions into motion and review progress through personal accountability support."
        }
      ],
      "exampleTitle": "What this could look like for Takoda Equine",
      "example": "Identify the leadership teams most likely to benefit from your services, clarify your value proposition, develop referral relationships and create a repeatable inquiry-to-booking process."
    },
    "freeItems": [
      "Complete AlignRISE toolkit",
      "Guided AI workflows",
      "30-minute personal onboarding"
    ],
    "paidTitle": "Pay for personal accountability support",
    "paidDetail": "Personal guidance to review progress, solve problems and decide what to do next. Session frequency and duration to be agreed."
  }
}
};
