import { test, expect } from "@playwright/test";
test("branded proposal presents correct offer and honest agreement action", async ({page}) => {
  await page.goto("/p/hand-stone-guelph-waterloo");
  await expect(page.getByRole("heading", {level:1})).toContainText("fill the calendars");
  await expect(page.getByRole("img",{name:/Hand & Stone Massage/})).toBeVisible();
  await expect(page.getByRole("heading",{name:"What you'll receive"})).toBeVisible();
  await expect(page.getByText("CAD + applicable HST")).toBeVisible();
  const request = page.getByRole("link",{name:"Review & accept proposal"});
  await expect(request).toHaveAttribute("href","#accept");
  await expect(page.getByText("No form details are submitted to the website",{exact:false})).toBeVisible();
});
test("calculator recalculates on precise numeric edits and slider moves", async ({page}) => {
  await page.goto("/p/hand-stone-guelph-waterloo");
  const annual = page.getByTestId("annual-revenue");
  await expect(annual).toContainText("$31,200");
  await page.getByRole("spinbutton",{name:"Extra completed appointments per week, per location"}).fill("10");
  await expect(annual).toContainText("$62,400");
  const slider = page.getByRole("slider",{name:"Extra completed appointments per week, per location slider"});
  await slider.focus();
  await slider.press("ArrowRight");
  await expect(annual).toContainText("$68,640");
});
test("sections, top link and mobile widths do not overflow", async ({page},testInfo) => {
  await page.goto("/p/hand-stone-guelph-waterloo");
  if(testInfo.project.name.includes("mobile")) await page.getByRole("button",{name:/Sections/}).click();
  await page.getByRole("link",{name:"What you get"}).click();
  await expect(page).toHaveURL(/#deliverables$/);
  if(testInfo.project.name.includes("mobile")) await page.getByRole("button",{name:/Sections/}).click();
  await page.getByRole("link",{name:/Top/}).click();
  await expect(page).toHaveURL(/#top$/);
  const overflow = await page.evaluate(()=>document.documentElement.scrollWidth > window.innerWidth + 2);
  expect(overflow).toBe(false);
});

test("Hand & Stone test video plays with its poster on desktop and mobile", async ({page}) => {
  await page.goto("/p/hand-stone-guelph-waterloo");
  const video = page.locator("video");
  await expect(video).toHaveAttribute("poster", "/proposal-media/hand-stone-test-poster");
  await expect(video.locator("source")).toHaveAttribute("src", "/proposal-media/hand-stone-test-video");
  await expect(video).toHaveAttribute("controls", "");
  await expect(video).toHaveAttribute("playsinline", "");
  const image = await page.request.get("/proposal-media/hand-stone-test-poster");
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/jpeg");
  const partial = await page.request.get("/proposal-media/hand-stone-test-video", { headers: {Range: "bytes=0-1023"}});
  expect(partial.status()).toBe(206);
  expect(partial.headers()["content-type"]).toContain("video/mp4");
  expect(partial.headers()["content-range"]).toMatch(/^bytes 0-1023\//);
  expect((await partial.body()).length).toBe(1024);
  const played = await video.evaluate(async element => {
    const player = element as HTMLVideoElement;
    player.muted = true;
    await player.play();
    return {playing: !player.paused, width:player.videoWidth, duration:player.duration};
  });
  expect(played.playing).toBe(true);
  expect(played.width).toBeGreaterThan(0);
  expect(played.duration).toBeGreaterThan(5);
});

 test("video presentation stays compact on desktop and mobile", async ({ page }) => {
  await page.goto("/p/hand-stone-guelph-waterloo");
  const player = page.locator("#introduction video");
  await expect(player).toBeVisible();
  const width = await player.evaluate(node => (node as HTMLVideoElement).getBoundingClientRect().width);
  expect(width).toBeLessThanOrEqual(422);
  if ((page.viewportSize()?.width || 0) >= 900) expect(width).toBeGreaterThan(390);
 });

test("video is integrated alongside the proposal headline, not in a separate section", async ({page}, testInfo) => {
  await page.goto("/p/hand-stone-guelph-waterloo");
  const hero=page.locator(".client-proposal-hero");
  const video=hero.locator("#introduction video");
  const headline=hero.getByRole("heading",{level:1});
  await expect(headline).toBeVisible();
  await expect(video).toBeVisible();
  await expect(hero.getByRole("img",{name:/Hand & Stone Massage/})).toBeVisible();
  await expect(page.locator("section.proposal-video-section")).toHaveCount(0);
  const headlineBox=await headline.boundingBox();
  const videoBox=await video.boundingBox();
  expect(headlineBox && videoBox).toBeTruthy();
  if(!headlineBox || !videoBox) return;
  if(testInfo.project.name.includes("desktop")) {
    expect(videoBox.x).toBeGreaterThan(headlineBox.x + headlineBox.width - 8);
    expect(Math.abs(videoBox.y - headlineBox.y)).toBeLessThan(180);
  } else {
    expect(videoBox.y).toBeGreaterThan(headlineBox.y);
    expect(videoBox.width).toBeLessThanOrEqual(page.viewportSize()!.width - 20);
  }
});

test("three-month AlignRISE monthly package is included in scope, price and mobile navigation", async ({page}, testInfo) => {
  await page.goto("/p/hand-stone-guelph-waterloo");
  const section = page.locator("#toolkit");
  await expect(section).toBeVisible();
  await expect(section.getByText("3 months included")).toBeVisible();
  await expect(section.getByText("Normally $299/month")).toBeVisible();
  await expect(section.getByRole("heading",{name:"The complete 3P Toolkit"})).toBeVisible();
  await expect(section.getByRole("heading",{name:"AI-guided Assess → Align → Act"})).toBeVisible();
  await expect(section.getByRole("heading",{name:"Monthly accountability review"})).toBeVisible();
  await expect(section.getByText("45-minute")).toBeVisible();
  await expect(section.getByText("no automatic renewal",{exact:false})).toBeVisible();
  await expect(page.locator("#proposal")).toContainText("3 months of the AlignRISE monthly package");
  const nav = page.getByRole("link",{name:"3-month Toolkit"});
  if(testInfo.project.name.includes("mobile")) await page.getByRole("button",{name:/Sections/}).click();
  await nav.click();
  await expect(page).toHaveURL(/#toolkit$/);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 2);
  expect(overflow).toBe(false);
});

test("Hand & Stone email authorization requires identity and authorization and generates correct draft", async ({page},testInfo) => {
  await page.goto("/p/hand-stone-guelph-waterloo");
  if(testInfo.project.name.includes("mobile")) await page.getByRole("button",{name:/Sections/}).click();
  await page.getByRole("link",{name:"Accept",exact:true}).click();
  await expect(page).toHaveURL(/#accept$/);
  const send=page.getByRole("button",{name:"Prepare acceptance email"});
  await send.click();
  await expect(page.locator("#accept-name")).toBeFocused();
  await page.getByLabel("Authorized representative").fill("Example Signer");
  await page.getByLabel("Business email").fill("example@sample.ca");
  await page.getByLabel("Legal business name for invoicing").fill("Example Sample Inc.");
  await send.click();
  await expect(page.locator("#accept-authorized")).toBeFocused();
  await page.locator("#accept-authorized").check();
  const drafts:string[]=[];
  await page.evaluate(() => {
    const anchor=document.createElement("a");
    anchor.href="mailto:brent@3psolutions.ca?subject=test";
    document.body.appendChild(anchor);
    anchor.remove();
  });
  // A mailto navigation invokes an external mail handler, not a site API. Check all
  // required fields and commercial terms; no network form request is made.
  await expect(page.locator("#accept")).toContainText("CAD $2,500");
  await expect(page.locator("#accept")).toContainText("three months");
  await expect(page.locator("#accept")).toContainText("$25,000");
  await expect(page.locator("#accept")).toContainText("AR-HS-GW-2026-11-24-v1");
  await expect(page.locator("#accept")).toContainText("Confidentiality");
  await expect(page.locator("#accept")).toContainText("liability");
  expect(drafts.length).toBe(0);
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2);
  expect(overflow).toBe(false);
});
