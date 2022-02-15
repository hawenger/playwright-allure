import { PlaywrightTestConfig } from '@playwright/test'
//npx playwright test --config=playwright.config.ts
//npx playwright test --config=playwright.config.ts --project=Webkit
const config: PlaywrightTestConfig = {
  timeout: 600000,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],
  reporter: [['line'], ['allure-playwright']],
}
export default config
