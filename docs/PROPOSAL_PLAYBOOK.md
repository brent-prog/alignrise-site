# AlignRISE Client Proposal Publishing Playbook

**Status:** Working implementation, November 24, 2026. **Approval state:** draft, not production-released.
**Owner:** 3P Solutions. **Brand:** AlignRISE™ by 3P Solutions.
**Reference:** 3P Solutions playbook in `brent-prog/3p-client-proposals/docs/PROPOSAL_PLAYBOOK.md`. Adopt its operational lessons, not its brand, terms, or build implementation.

## 1. Infrastructure actually confirmed

- GitHub: `brent-prog/alignrise-site`, Next.js 16 / React 19 / TypeScript, default branch `main`.
- Vercel: existing `alignrise-site` project, ID `prj_ZyiHkw1LeEjzjVs3DxF2IN3Q4ovO`, 3PSolutions team `team_0PWlz9Nyuqrtm2jkVByGa6o6`. GitHub integration verified.
- Vercel project domains (verified): `alignrise.ca`, `www.alignrise.ca`, `clients.alignrise.ca`, and `alignrise-site.vercel.app`. *Domain listing verifies attachment, not a full DNS/TLS/client-route end-to-end test.*
- Existing Rob Cooper onboarding: `src/app/robcooper/page.tsx`, preserved unchanged.
- Prospect functionality is currently on `feature/erin-layton-prospect-page`, not `main`. The proposal branch has a Vercel preview; production must not be described as published.
- Intended stable public URL convention **after approval and main deployment**: `https://clients.alignrise.ca/p/<client-slug>`. Existing routes must not be renamed without a deliberate redirect.
- These unlisted URLs are public to anyone holding the link. `noindex` and hard-to-guess slugs are *not* authentication.

## 2. Architecture and current components

- `src/app/p/[slug]/page.tsx`: Next.js dynamic segment resolved from content map; generates `noindex,nofollow` metadata. Archived records render 404.
- `src/content/prospect-pages.ts`: per-client data, currently Hand & Stone. Future additions may be separate files imported into the map. Each client retains independent copy, offer and commercial details.
- `src/components/prospect/ProspectExperience.tsx`: current compact branded page. **Some structure remains Hand & Stone-specific**; extend with optional section primitives before making a materially different proposal, rather than forcing unrelated content into existing sections.
- `ProspectNavigation.tsx`: sticky Top + proposal-section links + external AlignRISE website.
- `ProspectVideo.tsx`: optional native `video controls playsInline preload="metadata"`, with supplied poster. This component is implemented but **no end-to-end real client video upload/playback has been verified**.
- `ScenarioCalculator.tsx`: shared, client-configurable *appointment revenue* calculator with editable numeric fields, synchronized range sliders, two-location option and illustrative disclosure. **Do not reuse this specific financial model for unrelated clients**.
- `prospect.css`: mobile navigation, video and calculator presentation.
- All shared components use the existing approved `/alignrise-logo.svg`; preserve existing favicon `/alignrise-icon.svg`. Do not substitute 3P or synthetic logo artwork.
- Current Hand & Stone terms are specific to that prospect, **not general KickStart terms**.

## 3. The ChatGPT-led workflow (required)

1. Work in the AlignRISE ChatGPT project. Discuss the client, decision makers, relationship, goals, constraints, and intended engagement.
2. Retrieve appropriate existing AlignRISE project sources, previous meeting notes, authorized Gmail/HubSpot records, and the approved offering; distinguish verified fact from hypothesis.
3. Agree on the business problem, proposed approach, deliverables, timeline, fee, exclusions, guarantee (if any), acceptance/next action and confidentiality before presenting them as binding.
4. Compose *client-specific* content while reusing shared components. No separate admin dashboard or manual publishing form.
5. Brent may upload video, images and documents **in ChatGPT**. Assistant processes suitable files locally and writes them using supported GitHub/Vercel connector actions. Never claim a connector capability that fails or has not been tested.
6. Create a feature branch or work on an existing prospect feature branch, preserving other clients. Update specific source and content records and open a draft PR.
7. Verify preview build and resulting URL, proofread and test interactions. Share the preview **with Brent for approval**, not with the prospect.
8. After explicit approval, merge to the production branch using connected tools, inspect Vercel READY status and exact deployed commit, then test the final `clients.alignrise.ca` URL before sharing.
9. Record version and publication date; update the playbook if the process improves.

## 4. Add or update a client

- Inspect `src/content/prospect-pages.ts` and check slug uniqueness. Use an unambiguous, stable, preferably non-obvious slug; avoid customer secrets.
- Add content record and optional sections/media; reference approved offer details rather than copying another prospect's commercial terms.
- First hero CTA introduces the proposal (e.g. proposed approach); place commitment action **after** context, value and terms.
- Navigation labels must point to IDs that exist in the rendered page; hide irrelevant links.
- Keep paragraphs short and eliminate sections that do not serve the particular client.
- Edit the existing record to retain the URL. To retire a page, mark `archived`, deploy and verify 404. For confidential material, remove content from the public route and consider deletion/remediation of cached or historically served copies.
- Status `draft` is editorial metadata, **not a privacy boundary**; once its branch is deployed to a reachable preview URL, treat content as potentially public.

## 5. Video and media workflow

1. Accept uploaded media directly in ChatGPT. Do not use Google Drive embeds or autoplay.
2. If local file processing is available, encode H.264/AAC MP4, web-friendly dimensions and `faststart`; preserve the original substance.
3. Extract several real frames; deliberately choose a flattering frame. Use approved client-specific caption and subtle play artwork when needed.
4. Save poster and video under a client-specific asset path, use a supported transport to the repository or approved media host, and check actual payload size. Never publish private or large media blindly into Git history.
5. Preferred future solution for large videos is appropriately configured Vercel Blob or another authorized media store **only after upload permission is verified**. The 3P Pizzaiolo base64/GitHub reconstruction technique is a workaround and is **not** the default AlignRISE media architecture.
6. Check poster, MP4 HTTP response, audio, play/pause, mobile `playsInline`, and no autoplay. Not yet validated end-to-end with an actual uploaded video.

## 6. Interactive scenarios

- Add calculators only where a measurable client-specific decision benefits from them. Define formula, input bounds, currency, time period, baseline, margin assumptions, and disclaimers **before** coding.
- Use React state for instant recomputation; numeric inputs and sliders reflect the same state.
- Numeric values may exceed the slider's visual ceiling when typed; document that interaction clearly.
- Avoid saving visitor-entered financial information, sending it to analytics or placing it in URL parameters.
- Clearly separate service revenue from contribution profit and results from illustrative assumptions.
- Test changing **every slider and every number input**, both locations, zero, maximum and an entered value outside slider bounds. Confirm displayed output and no JS/console exception.
- Hand & Stone model: `appointments/week/location × average service value × 48 weeks × location count`. This is not the universal AlignRISE ROI model.

## 7. Commercial safeguards and acceptance

- Specific offer, price, HST treatment, scope, service dates, travel, client responsibilities, authorized entity, cancellation, refunds, guarantee, exclusions, liability and proposal validity must be verified case by case.
- Do not carry over Pizzaiolo terms or assume the Hand & Stone discounted KickStart pricing applies elsewhere.
- Current Hand & Stone CTA opens an **email draft**. It is a conversation starter; it is **NOT** electronic acceptance or a signed contract.
- True e-acceptance remains **unimplemented**. It would require authorized signer verification, explicit consent, exact immutable accepted terms/version, timestamp, durable access-controlled record, client confirmation, privacy safeguards and testing. Do not describe it as available.
- Public prospect pages must exclude confidential financials, private assessments, personal information and secrets unless explicitly approved for public sharing.

## 8. Required pre-publication QA

### Content and commercial
- [ ] Client/decision-maker names correctly spelled; business specifics actually confirmed
- [ ] No recycled client facts, invented metrics, unsupported ROI promises or incorrect franchise assumptions
- [ ] Scope, deliverables, exclusions, dates, fees, taxes, guarantees, cancellation/refund and liability reviewed
- [ ] Next step clearly described; email draft not falsely represented as e-signature
- [ ] Prepared date matches publication date if displayed; valid-through date explicitly agreed

### Brand, video and navigation
- [ ] Approved AlignRISE logo, palette, favicon and page title/meta
- [ ] Top, all section anchors and AlignRISE external link work
- [ ] Native video play/pause/audio and real poster frame verified if included
- [ ] First CTA advances into proposal, not prematurely to acceptance
- [ ] Page is short enough for its scope; no superfluous whitespace

### Calculator and mobile
- [ ] Each slider/numeric field synchronizes and recomputes instantly; sanity-check math by hand
- [ ] Results clearly distinguish revenue from profit and scenario from forecast
- [ ] Mobile width 320/375/390/768 and desktop: no overflow or overlapping fields
- [ ] Mobile sticky menu opens/closes and anchors work; reachable touch targets
- [ ] No page console or hydration errors, broken external links or unresponsive buttons

### Deploy, access and approval
- [ ] Preview READY, commit SHA correct, direct deep link and refresh work
- [ ] Preview inspected; client content safe for preview access
- [ ] Brent explicitly approved final content and commercial terms before production merge
- [ ] Production READY, deployed SHA verified, DNS + SSL + URL on `clients.alignrise.ca` checked
- [ ] No sensitive data in public source or published assets
- [ ] Deliver only verified production URL to client; record approval and update playbook

## 9. Known limitations and backlog

- The client-specific proposal engine is on a feature branch, pending review/merge. The base site and Rob Cooper page remain on main.
- Shared proposal structure still contains some Hand & Stone-specific composition; for a different offer, add optional generic section definitions and renderer rather than a clone.
- Video component is implemented but no end-to-end upload or video playback confirmed.
- Generic e-signature/acceptance is not implemented.
- No robust automated browser E2E tests or permanent CI test gate has been established.
- Media upload support to Vercel Blob is unverified for the available connected permissions.
- Preview deployments may have access restrictions and should not be assumed client-accessible.
- Do not consider GitHub success equivalent to a working deployment.

## 10. Kickoff prompt for another proposal

> Create an AlignRISE client proposal using the current `docs/PROPOSAL_PLAYBOOK.md` in `brent-prog/alignrise-site`. We will develop and approve the proposal here in ChatGPT; I will upload assets here, and you will handle supported GitHub/Vercel actions, previews and QA. Preserve the current site, Rob Cooper onboarding, and Hand & Stone proposal. Prospect: **[company]**, decision maker: **[person]**, stated challenges and intended engagement: **[brief]**. Use actual AlignRISE branding and approved offering terms, personalize the page, use optional video or interactive calculators only if useful, and do not publish or send until I approve. Verify the production client URL before delivering it.
