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
})

And('click on sports hyperlink on the home page', () => {
    //homepage can take bit of time to load, therefore put the waituntil to make it robust
    cy.waitUntil(() => cy.get('#toggle').click())

//})

When('click on darts', () => {

    cy.clickLink('Darts')
})

Then('I would then like to verify that a GET request was made to the request URL', () => {
    try {
        cy.confirm()
    }
    catch (e) {
        cy.log(e, 'error')
    }
})
})
