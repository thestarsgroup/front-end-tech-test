/// <reference types="cypress" />
/* global Then, When, And, But */
/* eslint-env mocha */

import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

//navigate to a Darts event. 
//Once I have arrived at a darts event 
//I would then like to verify that a GET request was made to the request URL.
Given('Navigate to Pokerstarts UK', () => {
    cy.visit("https://www.pokerstarssports.uk");

    And('click on sports hyperlink on the home page', () => {
        //homepage can take bit of time to load, therefore put the waituntil to make it robust
        cy.waitUntil(() => cy.get('.sports-vertical').click());
        cy.waitUntil(() => cy.clickLink('Sports'));

    })

    when('click on darts', () => {
        cy.get('data-sport="darts').click();
        //cy.waitUntil(() => cy.clickLink('darts'));

    })

    Then('I would then like to verify that a GET request was made to the request URL {url}', () => {
        
        cy.getRequest();     
    })

});