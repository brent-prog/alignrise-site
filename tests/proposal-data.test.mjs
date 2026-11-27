import test from "node:test";
import assert from "node:assert/strict";
import { prospectPages } from "../src/content/prospect-pages.ts";
const allowed = new Set(["opportunity", "assessment", "deliverables", "toolkit", "calculator", "proposal"]);
test("published proposals have independently defined client branding and terms", () => {
  for (const [slug,page] of Object.entries(prospectPages)) {
    assert.equal(page.slug,slug);
    assert.ok(["draft","published","archived"].includes(page.status));
    if (page.status !== "published") continue;
    assert.ok(page.clientName?.trim(), "missing client name");
    assert.ok(page.clientLogo?.alt?.trim(), "missing client logo description");
    if (page.clientLogo.src) assert.ok(page.clientLogo.src.startsWith("/proposal-media/") || new URL(page.clientLogo.src).protocol==="https:", "client logo must be local or HTTPS");
    else assert.ok(page.clientName?.trim(), "client-name fallback required");
    assert.ok(page.offerName?.trim() && page.offerHeadline?.trim(), "missing offer");
    if ((page.sectionOrder || []).includes("deliverables")) assert.ok(page.deliverables?.length > 0, "missing deliverables");
    assert.ok(page.contactEmail?.includes("@"), "missing contact email");
    if (page.toolkit) {
      assert.ok(page.toolkit.durationMonths > 0 && page.toolkit.features.length > 0, "invalid toolkit inclusion");
      assert.ok(page.toolkit.continuationNote?.trim(), "missing toolkit continuation terms");
    }
    if (page.acceptance || page.presentation?.showTerms !== false) assert.ok(page.terms?.scope && page.terms?.contractingEntity, "missing commercial conditions");
    if(page.acceptance){
      assert.match(page.acceptance.proposalVersion,/^[A-Z0-9-]+-v[0-9]+$/, "versioned acceptance reference required");
      for(const [key,value] of Object.entries(page.terms)) assert.ok(value.trim(), "missing acceptance term: "+key);
    }
    const sectionIds = page.sectionOrder || [];
    assert.equal(new Set(sectionIds).size,sectionIds.length, "duplicate section ID");
    for (const id of sectionIds) assert.ok(allowed.has(id) || (id === "how-alignrise-works" && page.presentation?.method) || page.extraSections?.some(s=>s.id===id), "unknown section ID "+id);
  }
});

test("subscription pilot uses configurable presentation without assessment terms",()=>{
 const p=prospectPages["kw-chair-massage"];
 assert.equal(p.price,150);
 assert.equal(p.normalPrice,300);
 assert.equal(p.presentation.priceCadence,"/month");
 assert.equal(p.presentation.method.steps.length,3);
 assert.ok(p.presentation.freeItems.length>=3);
 assert.ok(p.sectionOrder.includes(p.presentation.heroAction.target));
 assert.equal(p.acceptance,undefined);
 assert.equal(p.terms,undefined);
 assert.equal(p.calculator,undefined);
 assert.equal(p.presentation.showTerms,false);
});
