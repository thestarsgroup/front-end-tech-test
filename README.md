# front-end-tech-test

Tech Test for UI/FE
We recognise that people have different experience and different levels of ability. For this technical test we would ask that scenarios one and two are completed as a minimum, if you are able to do so you can also attempt scenario three.

We recommend spending no more than a few hours on this technical test.

Background of PokerStars Sports

PokerStars Sports is the sportsbook product offered by PokerStars. If you are familiar with sports betting you will already know your way around such a product.
Event Hierarchy

Within the product 'events' are generally single sporting events that offer multiple betting opportunities (markets). An example of this would be Manchester United vs. Leeds United. Each event has an associated `competition` (e.g. in the earlier example the competition would be the Premier League). Each `competition` then has an associated `sport` (e.g. in the earlier example the sport would be Football). The overall event hierarchy is therefore Sport > Competition > Event > Markets.
The Bet Slip

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

npm run test or npm run cypress

Note:
I couldn't able to test and run my tests which I have written due to the non accessible domain(UK) sports section

I have completed one scenario by using by getting the locators over the email as because of time difference it is not easy to get hold of any of my firends after working hours.

I have also installed mochawesome dependecies so after every run there should be a report generated.

The reports will be under cypress/reports folder in json format, It'll be created automatically once the report is complied after the test run. the naming convention for the reports is date format which is defined in config file(cypress.json)

There will be another folder for screenshots