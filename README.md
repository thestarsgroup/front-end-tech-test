# Frontend Technical Test

Welcome to The Stars Group technical test for frontend test engineers!

These tasks are open ended but we recommend that you spend no more than a few hours on them.

The site we would like you to test can be found at: https://www.pokerstarssports.uk. Please bear in mind that the site is highly dynamic and both the content and the layout may change over time. You will not need to register an account or log in to the website to complete this test.

### Task 1
Write a number of BDD scenarios using Gherkin to test the following features:
- Adding things to, and removing things from, the bet slip
- Changing the odds format

### Task 2
Create a simple test framework using NPM, Cypress and Cucumber to automate a selection of the scenarios you have created. You should include at least two scenarios from each feature.
- https://www.npmjs.com
- https://www.cypress.io
- https://www.npmjs.com/package/cypress-cucumber-preprocessor

The bet slip is where a customer will enter a stake against an outcome that they have selected and place a bet. As an example a customer may want to place a bet on Leeds United to beat Manchester United. They would navigate to the event to find the market that they want to place the bet against, add that outcome to the bet slip, enter their stake (e.g. £1) and place a single bet.
There are a multitude of bet types available to customers but for the purpose of this technical test it is sufficient to place only single type bets (e.g. Leeds United to beat Manchester United).
There is no requirement for you to actually place the bet in the below scenario, you will therefore not need to have a registered account with PokerStars Sports or have to log in to the website.
Task:

Create a BDD automation framework to address the below scenarios;


Scenario 1 -Darts

As a PokerStars Sports user I want to navigate to https://www.pokerstarssports.uk and navigate to a Darts event. Once I have arrived at a darts event I would then like to verify that a `GET` request was made to 

Scenario 2 - Betslip

As a PokerStars Sports user I want to add an outcome to the bet slip for any sport and verify that the outcome is added to the bet slip. I would then like to remove this from the bet slip and verify that the bet slip is now empty.
Scenario 3 - Reporting (Optional)

For visibility of test runs we would like to see a reporting function within your framework that reports on test runs.
Once all test scenarios are finished please add instructions to the README file on how to execute these tests and any other useful information.

You can either upload this project to GitHub which is preferred or we will also accept this zipped up and sent as an attachment.

---------------------------------------------------------------------------------------------------#To execute the tests 

With browser: npm run test
Headless: npx run test:headless

These two commands are defined in the package.json under scripts, we can also add more variants of running the test. for example for each spec/feature individually

For the reporting I have added the mochawesome reporting which will get the report in html format, We can change the format to Json in cypress.json

I prefer to use the cypress dashboard especially when the tests are running on pipeline

ISSUE: Just faced one issue "Cypress detected that an uncaught error was thrown from a cross origin script." Found the alternative that is to ignore the error on the application and proceed with the cypress test execution 

Note:
I couldn't able to test and run my tests which I have written due to the non accessible domain(UK) sports section

I have completed one scenario by using by getting the locators over the email as because of time difference it is not easy to get hold of any of my firends after working hours.

I have also installed mochawesome dependecies so after every run there should be a report generated.

The reports will be under cypress/reports folder in json format, It'll be created automatically once the report is complied after the test run. the naming convention for the reports is date format which is defined in config file(cypress.json)

There will be another folder for screenshots
=======

After completing the tasks, please update the README.md file with your scenarios from Task 1 and instructions on how to run your tests, include any information you think is relevant, interesting or useful. The preferred delivery method for this project is via Github but we will also accept a zipped file sent as an email attachment.

