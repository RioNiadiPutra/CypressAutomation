import urlc from "../support/urlcommand.cy"
import productc from "../support/productcommand.cy";
/// <reference types="cypress" />

describe("Soapleasure Product", () => {
    beforeEach(() => {
        urlc.visit();
        cy.wait(5000 + Math.floor(Math.random()*5000)) 
});

it("User mencari barang melalui search button & melakukan checkout as Guest", () => {
    productc.clicksearchbutton();
    cy.wait(5000 + Math.floor(Math.random()*5000)) 
    productc.clickproduct1();
    cy.wait(5000 + Math.floor(Math.random()*5000)) 
    productc.clickbuttonadd();
    cy.wait(5000 + Math.floor(Math.random()*5000)) 
    productc.clickbuttonbuynow();
    //Assertion
    cy.get('.react-toast-notifications__toast__content').should('have.text' , 'Product has been added to your cart');
    cy.wait(5000 + Math.floor(Math.random()*5000)) 
    productc.clickbuttoncheckout1();
    cy.wait(5000 + Math.floor(Math.random()*5000)) 
    productc.fillemail('testingqa123@gmail.com');
    productc.fillphone('087888908508');
    productc.clickcheckbox();
    cy.wait(5000 + Math.floor(Math.random()*5000)) 
    productc.clickcontinuebutton();
    cy.pause();
});

it("User mencari barang melalui menu category homepage", () => {
    productc.clickcategory2();
    cy.wait(5000 + Math.floor(Math.random()*5000)) 
    productc.clickhelpcategory2();
    cy.get('.h4').should('have.text', 'Oops, no products found here')
    cy.pause();
});

it("User mencari barang melalui homepage & melakukan checkout", () => {
    cy.get(':nth-child(1) > .image > a > img').scrollIntoView({duration: 2000}).click();
    cy.wait(5000 + Math.floor(Math.random()*5000)) 
    productc.clickbuttonadd();
    cy.wait(5000 + Math.floor(Math.random()*5000)) 
    productc.clickbuttonbuynow();
    //Assertion
    cy.get('.react-toast-notifications__toast__content').should('have.text' , 'Product has been added to your cart');
    cy.wait(5000 + Math.floor(Math.random()*5000)) 
    productc.clickbuttoncheckout1();
    cy.wait(5000 + Math.floor(Math.random()*5000)) 
    productc.fillemail('testingqa123@gmail.com');
    productc.fillphone('087888908508');
    productc.clickcheckbox();
    cy.wait(5000 + Math.floor(Math.random()*5000)) 
    productc.clickcontinuebutton();
    cy.pause();
});

    afterEach(() => {
    cy.clearCookies();
  })
  
});