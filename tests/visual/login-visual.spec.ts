import { test } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/LoginPage'

test.describe.only('Login Page Visual Test', () => {
  let homePage: HomePage
  let loginPage: LoginPage

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    await homePage.visit()
    await homePage.clickOnSignIn()
  })
  test('Login Form', async ({ page }) => {
    await page.waitForLoadState('networkidle')
  })
})
