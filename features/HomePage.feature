Feature: Verify that the Pokerstars sports home page loads correctly and check the functional behaviour of home page.

@sanity @homePage
Scenario: Verify that the home page loads without any errors
Given I am on the home page
When I wait for the page to load
Then the page should load without any errors

@sanity 
Scenario: Verify the Login button on home page opens up the login prompt popup 
Given I am on the home page
When I click the login button
Then the login prompt should be displayed

@sanity 
Scenario: Verify that the join button on home page opens up the popup prompt
Given I am on the home page
When I click the join button
Then the join prompt should be displayed

@sanity 
Scenario: Verify that all links on the home page are working correctly
Given I am on the home page
Then I check all links on the page are working

@sanity 
Scenario: Verify that the website is secure and uses HTTPS.
Given I am on the home page
Then the website should use HTTPS

@sanity 
Scenario: Verify that the website displays the correct sports and events
Given I am on the home page
When I verify that the sports and events are displayed
Then the chosen sports and events should be displayed on In play section


@sanity 
Scenario: Verify that the betting slip is updating correctly on placing bets on Football sports and delete option is working 
Given I am on the home page 
When I select Football from the sports list
And I select first match from the event list
And I select The Draw as from the Match odds of betting options
And I enter a stake of 10 in the betting slip
Then the bet slip should display 1 bet
And the bet slip should display The Draw betting option
And the bet slip should display 10 stake
When I click on the Delete button 
Then the bet slip should be empty

