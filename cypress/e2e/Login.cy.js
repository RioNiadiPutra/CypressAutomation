import loginc from "../support/logincommand.cy";
import urlc from "../support/urlcommand.cy"
/// <reference types="cypress" />

describe("Soapleasure Login", () => {
    beforeEach(() => {
        urlc.visit();
        cy.wait(5000 + Math.floor(Math.random()*5000)) 
});

it("User ke halaman Login & memakai akun yang sudah terdaftar", () => {
    loginc.clickloginbutton1();
    cy.url().should('include', '/login')
    loginc.fillemail('romc01yoor@gmail.com');
    loginc.fillpassword('QAtesting123!');
    loginc.clickloginbutton2();
    cy.wait(5000 + Math.floor(Math.random()*5000))
    cy.pause();
});

it("User ke halaman Login & meng-input data email tidak dengan format", () => {
    loginc.clickloginbutton1();
    cy.url().should('include', '/login')
    loginc.fillemail('qatesting#gmail.com');
    loginc.fillpassword('QAtesting123!');
    loginc.clickloginbutton2();
    cy.get('.invalid-feedback').should('have.text', 'Please enter a valid email address')
    cy.wait(5000 + Math.floor(Math.random()*5000))
    cy.pause();
});

it("User ke halaman Login & menginput password yang salah", () => {
    loginc.clickloginbutton1();
    cy.url().should('include', '/login')
    loginc.fillemail('romc01yoor@gmail.com');
    loginc.fillpassword('invalidpassword');
    loginc.clickloginbutton2();
    cy.get('.alert').should('have.text', 'Invalid email address or password')
    cy.wait(5000 + Math.floor(Math.random()*5000))
    cy.pause();
});

afterEach(() => {
    cy.clearCookies();
  })
  
});