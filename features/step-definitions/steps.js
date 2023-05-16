const { Given, When, Then } = require('@wdio/cucumber-framework');

var assert = require('assert')

const HomePage = require('../pageobjects/home.page');
const LoginPrompt = require('../pageobjects/login.prompt')
const JoinPrompt = require('../pageobjects/join.prompt')



const pages = {
    //login: LoginPage
}

Given('I am on the home page', function () {
    HomePage.open();
    browser.pause(3000);

  });


  When('I wait for the page to load', function () {
    browser.maximizeWindow();

    browser.pause(5000);
  });



  Then('the page should load without any errors', function () {
    HomePage.verifyHomePageLoadsCorrectly();    
    browser.pause(3000);


  });


  When('I click the login button', function () {
    HomePage.clickLoginButton();
    browser.pause(6000);
 
  });


  When('I click the join button', function () {
    HomePage.clickJoinButton();
    browser.pause(6000);
 
  });



  Then('the login prompt should be displayed', function () {
    LoginPrompt.validateLoginPrompt();
    LoginPrompt.close();

    });

    Then('the join prompt should be displayed', function () {
    JoinPrompt.validateJoinPrompt();
    JoinPrompt.close();

    });


    
    Then('I check all links on the page are working', function (){
     HomePage.verifyLinksAreWorkingCorrectly();
    });


    Then('the website should use HTTPS',  function () {
        HomePage.verifyWebsiteSecurity();
    });
    
    

    When('I verify that the sports and events are displayed',  function () {
        HomePage.verifySportsAndEvents();
    });


    Then('the chosen sports and events should be displayed on In play section',  function () {
        HomePage.chooseSportsInPlaySection();
    });



    When('I select Football from the sports list', function () {
        HomePage.chooseSportsInPlaySection();
      });
      
    When('I select first match from the event list', function () {
        HomePage.chooseMatch();
    });      
    
    When('I select The Draw as from the Match odds of betting options', function () {
        HomePage.chooseMatchOdds();
    });

    When('I enter a stake of 10 in the betting slip', function () {
        HomePage.enterStake();
    });


    Then('the bet slip should display 1 bet', function () {
        HomePage.verifyBetSlipCount();
    });
    

    Then('the bet slip should display The Draw betting option', function () {
        HomePage.verifyOdds();
    });

    Then('the bet slip should display 10 stake', function () {
        HomePage.verifyStake();
    });

    When('I click on the Delete button', function () {
        HomePage.deleteBetStake();
    });

    Then('the bet slip should be empty', function () {
        HomePage.verifyEmptyBetSlip();
    });