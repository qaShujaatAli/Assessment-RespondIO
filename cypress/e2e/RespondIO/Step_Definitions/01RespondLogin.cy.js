/// <reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

    Given("[LOGIN] User Launches Respond IO App", () =>
    {
        cy.clearAllCookies('https://app.respond.io/user/login')
        cy.clearAllLocalStorage('https://app.respond.io/user/login')
        cy.visit('https://app.respond.io/user/login')
    })

    When('[LOGIN] User Enters UserName {string}', (userName) =>
    {
        cy.get('#input-7').type(userName);
    })

    When('[LOGIN] User Enters Password {string}', (password) => 
    {
        cy.get('#input-9').type(password);
    })

    When('[LOGIN] User clicks Sign in', () => 
    {
        cy.get('button[data-pw="btn-signin"]').click();
    })

    Then('[LOGIN] User must be Logged in successfully', () => 
    {
        cy.get('.v-toolbar-title__placeholder > .dls-flex > .dls-inline-flex > .dls-text-text-primary', {timeout: 20000}).contains('Dashboard');
    })

    Then('[Add Workflow User] User clicks on Workflow icon', () => 
    {
        cy.get('a[data-pw="settings"]').click({force: true});
    })

    Then('[Add Workflow User] User clicks on Users icon', () => 
    {
        cy.get('a[data-pw="users"]').eq(1).click();
    })

    Then('[Add Workflow User] User clicks on Add User icon', () => 
    {
        cy.get('span').contains('Add User').click({force: true});
        cy.wait(3000);
    })
    
    When('[Add Workflow User] User adds email {string} to invite user', (userName) =>
    {
        cy.get('input[placeholder="Email Address"]').type(userName);
    })

    Then('[Add Workflow User] User taps on Submit', () => 
    {
        cy.get('button[type="submit"]').click();
        cy.get('span').contains('Skip').click();
    })
    
    Then('[Add Workflow User] Verify User is invited successfully', () => 
    {
        cy.get('div[disable-tooltip="false"]>span.dls-text-text-primary.dls-txt-body')
            .contains('User has been invited to workspace');
    })
