export type ProspectPageData = {
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
    intro: "I've enjoyed following your journey from opening Hand & Stone in Guelph to operating both Guelph and Waterloo. From our recent conversation, you've made meaningful progress on the staffing challenge. The next opportunity is getting more value from the capacity you've built: filling available appointments while giving every guest a reason to return, try another service, and refer someone else.",
    context: [
      { heading: "The challenge has changed", body: "For a long time, recruiting enough Registered Massage Therapists was the constraint, especially in Guelph. Now that staffing has improved, available appointment slots create a different opportunity. We should validate the actual utilization and economics before drawing conclusions." },
      { heading: "The experience is the opportunity", body: "The guest journey—from booking and arrival to their treatment, checkout, follow-up and referral—can help turn a great service into a more consistent source of repeat visits and bookings." },
      { heading: "Within the franchise model", body: "We'll focus on practical changes your team can control locally, including front-desk conversations, rebooking, service discovery and community referrals, while respecting Hand & Stone's brand standards and franchise requirements." }
    ],
    opportunities: [
      { title: "Rebook before checkout", detail: "Find natural, guest-first opportunities to offer the next appointment before clients leave." },
      { title: "Introduce complementary services", detail: "Help guests discover relevant facials, skincare and other services without a pushy sales experience." },
      { title: "Create more referrals", detail: "Examine the moments when happy guests are most likely to recommend the spa, especially during seasonal benefits conversations." },
      { title: "Use available capacity", detail: "Identify which appointment types and times are open, then connect them to practical front-desk and local marketing actions." }
    ],
    process: [
      { heading: "One-day on-site review", detail: "Meet with Erin, observe the booking-to-checkout experience, and speak with front-desk staff plus a small sample of RMT and esthetics team members. Review booking patterns and available operating information with permission." },
      { heading: "Practical opportunity assessment", detail: "Identify gaps, estimate credible annualized opportunities using available evidence, and prioritize changes that fit the franchise operating model." },
      { heading: "Executive readout and 90-day plan", detail: "Within one week, provide a prioritized action plan covering opportunities, recommended changes, responsible owners to confirm, impact assumptions and suggested timing. Initial focus: Guelph, with lessons applicable to Waterloo where appropriate." }
    ],
    normalPrice: 5000,
    price: 2500,
    guarantee: "If the assessment does not identify at least $25,000 in credible annual improvement opportunities, the assessment fee will be refunded. Identified opportunities are not guaranteed realized results.",
    note: "A one-day rapid customer experience assessment, offered under AlignRISE™ by 3P Solutions. Scope is focused on the Guelph location with Waterloo considered for transferable opportunities; a second full on-site assessment is not included. Price is CAD, plus applicable HST. Subject to scheduling and access to suitable operational information.",
    contactEmail: "brent@3psolutions.ca",
    contactSubject: "Hand & Stone — Rapid CX Assessment"
  }
};
