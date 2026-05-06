import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if test.only is left in code */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Parallel workers */
  workers: process.env.CI ? 2 : undefined,

  /* Reporter */
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  use: {
    /* Base URL for tests */
    baseURL: process.env.BASE_URL || 'http://localhost:8080',

    /* Collect trace on failure (great for demos) */
    trace: 'on-first-retry',

    /* Screenshots on failure */
    screenshot: 'only-on-failure',

    /* Video on retry */
    video: 'retain-on-failure',

    /* Headless in CI */
    headless: !!process.env.CI,

    /* Ignore HTTPS errors if any */
    ignoreHTTPSErrors: true,
  },

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Optional for demo power 💪
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  /* Timeout per test */
  timeout: 30 * 1000,

  /* Expect timeout */
  expect: {
    timeout: 5000,
  },
});
