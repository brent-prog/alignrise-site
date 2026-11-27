# AlignRISE Personalized Client Pages — Repeatable Design & Publishing Standard

**Owner:** 3P Solutions / AlignRISE™  
**Updated:** 2026-11-26  
**Purpose:** Reuse the *format, client experience, media handling, review and publication workflow* demonstrated by the Hand & Stone Guelph/Waterloo page for any appropriate AlignRISE prospect. **Not a KickStart sales script, generic proposal, price sheet, or statement of work.**

**Repository:** `brent-prog/alignrise-site`  
**Client pages:** `https://clients.alignrise.ca/p/<client-slug>`  
**Working example:** `https://clients.alignrise.ca/p/hand-stone-guelph-waterloo`  
**Companion technical/commercial playbook:** [`docs/PROPOSAL_PLAYBOOK.md`](./PROPOSAL_PLAYBOOK.md)  
**3P precedent for media transport:** `brent-prog/3p-client-proposals/docs/PROPOSAL_PLAYBOOK.md`

## 1. Core operating principle

Build a **short, polished, personalized, shareable web page** that helps a specific business owner understand an opportunity, the relevant AlignRISE approach, and an appropriate next step. This is a *presentation format* reused across different offerings; the substance must come from the individual prospect conversation and current approved product information.

Typical use cases:
- **AlignRISE subscription only:** introduce the monthly tools, guided Assess → Align → Act approach, support/accountability as applicable, onboarding expectations, pricing and subscription terms *only when verified*. No mandatory audit, KickStart, deliverables, 90-day assessment or invented refund promise.
- **KickStart:** a focused assessment and next-step plan, potentially with separately approved subscription inclusion. Only show deliverables, guarantee or discounted price if expressly agreed for that prospect.
- **Custom AlignRISE engagement:** a combination or variant of tools, training, guided implementation, advisory sessions or pilots, with the precise scope decided per client.
- **Relationship/explainer page:** a personalized introduction, sample approach, demonstration or invitation to talk. **May have no price, offer panel or acceptance form at all.**

Do **not** presume a proposal must be an assessment, KickStart, on-site visit, subscription bundle, 90-day plan, discount, calculator or agreement. Do **not** make a subscription sound like consulting services.

The workflow is **ChatGPT-led, not a form or dashboard**. Brent supplies prospect context and optional assets in the relevant chat; the assistant uses the repository, preview, tests and deployment tools.

## 2. Design system: what should stay consistent

Preserve the AlignRISE brand guidelines and current site's visual language. Inspect the actual live templates and project brand guidelines before changing CSS; the Hand & Stone page is an example of *presentation*, not a content source.

1. **Dual identity:** approved AlignRISE mark and favicon, plus the *real* client logo when authorized and verified. Give both marks visual breathing room; neither should look like an endorsement or partnership. If a client logo cannot be verified, do not fabricate one. Use an attractive client-name treatment and disclose the missing asset during review.
2. **Personalized hero:** small overline addressing the business/decision makers, concise business-relevant headline, short note addressed to the people, and one or two useful anchor CTAs. Hero copy is *not* a fixed product heading.
3. **Optional video beside hero:** personal introduction when provided; otherwise balance the hero deliberately without blank space. Use native MP4 video with `controls`, `playsInline`, `preload="metadata"`; no autoplay. Display an intentionally selected poster rather than the first random frame.
4. **Compact editorial sections:** cards for 2–4 clear ideas, visually distinct bands for context/approach/benefits, restrained typography, generous but not excessive spacing and no repeated sales language.
5. **Optional interactive evidence:** a scenario calculator, brief example, sample workflow or comparison *only if relevant*. Never reuse the Hand & Stone appointment-revenue formula for a different business model without explicit verification and new tests.
6. **Flexible commercial/next-step section:** subscription sign-up discussion, kickoff call, a tailored engagement proposal, or just an invitation to discuss. Include a formal acceptance mechanism **only when that is the agreed user journey**.
7. **Clear site footer:** AlignRISE by 3P Solutions and the correct response/contact method.

Mobile-first: keep video and headlines within the viewport, stack two-column areas cleanly, avoid horizontal overflow, minimize empty space, and ensure obvious tap targets. The sticky section navigation must include **only sections actually rendered**.

## 3. Content framework: choose, do not copy

A sensible starting sequence:

| Page element | Purpose | Required? |
| --- | --- | --- |
| Client + AlignRISE identity | Establish that this is genuinely for the prospect | Yes; client logo only if verified |
| Short personalized hero | State the client's relevant objective | Yes |
| Personal video | Make it human and explain why the page was prepared | Optional |
| Current situation / opportunity | Reflect verified prospect context, distinguish facts from hypotheses | Usually |
| How AlignRISE fits | Explain only the functions, tools or support being offered | Yes when making an offer |
| What they get / how to start | Concrete subscription access, onboarding, services or deliverables as applicable | When applicable |
| Illustrative example or calculator | Make value tangible without pretending assumptions are outcomes | Optional |
| Fee, subscription plan or engagement terms | Show verified currency, tax, cadence, inclusions and cancellation | Only if an actual commercial offer |
| Next step | Call, reply, enrollment, agreed acceptance action | Yes |

**Subscription-only example structure:** Personalized hero → Why AlignRISE is relevant to *this* owner → What the platform and 3P tools do → What is included in *this* subscription → How onboarding/access works → Actual price and renewal/cancellation if approved → Reply / start next step. Omit KickStart process, on-site assessment, report deliverables and outcome guarantees.

**KickStart example structure:** Personalized hero → Opportunity → Review approach → Deliverables → Optional post-assessment subscription period → Optional scenario → Scope/fees/terms → Acceptance or next step.

**Explainer example structure:** Personalized hero/video → 2–3 tailored observations → Brief demonstration → Conversation CTA. Avoid gratuitous fee boxes or legal terms.

The headings, order, number of sections, content depth and exact CTA must vary by prospect and purpose. Never reproduce another client's names, numbers, pricing, timelines, business claims, legal terms or ROI formula.

## 4. Source-of-truth and commercial safeguards

- Use the prospect's current chat, approved offering information, relevant project files, and authorized records (HubSpot, Gmail, notes) to establish facts. Check the source; do not invent discovery findings.
- Brand promises, product capabilities, subscription inclusions, term lengths, pricing, HST treatment, renewal, trial or guarantee are **not inherited** from any sample page.
- Confirm the **legal entity, decision makers and authorized recipient**, where signing or billing is proposed.
- If details are unknown, either omit the section, clearly label it a draft, or leave the question for Brent; never silently use Hand & Stone defaults.
- Do not add client-sensitive information to a public URL, source-controlled data or published media. `noindex` does not mean private.
- Acceptance by `mailto` is only an email draft, not a sent email or digital signature. For initial engagements, follow the current approved email authorization procedure in the companion playbook; where a formal contract is needed, prepare and approve it separately. A relationship page or subscription inquiry may simply say **Reply to discuss**.
- A private pricing discussion is not permission to publish private financial information.

## 5. Current code: reuse vs. refactor

Inspect the *current main branch* before editing. As of this document's creation, the shared implementation is:

- `src/app/p/[slug]/page.tsx`: reusable route and production publication state.
- `src/content/prospect-pages.ts`: per-client content records; Hand & Stone sample.
- `src/components/prospect/ProspectExperience.tsx`: shared layout, bands/cards/offer component.
- `src/components/prospect/ProspectNavigation.tsx`: anchored sticky navigation.
- `src/components/prospect/ProspectVideo.tsx`: optional inline hero video.
- `src/components/prospect/ScenarioCalculator.tsx`: *specialized appointment revenue* scenario.
- `src/components/prospect/prospect.css`: layout and responsive design.
- `scripts/build-proposal-media.cjs`: reconstructs static video/poster assets.
- `e2e/proposal.spec.ts`, `tests/*.test.mjs`, `.github/workflows/proposal-checks.yml`: automated checks.

**Important: the current code is visually reusable but not yet fully offer-neutral.** It currently assumes a required `price`, `process`, `deliverables`, `terms`, the `proposal` section, some assessment-specific labels, and a **hardcoded hero CTA “See how KickStart works” pointing to `#assessment`**. The toolkit panel also says **“INCLUDED WITH YOUR KICKSTART.”**

**Implementation requirement when producing a non-KickStart page:** make the *smallest safe shared-component refactor* so the relevant fields and panels are truly optional and page-specific, with neutral/overridable labels and action targets. Do not work around this by stuffing fictitious assessments, terms or a zero-dollar fee into the Hand & Stone schema. Preserve Hand & Stone rendering and existing regression tests. Consider a `pageKind` or composable section model, configurable `heroActions`, `nextStep` and section headings, but do not implement speculative abstraction without a real use case. Add a subscription-only fixture/test as part of the first such refactor.

A new client should have its own clearly identifiable data record/slug; keep media in distinct client-specific filenames/paths. Preserve existing pages, original content and URLs.

## 6. Repeatable creation and approval sequence

1. **Brief:** Identify client/business, decision makers, desired outcome, actual offering type (subscription, KickStart, custom or explainer), relationship/context, CTA and any assets. Ask only for truly blocking details.
2. **Content first:** Propose the concise page storyline and exact approved product/offer claims, including which sections to omit. Do not automatically import another client's terms.
3. **Asset check:** Verify AlignRISE brand guidelines, official client logo/source and permission, video, poster needs, any supporting graphics. If no video, render a strong no-video hero.
4. **Build in existing app:** Add a client-specific record and necessary optional modules or shared refinements on a GitHub **feature branch**. Mark unapproved page `draft` and preserve published client routes.
5. **Reviewable preview:** Produce a Vercel preview, verify it is READY and accessible to Brent, and show the page for content/layout review. Note that unpublished previews are not necessarily authenticated.
6. **Commercial and factual review:** Brent approves wording, client branding, prices/terms and any promised outcomes. Iterate in preview. **Do not merge to production or send to prospects without explicit approval**. If Brent explicitly instructs “publish it,” that authorizes publication of the reviewed version.
7. **Automated QA:** Run unit and browser tests, desktop and narrow mobile checks, every CTA/anchor, calculator if any, video range/playback, contact target, legal copy and all existing client regression tests. A deployment build succeeding is not enough.
8. **Publish:** Merge approved PR to `main`, confirm Git-triggered Vercel production `READY` for the exact SHA, verify the `clients.alignrise.ca` alias and the specific `/p/<slug>` deep link. Test public route and media response from an actual HTTP/browser surface if supported; disclose any unverified live-browser checks.
9. **Handoff:** Give Brent verified production URL, notable changes and limits. **Do not email a client without explicit instruction**.
10. **Maintain:** Reuse slug for revisions; choose versioned poster/media URLs to bust caches; retain audit trail of client approval/version. Archive when no longer valid; treat public content as potentially cached.

## 7. Video, posters and binary transfer — proven workflow

**Do not use Canva or a Google Drive video embed.** Google Drive may be used *privately* as a file transport bridge if required by tooling; it must never appear as a video source on the client-facing webpage.

The Hand & Stone publishing flow proved that even when direct local GitHub network access is unavailable, connector-based transfer works:

1. Receive MP4 in ChatGPT and produce a web-ready H.264/AAC `.mp4` with faststart, preserving the full recording and original audio. Balance resolution and bitrate; do not claim a specific size before measuring.
2. Sample **multiple frames** from the actual recording. Choose a flattering, natural expression at a clear moment. Compose a restrained, brand-aligned poster with simple, legible personalization if beneficial. Prefer a **real frame** over an AI-generated likeness; avoid hallucinated client logos or likenesses. If rendering a generated/stylized alternative, seek Brent's approval before substituting it for an authentic frame.
3. Verify both optimized files, byte counts and SHA-256. Use unique filenames; never replace another client's media.
4. When needed, upload the optimized MP4/poster privately to the 3P Workspace Drive as an **intermediate connector bridge**. Fetch their *actual original Base64 bytes* through the connected Drive tool. This is not public hosting.
5. Split the MP4 Base64 into ordered chunks of about **350,000 characters**, store each via GitHub `create_blob` (`encoding: utf-8`) and create a branch tree with those blobs under `media/_transfer/<slug>-NN.b64`. Store a small poster Base64 blob similarly. Avoid dumping Base64 into source modules or chat output.
6. Update `scripts/build-proposal-media.cjs` to read each chunk in explicit sequence, decode once, **verify bytes and SHA-256** and emit the files into `public/proposal-media/<client-specific-file>.mp4/.jpg` during `npm run build`. Build must fail on mismatch.
7. Reference **same-origin, root-relative static media URLs** in the page record. Native `<video controls playsInline preload="metadata">`; custom CDN, autoplay and Drive embeds are not required.
8. Verify Vercel's build logs for each expected media file, MP4 playback/audio and HTTP 200/206 + seeking, desktop and mobile widths. For revised thumbnails, use a **new poster filename**, change the page record and tests to avoid stale browser/CDN cache.
9. Avoid inserting a visual play icon on the poster if it will be confusing next to the native video controls. Treat the poster as a still, not a link that independently plays.
10. For exceptionally large files, assess transfer limits and an approved direct-binary repository or object-storage route; do not assert that access is broken without checking the actual connector operation. Never commit private media for public deployment.

**Hand & Stone implementation history, for verification only:** a roughly 3.8 MB MP4 was transferred as 16 chunks; Vercel reconstruction produced `hand-stone-introduction.mp4` (3,983,476 bytes). The subsequent poster was replaced with a versioned `hand-stone-introduction-poster-v2.jpg` from an actual smiling frame. Those are **examples, not universal file names or guaranteed target sizes**.

## 8. QA acceptance checklist

**Design**
- [ ] Correct client, people, product positioning and client logo/source
- [ ] Brand guidelines followed; polished desktop and mobile composition, no dead space
- [ ] Hero CTAs and navigation target existing visible sections
- [ ] No KickStart wording on a subscription-only page
- [ ] No recycled client names, examples, prices or guarantees
- [ ] Video optional; if included, poster is deliberate, real and flattering

**Function**
- [ ] No broken imports, missing media or hydration/browser-console errors
- [ ] Video/audio start, pause, seek and mobile playback tested; poster loads
- [ ] Calculators (if any) use verified formula and synchronized inputs
- [ ] Links, email/meeting CTAs and acceptance behavior match what they claim
- [ ] Proposal sections absent when irrelevant; no blank sections or anchor links
- [ ] Existing Hand & Stone page and Rob Cooper onboarding remain operational

**Offer and safety**
- [ ] Subscription cadence, renewal, taxes and scope are verified if shown
- [ ] Any KickStart or custom assessment fee/deliverables/guarantee are individually confirmed
- [ ] Public page is safe to share by URL; sensitive information excluded
- [ ] Terms and signing/acceptance flow reviewed only where needed
- [ ] Brent approved the **exact** page and media to publish

**Deployment**
- [ ] PR checks passed, preview content reviewed
- [ ] Production merge SHA confirmed and Vercel deployment `READY`
- [ ] `clients.alignrise.ca` assigned to the verified production deployment
- [ ] Deep link and new media URL verified externally where tooling permits
- [ ] No prospect email sent without explicit authorization

## 9. Copy/paste starter prompt for any AlignRISE client chat

> Build a **personalized AlignRISE client page** using the reusable presentation and publishing standard in `brent-prog/alignrise-site/docs/CLIENT_PAGE_PLAYBOOK.md`. **This is a format and workflow reference, not a content template.** Use the facts, client relationship and offering discussed in *this* chat. It may be an AlignRISE monthly subscription, KickStart assessment, custom engagement or simply an introductory/explainer page; **do not assume KickStart**. Reuse the AlignRISE branding, dual-logo design when a verified client logo exists, concise personalized hero, optional short video with a carefully chosen real-frame poster, flexible sections and an appropriate next step. Omit irrelevant assessment, pricing, calculator or acceptance panels. Work in the existing GitHub/Vercel project, preserve all existing client pages, create a reviewed preview, test mobile/media/interactions, and publish to `clients.alignrise.ca` **only after I approve the exact version**. Use the proven chunked GitHub/build-time media reconstruction approach if video cannot be uploaded directly; no Canva or client-facing Google Drive embeds. Tell me what essential details or assets are missing rather than inventing them. Prospect context: **[paste client/goal/offer or refer to this chat]**.

## 10. Related material

- The existing [proposal-specific playbook](./PROPOSAL_PLAYBOOK.md) remains authoritative for detailed legal/commercial acceptance and original site history. This file is the **offer-neutral page-experience standard**.
- The Hand & Stone page is a successful *visual/technical reference*, but **never the default commercial offer**.
- A fully reusable subscription-only page still requires the targeted component refactor noted in §5. Documenting the standard is not the same as claiming that refactor has been implemented.
