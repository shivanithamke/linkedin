/// <reference types="cypress"/>
// Cypress.on('uncaught:exception', (err, runnable) => {
//     // returning false here prevents Cypress from
//     // failing the test
//     return false
// })

import { linkedinlogin } from "./pages/linkedinlogin"; //import linkedlogin page components
const login = new linkedinlogin(); //create new login object to access linkedlogin function
beforeEach(function () {
  //run before each function run
  cy.visit("https://www.linkedin.com/home"); // visite link
  cy.url().should("include", "linkedin"); //verify url include linkedin or not
  cy.get(".nav__button-secondary").should("be.visible").click(); //verify sign in button visible or not
});
describe("Linked In", () => {
  it("invalide because blank space", () => {
    login.entername("");
    login.enterpass("");
    login.clicklogin();
    cy.get(".secondary-action-new").click();
  });
  it("invalide login", () => {
    login.entername("thamkeshivani200@gmail.com");
    login.enterpass("Shiv");
    login.clicklogin();
    cy.get(".secondary-action-new").click();
  });

  it("invalide login1", () => {
    login.entername("thamkeshivani200il.com");
    login.enterpass("ShivBasu@123");
    login.clicklogin();
    cy.get(".secondary-action-new").click();
  });

  it("Login", () => {
    login.entername("thamkeshivani200@gmail.com");
    login.enterpass("ShivBasu@123");
    login.clicklogin();
    cy.get(".secondary-action-new").click();
    cy.get("button[id=ember31]").click();
    // cy.get(
    //  ".global-nav__primary-items > :nth-child(3) > .app-aware-link > .t-12"
    // ).click();
    // cy.get('input[id=ember610]').click()
    /* Alternative code 
       // cy.get('input[name=session_key]').should('be.visible').should('be.enabled').type('thamkeshivani200@gmail.com')
       // cy.get('input[id=password]').should('be.visible').should('be.enabled').type('ggg')
       // cy.get('.btn__primary--large').should('be.visible').should('be.enabled').click()
        */
  }),
    it("Forget Password", () => {
      cy.get(".login__form > .btn__tertiary--medium").click();
      login.forgetemail("thamkeshivani200@gmail.com");
      cy.get("#reset-password-submit-button").click();
    });
  it("Sign Up", () => {
    cy.contains("Join now").click(); //verify it contain join now or not
    //should usedin implicity
    cy.get("#email-or-phone")
      .should("be.visible")
      .should("be.enabled")
      .type("thamkeshivani100@gmail.com"); //use should to verify visible or not and enabled or not
    cy.get("#password")
      .should("be.visible")
      .should("be.enabled")
      .type("Shiv@123");
    cy.get("#join-form-submit").click();
    cy.get("#first-name").type("shiv");
    cy.get("#last-name").type("patil");
    cy.get("#join-form-submit").click();

    // cy.get('.challenge-dialog__iframe').find('#register-verification-phone-number').type('345678')
    //cy.get('.challenge-dialog__iframe').find('')
    // cy.get('.challenge-dialog__iframe').its('0.contentDocument.body').find('id=register-verification-phone-number')
  });
});
