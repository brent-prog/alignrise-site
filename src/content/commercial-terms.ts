import type { ProspectPageData } from "./prospect-pages";

export const standardClauses = {
  confidentiality: "3P Solutions will use non-public business information only to perform this engagement, keep it confidential and protect it with reasonable safeguards. Disclosure is limited to professional advisers or service providers bound to confidentiality, or as required by law. These obligations exclude information already public without breach, independently developed, or lawfully received without restriction, and continue after the engagement. Client identification or case studies require advance written permission. Do not provide personal health information or identifiable guest records without a separately approved data-handling arrangement.",
  contractingEntity: "3P Solutions, a sole proprietorship, is the service provider. The client must identify its full legal contracting entity and the representative authorized to act for it in the acceptance email. No separate electronic signature is required for this initial engagement; the parties confirm the engagement and outstanding logistics by email.",
} as const;

export function subscriptionTerms(page: ProspectPageData): NonNullable<ProspectPageData["terms"]> | undefined {
  const s = page.subscription;
  if (!s) return page.terms;
  const money = (n: number) => new Intl.NumberFormat("en-CA", {style:"currency",currency:"CAD"}).format(n);
  const payment = [`${money(s.price)} CAD per ${s.cadence}`, s.introductoryPeriod, s.taxNote || "Tax treatment to be confirmed", s.continuation].filter(Boolean).join(". ") + ".";
  return {
    scope: [page.price != null ? page.terms?.scope : undefined, ...s.includes, s.support].filter(Boolean).join("; "),
    clientResponsibilities: "The client participates in onboarding and agreed accountability sessions, provides accurate authorized business information, and retains responsibility for business decisions and implementation.",
    schedule: s.support || "Onboarding and accountability schedule to be agreed.",
    exclusions: "No done-for-you implementation, advertising spend, third-party software purchases or guaranteed business outcomes unless separately agreed in writing.",
    payment: [page.price != null ? page.terms?.payment : undefined, payment].filter(Boolean).join(" "),
    cancellation: [s.commitment, s.cancellation].filter(Boolean).join(" ") || "Commitment and cancellation conditions to be agreed in writing.",
    confidentiality: standardClauses.confidentiality,
    liability: page.terms?.liability || "Proposed limitation of liability to be reviewed and agreed before enrollment. No guarantee of business outcomes is offered.",
    validity: page.terms?.validity || "Draft for discussion; final terms and availability subject to written confirmation.",
    contractingEntity: standardClauses.contractingEntity,
  };
}
export function commercialReady(page: ProspectPageData): boolean {
  if (!page.subscription) return true;
  const s = page.subscription;
  return Boolean(page.acceptance && page.terms && s.taxNote && s.commitment && s.cancellation && s.support && ![s.taxNote,s.commitment,s.cancellation,s.support,page.terms.liability].some(v=>/to be (confirmed|agreed|reviewed)|subject to confirmation/i.test(v)));
}
