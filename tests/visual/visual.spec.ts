import { test, expect } from '@playwright/test'

test.describe('Visual Regression Testing Examples', () => {
  test('Full Page Snapshot', async ({ page }) => {
    await page.goto('https://www.example.com')
    await page.waitForTimeout(5000)
    expect(await page.screenshot()).toMatchSnapshot('homepage.png')
  })
  test('Single Element Snapshot', async ({ page }) => {
    await page.goto('https://www.example.com')
    const pageElm = await page.$('h1')
    expect(await pageElm.screenshot()).toMatchSnapshot('page-title.png')
  })
})
