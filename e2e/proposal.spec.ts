import { test, expect } from "@playwright/test";
test("branded proposal presents correct offer and honest agreement action", async ({page}) => {
  await page.goto("/p/hand-stone-guelph-waterloo");
  await expect(page.getByRole("heading", {level:1})).toContainText("fill the calendars");
  await expect(page.getByRole("img",{name:/Hand & Stone Massage/})).toBeVisible();
  await expect(page.getByRole("heading",{name:"What you'll receive"})).toBeVisible();
  await expect(page.getByText("CAD + applicable HST")).toBeVisible();
  const request = page.getByRole("link",{name:"Request the engagement agreement"});
  await expect(request).toHaveAttribute("href",/^mailto:/);
  await expect(page.getByText("This is not electronic acceptance or a signature.")).toBeVisible();
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
