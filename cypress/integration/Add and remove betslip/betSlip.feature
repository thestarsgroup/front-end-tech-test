
 Feature: Score & fixture

 Scenario: Add and remove from betslip

Given I want to add an outcome to the bet slip for any sport 
And verify that the outcome is added to the bet slip 
Then like to remove this from the bet slip 
And verify that the bet slip is now empty
