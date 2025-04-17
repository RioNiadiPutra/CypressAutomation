import regisc from "../support/regiscommand.cy";
import urlc from "../support/urlcommand.cy"
/// <reference types="cypress" />


describe("Soapleasure registrasi", () => {
    beforeEach(() => {
        urlc.visit();
        cy.wait(5000 + Math.floor(Math.random()*5000)) 
});

it("User ke halaman registration & Mendaftar dengan format yang benar", () => {
    cy.get('[href="/account/register"]').click()
    cy.url().should('include', '/register')
    regisc.fillfirstname('QA');
    regisc.filllastname('Testing');
    regisc.fillemail('qatesting321@gmail.com');
    regisc.fillphone('087888906308');
    regisc.fillpassword('qatesting123');
    regisc.fillconfirmpassword('qatesting123');
    cy.wait(5000 + Math.floor(Math.random()*5000)) 
    regisc.clickregisterbutton();
    cy.pause();
});

it("User ke halaman registration & Mendaftar dengan format email yang salah", () => {
    cy.get('[href="/account/register"]').click()
    cy.url().should('include', '/register')
    regisc.fillfirstname('QA');
    regisc.filllastname('Testing');
    regisc.fillemail('qatesting123#gmail.com');
    regisc.fillphone('087888906308');
    regisc.fillpassword('qatesting123');
    regisc.fillconfirmpassword('qatesting123');
    cy.wait(5000 + Math.floor(Math.random()*5000)) 
    regisc.clickregisterbutton();
    cy.pause();
});

it("User ke halaman registration & Mendaftar dengan confirm password yang tidak sesuai dengan password", () => {
    cy.get('[href="/account/register"]').click()
    cy.url().should('include', '/register')
    regisc.fillfirstname('QA');
    regisc.filllastname('Testing');
    regisc.fillemail('qatesting123@gmail.com');
    regisc.fillphone('087888906308');
    regisc.fillpassword('qatesting123');
    regisc.fillconfirmpassword('qatesting');
    cy.wait(5000 + Math.floor(Math.random()*5000)) 
    regisc.clickregisterbutton();
    cy.get(':nth-child(4) > :nth-child(2) > .form-group > .invalid-feedback').should('have.text', 'Confirm password must match with password')
    cy.pause();
});
    
    afterEach(() => {
    cy.clearCookies();
  })
  
});