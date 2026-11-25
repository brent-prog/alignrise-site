import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./e2e",
  timeout: 35000,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  use: { baseURL:"http://127.0.0.1:3100", trace:"retain-on-failure" },
  projects: [
    { name:"chromium-desktop", use:{ browserName:"chromium", viewport:{ width:1280,height:850 } } },
    { name:"chromium-mobile", use:{ ...devices["iPhone 13"], browserName:"chromium" } }
  ],
  webServer: {
    command: "npm run start -- -p 3100",
    url: "http://127.0.0.1:3100/p/hand-stone-guelph-waterloo",
    reuseExistingServer: !process.env.CI,
    timeout: 120000
  },
  reporter:"list"
});
