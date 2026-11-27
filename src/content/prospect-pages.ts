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
    materials?: string;
  };
  calculator?: ProspectCalculatorData;
  video?: ProspectVideoData;
  extraSections?: { id: string; title: string; paragraphs: string[] }[];
  acceptance?: { proposalVersion: string };
  presentation?: { visualStory?: {opportunityLabels:string[];outcome:string;componentRoles:string[];onboardingLabels:string[];offerFacts:{label:string;value:string}[]}; regularPriceSuffix?: string; scopeLabel?: string; cancellationLabel?: string; termsPartiesLabel?: string; priceCadence?: string; priceCaption?: string; heroAction?: {label:string;target:string}; bookingUrl?:string; nextStepLabel?:string; nextStepBody?:string; sectionLabels?:Record<string,string>; approachHeading?:string; aiRequirement?:string; showTerms?:boolean; method?: {heading:string;intro:string;introSecond?:string;components?:{heading:string;description:string}[];steps:{label:string;title:string;detail:string}[];exampleTitle:string;example:string}; freeItems?:string[]; paidTitle?:string; paidDetail?:string };
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
  "intro": "I appreciated our conversation about growing KW Chair Massage without compromising the quality of your service. I'd like to help you build the foundations to do that, at your own pace.",
  "context": [
    {
      "heading": "Build the foundation before you accelerate growth.",
      "body": "You don't just need more customers. You need to be ready for them."
    }
  ],
  "opportunities": [
    {
      "title": "Your value",
      "detail": "Know who you serve and why they should choose you."
    },
    {
      "title": "Your delivery",
      "detail": "Create a consistently great experience, regardless of who delivers it."
    },
    {
      "title": "Your business",
      "detail": "Attract more customers with confidence in your capacity."
    }
  ],
  "process": [
    {
      "heading": "Talk for 30 minutes",
      "detail": "We'll spend 30 minutes discussing your business, identifying your immediate priorities and determining where to start."
    },
    {
      "heading": "Get your personalized starting package",
      "detail": "I'll provide your complete AlignRISE toolkit and personalized AI-guided starting package so you can begin working on your priorities at your own pace."
    },
    {
      "heading": "Meet once a month",
      "detail": "We'll meet for 45 minutes each month to review your progress, work through obstacles and determine what to focus on next."
    }
  ],
  "price": 150,
  "normalPrice": 300,
  "offerName": "AlignRISE Pilot",
  "offerHeadline": "The complete AlignRISE toolkit is yours. FREE.",
  "sectionOrder": [
    "opportunity",
    "how-alignrise-works",
    "assessment",
    "proposal"
  ],
  "note": "Initial commitment: three months. Total investment: $450 CAD + HST, paid in three monthly instalments of $150 CAD + HST. Includes three 45-minute accountability sessions. Optional continuation: $300 CAD/month + HST. No automatic renewal. The toolkit and personalized starting materials remain yours for continued use within your own business, whether or not you continue paid accountability. A separate paid AI subscription, preferably Claude or ChatGPT, is required at your expense.",
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
    "aiRequirement": "A separate paid AI subscription is required, preferably Claude or ChatGPT, at your expense.",
    "nextStepLabel": "Email Brent to arrange a time",
    "nextStepBody": "Hi Brent,\n\nI'd like to arrange the complimentary 30-minute introductory call for KW Chair Massage.\n\nThanks,\nFrances",
    "sectionLabels": {
      "assessment": "Getting started",
      "how-alignrise-works": "What is AlignRISE?",
      "proposal": "Your pilot offer"
    },
    "approachHeading": "Getting started",
    "showTerms": true,
    "method": {
      "heading": "What is AlignRISE?",
      "intro": "AlignRISE is a practical, self-guided business improvement system that combines the complete 3P business toolkit, your AI assistant and personal accountability to help you work ON your business, at your own pace.",
      "steps": [
        {
          "label": "ASSESS",
          "title": "Understand your business",
          "detail": "Identify what's working, what's holding you back and where improvement would create the most value."
        },
        {
          "label": "ALIGN",
          "title": "Define what success looks like",
          "detail": "Clarify your direction, ideal customers, unique value, priorities and the systems your business needs to succeed."
        },
        {
          "label": "ACT",
          "title": "Put improvements into practice",
          "detail": "Use practical templates, AI-guided workflows and accountability sessions to turn priorities into actions and measure progress."
        }
      ],
      "exampleTitle": "What this could look like for KW Chair Massage",
      "example": "For KW Chair Massage, we could start by defining your unique value, creating a repeatable booking-to-event process and mapping practitioner capacity before increasing advertising.",
      "introSecond": "The system helps you improve your People, Product and Profit by identifying what matters most, setting clear priorities and building the plans, processes and performance measurements that support sustainable growth.",
      "components": [
        {
          "heading": "The complete 3P Toolkit",
          "description": "Practical business frameworks, templates and tools to help you improve your People, Product and Profit."
        },
        {
          "heading": "Your AI assistant",
          "description": "Personalized prompts and guided workflows that help you apply the toolkit to your business and turn your knowledge into practical action."
        },
        {
          "heading": "Personal accountability",
          "description": "Regular, one-to-one conversations with Brent to review progress, work through obstacles and help you stay focused on what matters most."
        }
      ]
    },
    "freeItems": [
      "Complete AlignRISE toolkit",
      "Personalized AI-guided starting package",
      "30-minute introductory and onboarding call"
    ],
    "paidTitle": "Pay only for my time.",
    "paidDetail": "One personal, 45-minute accountability session each month to review your progress, work through challenges and determine what to focus on next.",
    "regularPriceSuffix": " CAD/month + HST",
    "scopeLabel": "Engagement scope",
    "cancellationLabel": "Commitment and renewal",
    "termsPartiesLabel": "Parties and written confirmation",
    "visualStory": {
      "opportunityLabels": [
        "DEFINE",
        "SYSTEMIZE",
        "GROW"
      ],
      "outcome": "More customers. Consistent quality. Sustainable growth.",
      "componentRoles": [
        "Provides the framework",
        "Helps you apply it",
        "Keeps progress on track"
      ],
      "onboardingLabels": [
        "30 minutes · complimentary",
        "Your tools · complimentary",
        "45 minutes · monthly"
      ],
      "offerFacts": [
        {
          "label": "Initial commitment",
          "value": "3 months · $450 CAD + HST total, in three monthly instalments"
        },
        {
          "label": "Personal accountability",
          "value": "Three 45-minute sessions"
        },
        {
          "label": "After the pilot",
          "value": "Optional $300 CAD/month + HST · no automatic renewal"
        },
        {
          "label": "Your materials",
          "value": "Keep using the toolkit and personalized starting materials within your own business"
        },
        {
          "label": "AI subscription",
          "value": "Separate paid subscription, preferably Claude or ChatGPT, at your expense"
        }
      ]
    }
  },
  "terms": {
    "scope": "Complimentary complete AlignRISE toolkit, personalized AI-guided starting package and 30-minute introductory and onboarding call, plus three paid 45-minute accountability sessions.",
    "clientResponsibilities": "Participate in agreed sessions and retain responsibility for business decisions and implementation. The client is responsible for obtaining and paying for a separate AI subscription and evaluating AI-generated recommendations.",
    "schedule": "One 45-minute accountability session per month for three months, scheduled by mutual agreement.",
    "exclusions": "No formal KickStart assessment, done-for-you implementation, regulated professional advice or guaranteed business outcomes.",
    "payment": "CAD $150/month plus applicable HST for the first three months ($450 CAD plus HST total), paid in three monthly instalments. Optional continuation at CAD $300/month plus applicable HST.",
    "cancellation": "The initial commitment is three months. Exceptions require mutual written agreement. No automatic renewal.",
    "confidentiality": "3P Solutions will use non-public business information only to perform this engagement, keep it confidential and protect it with reasonable safeguards. Disclosure is limited to professional advisers or service providers bound to confidentiality, or as required by law. These obligations exclude information already public without breach, independently developed, or lawfully received without restriction, and continue after the engagement. Client identification or case studies require advance written permission. Do not provide personal health information or identifiable guest records without a separately approved data-handling arrangement.",
    "liability": "AlignRISE, provided by 3P Solutions, offers business education, tools, guidance and accountability support, not regulated professional advice or guaranteed business outcomes. The Client assumes sole responsibility for evaluating and implementing all recommendations, including AI-generated content, and for all resulting business decisions and outcomes. To the fullest extent permitted by law, 3P Solutions, its proprietor and representatives shall not be liable for any direct, indirect, consequential, financial or other losses, damages or claims arising from the engagement, including claims of negligence. Where liability cannot lawfully be excluded but may be limited, aggregate liability shall not exceed the fees paid by the Client to 3P Solutions during the preceding three months, excluding taxes. These provisions survive termination of the engagement.",
    "validity": "Offer subject to availability and written confirmation of engagement details.",
    "contractingEntity": "3P Solutions, a sole proprietorship, is the service provider. Client legal entity and authorized representative to be confirmed. Booking the introductory call does not constitute acceptance of the paid engagement.",
    "materials": "The client may continue to use supplied toolkit and personalized starting materials within their own business regardless of whether paid accountability continues. Underlying intellectual property remains with its respective owner."
  }
},
  "takoda-equine": {
  "slug": "takoda-equine",
  "status": "published",
  "clientName": "Takoda Equine",
  "clientLogo": {
    "src": "/proposal-media/takoda-equine-logo.png",
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
      "detail": "We'll spend 30 minutes discussing your business, identifying your immediate priorities and determining where to start."
    },
    {
      "heading": "Get your personalized starting package",
      "detail": "I'll provide your complete AlignRISE toolkit and personalized AI-guided starting package so you can begin working on your priorities at your own pace."
    },
    {
      "heading": "Meet once a month",
      "detail": "We'll meet for 45 minutes each month to review your progress, work through obstacles and determine what to focus on next."
    }
  ],
  "price": 150,
  "normalPrice": 300,
  "offerName": "AlignRISE Pilot",
  "offerHeadline": "The complete AlignRISE toolkit is yours. FREE.",
  "sectionOrder": [
    "opportunity",
    "how-alignrise-works",
    "assessment",
    "proposal"
  ],
  "note": "Initial commitment: three months. Total investment: $450 CAD + HST, paid in three monthly instalments of $150 + HST, including three 45-minute accountability sessions. Optional continuation: $300 CAD/month + HST. No automatic renewal. The toolkit and personalized starting materials remain yours for continued use within your own business, whether or not you continue paid accountability.",
  "terms": {
    "scope": "Complimentary complete AlignRISE toolkit, personalized AI-guided starting package and 30-minute introductory and onboarding call, plus three paid personal accountability sessions.",
    "clientResponsibilities": "The Client participates in agreed sessions and retains sole responsibility for business decisions, implementation and evaluation of AI-generated recommendations. A separate paid AI subscription, preferably Claude or ChatGPT, is required at the Client's expense.",
    "schedule": "One personal 45-minute accountability session per month for three months.",
    "exclusions": "No formal KickStart assessment, done-for-you implementation, regulated professional advice or guaranteed business outcomes.",
    "payment": "Regular rate: $300 CAD/month + HST. Pilot rate: $150 CAD/month + HST for three months, for a total of $450 CAD + HST, paid in three monthly instalments. Optional continuation at $300 CAD/month + HST.",
    "cancellation": "Initial commitment of three months. Exceptions require mutual written agreement. No automatic renewal. The Client may retain and continue using the supplied toolkit and personalized starting materials within their own business, regardless of paid accountability continuation. Underlying intellectual property remains with its respective owner.",
    "confidentiality": "3P Solutions will use non-public business information only to perform this engagement, keep it confidential and protect it with reasonable safeguards. Disclosure is limited to professional advisers or service providers bound to confidentiality, or as required by law. These obligations exclude information already public without breach, independently developed, or lawfully received without restriction, and continue after the engagement. Client identification or case studies require advance written permission. Do not provide sensitive personal information without a separately approved data-handling arrangement.",
    "liability": "AlignRISE, provided by 3P Solutions, offers business education, tools, guidance and accountability support, not regulated professional advice or guaranteed business outcomes. The Client assumes sole responsibility for evaluating and implementing all recommendations, including AI-generated content, and for all resulting business decisions and outcomes. To the fullest extent permitted by law, 3P Solutions, its proprietor and representatives shall not be liable for any direct, indirect, consequential, financial or other losses, damages or claims arising from the engagement, including claims of negligence. Where liability cannot lawfully be excluded but may be limited, aggregate liability shall not exceed the fees paid by the Client to 3P Solutions during the preceding three months, excluding taxes. These provisions survive termination of the engagement.",
    "validity": "Offer subject to availability and written confirmation. Booking the complimentary introductory call does not constitute acceptance of the paid engagement.",
    "contractingEntity": "3P Solutions, a sole proprietorship, is the service provider. The Client's legal entity and authorized representative are to be confirmed."
  },
  "video": {
    "src": "/proposal-media/takoda-introduction.mp4",
    "poster": "/proposal-media/takoda-introduction-poster.jpg",
    "heading": "A personal introduction",
    "caption": "A personal message for Diane."
  },
  "contactEmail": "brent@3psolutions.ca",
  "contactSubject": "Takoda Equine — AlignRISE pilot",
  "presentation": {
    "priceCadence": "/month",
    "priceCaption": "CAD + HST · first three months",
    "heroAction": {
      "label": "Discover how AlignRISE works",
      "target": "how-alignrise-works"
    },
    "nextStepLabel": "Email Brent to arrange a time",
    "sectionLabels": {
      "assessment": "Getting started",
      "how-alignrise-works": "How it works",
      "proposal": "Your pilot offer"
    },
    "approachHeading": "Here's how we'll get started",
    "method": {
      "heading": "What is AlignRISE?",
      "intro": "AlignRISE is a practical, self-guided business improvement system that combines the complete 3P business toolkit, your AI assistant and personal accountability to help you work ON your business, at your own pace.",
      "steps": [
        {
          "label": "ASSESS",
          "title": "Understand your business",
          "detail": "Identify what's working, what's holding you back and where improvement would create the most value."
        },
        {
          "label": "ALIGN",
          "title": "Define what success looks like",
          "detail": "Clarify your direction, ideal customers, unique value, priorities and the systems your business needs to succeed."
        },
        {
          "label": "ACT",
          "title": "Put improvements into practice",
          "detail": "Use practical templates, AI-guided workflows and accountability sessions to turn priorities into actions and measure progress."
        }
      ],
      "exampleTitle": "What this could look like for Takoda Equine",
      "example": "Identify the leadership teams most likely to benefit from your services, clarify your value proposition, develop referral relationships and create a repeatable inquiry-to-booking process.",
      "components": [
        {
          "heading": "The complete 3P Toolkit",
          "description": "Practical business frameworks, templates and tools to help you improve your People, Product and Profit."
        },
        {
          "heading": "Your AI assistant",
          "description": "Personalized prompts and guided workflows that help you apply the toolkit to your business and turn your knowledge into practical action."
        },
        {
          "heading": "Personal accountability",
          "description": "Regular, one-to-one conversations with Brent to review progress, work through obstacles and help you stay focused on what matters most."
        }
      ],
      "introSecond": "The system helps you improve your People, Product and Profit by identifying what matters most, setting clear priorities and building the plans, processes and performance measurements that support sustainable growth."
    },
    "freeItems": [
      "Complete AlignRISE toolkit",
      "Personalized AI-guided starting package",
      "30-minute introductory and onboarding call"
    ],
    "paidTitle": "Pay only for my time.",
    "paidDetail": "One personal, 45-minute accountability session each month to review your progress, work through challenges and determine what to focus on next.",
    "bookingUrl": "https://calendly.com/brent3p/30min",
    "nextStepBody": "Hi Brent,\n\nI'd like to arrange the complimentary 30-minute introductory call for Takoda Equine.\n\nThanks,\nDiane",
    "aiRequirement": "A separate paid AI subscription is required, preferably Claude or ChatGPT, at your expense.",
    "scopeLabel": "Engagement scope",
    "cancellationLabel": "Commitment, renewal and materials"
  }
}
};
