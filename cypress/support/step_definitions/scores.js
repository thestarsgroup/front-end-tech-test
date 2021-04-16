/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

/* global Then, When, And, But */
/* eslint-env mocha */

import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import getRequest from '../commands'

Given('Navigate to bbc.com click on sports link', () => {
    cy.visit("https://www.bbc.com/sport");
    //cy.waitUntil(() => cy.get('//*[@id="orb-nav-links"]/ul/li[3]/a')).click();

    And('Navigate to football', () => {
        cy.waitUntil(() => cy.get('.gel-wrap sp-c-sport-navigation__wrapper')).within(() => {
        cy.get('[data-stat-title="Football"]').click()
        })

    })

    And('Navigate to score&fixtures'), () => {
        cy.waitUntil(() => cy.get('//*[@id="sp-nav-secondary"]/li[2]/a')).click();

    }

    // Then('verify that a GET request was made to the request URL{url}', () => {
    //    let url = ("https://push.api.bbci.co.uk/batch?t=%2Fdata%2Fbbc-morph-football-scores-match-list-data%2FendDate%2F2021-04-08%2FstartDate%2F2021-04-08%2FtodayDate%2F2021-04-08%2Ftournament%2Ffull-priority-order%2Fversion%2F2.4.6?timeout=5");
    //     getRequest(url);
    // })

});