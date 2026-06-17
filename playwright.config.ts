import { defineConfig, devices } from "@playwright/test";
import path from "path";

/**
 * See https://playwright.dev/docs/test-configuration.
 * Configured as per TEST_INFRA.md requirements.
 */
export default defineConfig({
  testDir: "./tests/e2e",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",

  /* Shared settings for all the projects below. */
  use: {
    /* Base URL set to local production server */
    baseURL: "http://127.0.0.1:39486",

    /* Collect trace when retrying the failed test */
    trace: "on-first-retry",

    /* Take screenshots on failure */
    screenshot: "only-on-failure",
  },

  /* Configure projects for major browsers: Chromium, Firefox, WebKit */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],

  /* Run local dev server before starting tests, using production build */
  webServer: {
    command: "PORT=39486 npx next start -H 127.0.0.1",
    url: "http://127.0.0.1:39486",
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
