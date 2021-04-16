
Feature: Score & fixture

Scenario: Navigate to football score's page

Given Navigate to bbc.com click on sports link 
And Navigate to football
And Navigate to score&fixtures 
Then verify that a GET request was made to the request URL{url} 