# Frontend Technical Test

Welcome to Flutter International (Pokerstars) technical exercise for frontend test engineers!

The site we would like you to test can be found at: https://www.pokerstarssports.uk, you will need to be browsing from a UK IP address in order to access it. Please bear in mind that the site is highly dynamic and both the content and the layout may change over time. You will not need to register an account or log in to the website to complete this test.

### Task 1
Write 10 or more Gherkin scenarios to cover behaviour on the home page.

### Task 2
Create a simple javascript framework using WebdriverIO and Cucumber to automate a selection of the scenarios you have created. You should include at least 5 scenarios.
- https://www.npmjs.com
- https://webdriver.io/docs/gettingstarted
- https://webdriver.io/docs/frameworks#using-cucumber

After completing the tasks, please update the README.md file with your scenarios from Task 1 and instructions on how to run your tests, include any information you think is relevant, interesting or useful. The preferred delivery method for this project is via Github but we will also accept a zipped file sent as an email attachment.


# Solution for Frontend Technical Test

## Task 1 Solution
```
Gherkin Scenarios to cover behavior of home page:
1. Verify that the website loads without any errors.
2. Verify the Login button on home page opens up the login prompt popup. 
3. Verify that the join button on home page opens up the popup prompt.
4. Verify that all the links on the website are working properly.
5. Verify that the website is secure and uses HTTPS.
6. Verify that the website displays the correct sports and events.
7. Verify that the betting slip is updating correctly on placing bets on Football sports and delete option is working. 
8. Verify that the odds and betting options are displayed correctly for events. 
9. Verify that the main navigation menu items are functioning as expected.
10. Verify that the promotions and offers advertised on the home page are accurate and working.
11. Verify that the social media links on the home page footer are functional and lead to the correct social media pages.
12. Verify that the website is responsive and works well on different devices and screen sizes.
13. Verify that the website is accessible and meets WCAG (Web Content Accessibility Guidelines) standards.
```

## Task 2 Solution

### Cucumber-WebdriverIO framework
WebdriverIO framework for automation using Cucumber and Javascript

### The framework has following features
```
1. PageObject model
2. Javascript based framework
3. devDependencies defined in package.json
4. wdio.conf file having cucumberOpts with stepdefinitions path and feature files path in specs
```

### To Get Started
#### Pre-requisites
```
1. node js installed in the system
2. 'npm init -y' and 'npm init wdio' run to initiate Project and wdio 
3. IDE(Visual studio Code) used with cucumber and gherkin plugins
```

#### Run Scripts
```
1. Pull this repo, keep the folder structure intact
2. navigate to folder front-end-tect-test
3. run command in the terminal to run all features: npx wdio
4. run command to run specific feature ( HomePage.feature): npx wdio --spec ./features/HomePage.feature 
5. If we want to run specific tags scenarios, can be run with below command 
    npx wdio --spec ./features/HomePage.feature  --cucumberOpts.tagExpression '@sanity'  --> to run all scenarios
    npx wdio --spec ./features/HomePage.feature  --cucumberOpts.tagExpression '@homePage'  --> to run 1st scenario 
6. After writing feature files if we want to autogenerate Step definitions, below command can be used 
    ./node_modules/.bin/cucumber-js
7. Reporting: Currently framework is using default 'spec' reporter, but we can also incorporate Allure reporting (widely used)
```

### Test Observations
```
1. Sometimes while manually testing or running automation scripts the application gives 404 error - invalid session, specially while choosing sports and events and the page load delay is significant 
Eg: below url response:
https://www.pokerstars.uk/sports/web/meta/event-type/?eventTypeSlug=tennis&eventTypeId=2  error: 404

```