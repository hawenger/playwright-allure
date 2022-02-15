import { expect } from '@playwright/test'

export async function loadHomepage(page) {
  await page.goto('https://www.example.com')
}
export async function assertTitle(page) {
  const title = await page.locator('h1')
  await expect(title).toHaveText('Example Domain')
}
