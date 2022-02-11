//Command Line Example: npx playwright test --config=playwright.config.ts --project=Chromium --reporter=line

//Reporters
// --reporter=line
// --reporter=list (default used by playwright)
// --reporter=dot
// --reporter=junit (gives xml format that can be extracted and used in logs)
// --reporter=html (npx playwright show-report)
// --reporter=json ()

//Allure Reporter
//# Run tests
//npx playwright test --reporter=line,allure-playwright
//
//# Generate report
//allure generate ./allure-results --clean && allure open ./allure-report
