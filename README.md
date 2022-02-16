# Playwright-Allure

## Demonstrating Playwright with Allure and Github Actions

After running playwright tests with _npm test_, scripts in package.json allow Allure to generate a detailed HTML report on test results. Test results are pushed to Github and displayed on repo's pages. Running _npm run allure:open_ opens latest generated report locally.

#### Install

Command Line

_npm i_

#### Run

_See package.json "scripts" for more run configurations_

##### Tests

Command Line

_npm test_

##### Allure Report

Command Line

**Build Report**
_npm run allure:generate_

**Open Report**
_npm run allure:open_

#### Snapshots

#####Update
Command Line

_npx playwright test --config=visual.config.ts --project=chromium --update-snapshots_

### Debug

Requires Java 8 or higher
add _await page.pause()_ to test and run in headed mode to open inspector

Command Line

- npx playwright test --debug

### Jenkins Setup

Command Line

_java -jar jenkins.war --httpPort=8080 --enable-future-java_
