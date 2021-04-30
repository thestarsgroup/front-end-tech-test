/// <reference types="cypress" />

import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

Given('I want to add an outcome to the bet slip for any sport', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      });

    
    cy.visit("https://www.pokerstarssports.uk/#/darts/competitions");
    
    And('verify that the outcome is added to the bet slip', () => {
        //Make sure that frame 
        cy.get('.market-content')
        .should('be.visible')
        cy.get('#event-schedule-selection-3844697493').click()//.within()
        .should('be.visible')

        });

    Then('like to remove this from the bet slip', () => {

        cy.get('.remove > .icon-remove')    
        .should('be.visible')
        .click()
        
    }); 
    And ('verify that the bet slip is now empty', () => {

        
        cy.get('#bets-singles > .singleBetView > .noBets')
        .should('be.visible')

    });

});
