import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
//require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI ? [['blob'], ['junit'], ['list']] : [['list'], ['html', { open: 'never' }]],
  expect: {
    timeout: 5000,
    toHaveScreenshot: {
      maxDiffPixels: 100,
      animations: 'disabled',
      maxDiffPixelRatio: 0.1,
    },
    toMatchSnapshot: {
      maxDiffPixelRatio: 0.1,
    },
  },
  use: {
    headless: false,
    video: 'on-first-retry',
    ignoreHTTPSErrors: true,
    //Edinburgh
    geolocation: { longitude: 55.9533, latitude: 3.1883 },
    //NewYork
    //geolocation: { longitude: 40.7128, latitude: 74.006 },
    locale: 'en-GB',
    timezoneId: 'Europe/London',
    baseURL: 'https://magento.softwaretestingboard.com/',
    trace: { mode: 'retain-on-failure', attachments: true, screenshots: true, snapshots: true, sources: true },
    screenshot: { fullPage: true, mode: 'only-on-failure', omitBackground: true },
    launchOptions: {
      //slowMo: 50,
      devtools: false,
    },
  },

  /* Configure projects for major browsers */
  projects: [
    // {
    //   name: 'setup',
    //   use: { ...devices['Desktop Chrome'] },
    // },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     ...devices['Desktop Edge'],
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
