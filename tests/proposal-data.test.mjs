import test from "node:test";
import assert from "node:assert/strict";
import { prospectPages } from "../src/content/prospect-pages.ts";
const allowed = new Set(["opportunity", "assessment", "deliverables", "calculator", "proposal"]);
test("published proposals have independently defined client branding and terms", () => {
  for (const [slug,page] of Object.entries(prospectPages)) {
    assert.equal(page.slug,slug);
    assert.ok(["draft","published","archived"].includes(page.status));
    if (page.status !== "published") continue;
    assert.ok(page.clientName?.trim(), "missing client name");
    assert.ok(page.clientLogo?.alt?.trim(), "missing client logo description");
    assert.equal(new URL(page.clientLogo.src).protocol,"https:", "client logo must be HTTPS");
    assert.ok(page.offerName?.trim() && page.offerHeadline?.trim(), "missing offer");
    assert.ok(page.deliverables?.length > 0, "missing deliverables");
    assert.ok(page.contactEmail?.includes("@"), "missing contact email");
    assert.ok(page.terms?.scope && page.terms?.contractingEntity, "missing commercial conditions");
    const sectionIds = page.sectionOrder || [];
    assert.equal(new Set(sectionIds).size,sectionIds.length, "duplicate section ID");
    for (const id of sectionIds) assert.ok(allowed.has(id) || page.extraSections?.some(s=>s.id===id), "unknown section ID "+id);
  }
});
