import { test, expect } from '@playwright/test'

test('Simple Basic test', async ({ page }) => {
  await page.goto('https://www.example.com')
  const pageTitle = await page.locator('h1')
  await expect(pageTitle).toContainText('Example Domain')
})
test('Click on Elements', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/index.html')
  await page.click('#signin_button')
  await page.click('text=Sign in')
  const errorMessage = await page.locator('.alert-error')
  await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

//test('Selectors', async ({ page }) => {
//  //text
//  await page.click('text= some text')
//
//  //Css Selectors
//  await page.click('button')
//  await page.click('#id')
//  await page.click('.class')
//
//  //Only visible Css Selectors
//  await page.click('.submit-button:visible')
//
//  //Combinations
//  await page.click('#username .first')
//
//  //XPath
//  await page.click('//button')
//})
test('Working with Inputs', async ({ page }) => {
  await page.goto('http://zero.webappsecurity.com/index.html')
  await page.click('#signin_button')

  await page.type('#user_login', "'some username")
  await page.type('#user_password', 'some password')
  await page.click('text=Sign in')
  const errorMessage = await page.locator('.alert-error')
  await expect(errorMessage).toContainText('Login and/or password are wrong.')
})
test('Assertions', async ({ page }) => {
  await page.goto('https://example.com')
  await expect(page).toHaveURL('https://example.com')
  await expect(page).toHaveTitle('Example Domain')

  const element = await page.locator('h1')
  await expect(element).toBeVisible()
  await expect(element).toHaveText('Example Domain')
  await expect(element).toHaveCount(1)

  const noneExistingElement = await page.locator('h5')
  await expect(noneExistingElement).not.toBeVisible()
})

//Annotations
//Run Tests in Test Suite
test.describe('My first test suite', () => {
  //test.skip('Skip', async ({ page }) => {})
  //test.only('Run only tests marked with Only', async ({ page }) => {})
})

//Tags
//npx playwright test --grep @myTag
//npx playwright test --grep-invert @myTag
test('a new test @myTag', async ({ page }) => {
  await page.goto('https://example.com')
  await expect(page).toHaveURL('https://example.com')
})

//Before and After Hooks
test.describe.only('Passing Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com')
  })
  //screenshots
  test('Screenshots', async ({ page }) => {
    await page.screenshot({
      path: 'screenshots/fullpage.png',
      fullPage: true,
    })
  })
  test('Single element Screenshot', async ({ page }) => {
    const element = await page.$('h1')
    await element.screenshot({ path: 'screenshots/component.png' })
  })
})
test.describe.only('Failing Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://example.com')
  })
  //screenshots
  test('Screenshots', async ({ page }) => {
    const pageTitle = await page.locator('h1')
    await expect(pageTitle).toContainText('Fun Text')
  })
  test('Single element Screenshot', async ({ page }) => {
    const pageTitle = await page.locator('h1')
    await expect(pageTitle).toContainText('Random Text')
  })
})
