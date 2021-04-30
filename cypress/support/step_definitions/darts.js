/// <reference types="cypress" />
/* global Then, When, And, But */
/* eslint-env mocha */

import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('Navigate to pokerstarssports UK', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    cy.visit("/");

    And('click on sports hyperlink on the home page', () => {
        //homepage can take bit of time to load, therefore put the waituntil to make it robust
        // cy.waitUntil(() => 
        // cy.get('.sports-vertical').click();
        //cy.waitUntil(() => 
        //       cy.get('.ssrcss-w14lwg-NavigationLink').click();
        cy.clickLink('Sports');

    })

    When('click on darts', () => {

        // cy.get('.sp-c-sport-navigation__inner > :nth-child(2) > .sp-c-sport-navigation__link')
        // .click();
        cy.clickLink('Darts')
            .should('have.text', 'Darts')

    })

    Then('I would then like to verify that a GET request was made to the request URL', () => {
        try {
            cy.confirm()
        }
        catch (e) {
            cy.log(e, 'error')
        }
    })
});