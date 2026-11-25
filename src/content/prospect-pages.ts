export type ProspectVideoData = { src: string; poster: string; heading?: string; caption?: string }; 
export type ProspectPageData = {
  video?: ProspectVideoData;
  extraSections?: { id: string; title: string; paragraphs: string[] }[];
  slug: string; status: "draft" | "active" | "archived";
  eyebrow: string; title: string; greeting: string; intro: string;
  context: { heading: string; body: string }[];
  opportunities: { title: string; detail: string }[];
  process: { heading: string; detail: string }[];
  price: number; normalPrice: number; guarantee: string;
  note: string; contactEmail: string; contactSubject: string;
};
export const prospectPages: Record<string, ProspectPageData> = {
  "hand-stone-guelph-waterloo": {
    slug: "hand-stone-guelph-waterloo",
    status: "draft",
    eyebrow: "A PERSONALIZED PROPOSAL FOR ERIN & LAYTON PHILLIPS",
    title: "You have the therapists. Let's fill the calendars.",
    greeting: "Erin and Layton,",
    intro: "You’ve done the hard work of building your team. Now the opportunity is filling open appointments, encouraging guests to rebook, and generating more referrals. Here’s how I think we can help.",
    context: [
      { heading: "The opportunity", body: "With Guelph better staffed, let’s focus on filling available appointments through a stronger guest experience, repeat bookings and local referrals—within Hand & Stone’s franchise guidelines." }
    ],
    opportunities: [
      { title: "Rebook", detail: "Make the next appointment a natural part of checkout." },
      { title: "Expand", detail: "Introduce relevant treatments, including facials." },
      { title: "Refer", detail: "Help delighted guests recommend you to others." }
    ],
    process: [
      { heading: "Listen and observe", detail: "Meet with Erin, the front-desk team, an RMT and an aesthetician, and review the real guest journey and booking gaps." },
      { heading: "Identify and prioritize", detail: "Deliver practical opportunities and a 90-day action plan designed for Guelph, with lessons that may carry over to Waterloo." }
    ],
    normalPrice: 5000,
    price: 2500,
    guarantee: "If the assessment does not identify at least $25,000 in credible annual improvement opportunities, the assessment fee will be refunded. Identified opportunities are not guaranteed realized results.",
    note: "AlignRISE KickStart includes a focused on-site CX review in Guelph and a practical improvement plan. Waterloo may benefit from applicable findings; a second on-site review is not included. CAD + HST. Timing and access to operating information to be agreed.",
    contactEmail: "brent@3psolutions.ca",
    contactSubject: "Hand & Stone — AlignRISE KickStart"
  }
};
