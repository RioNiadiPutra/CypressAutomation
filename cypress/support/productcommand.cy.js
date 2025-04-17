const searchbutton = 'button > .icon-magnifier';
const product1 = ':nth-child(1) > .right > .name > a';
const category2 = ':nth-child(2) > .category-menu';
const helpcategory2 = '.active > .menu-dropdown--wrapper > .menu-dropdown--container > .menu-dropdown--content > :nth-child(2) > .menu-children--item--children > :nth-child(2) > a';
const buttonadd = '#q_up';
const buttonbuynow = '.primary';
const buttoncheckout1 = '.panel-body > :nth-child(2) > .btn';
const fillemail = ':nth-child(1) > .form-control';
const fillphone = ':nth-child(2) > :nth-child(2) > .form-control';
const checkbox = '#tnc';
const continuebutton = '.row > :nth-child(2) > .btn';

class productc {

    static clicksearchbutton () {
        cy.get(searchbutton).click();
    }

    static clickproduct1 () {
        cy.get(product1).click();
    }

    static clickbuttonadd () {
        cy.get(buttonadd).click();
    }

    static clickbuttonbuynow () {
        cy.get(buttonbuynow).click();
    }

    static clickbuttoncheckout1 () {
        cy.get(buttoncheckout1).click();
    }

    static fillemail(email,{ delay = 200 } = {}){
        cy.get(fillemail).type(email, { delay });
    }

    static fillphone(phone,{ delay = 200 } = {}){
        cy.get(fillphone).type(phone, { delay });
    }
    
    static clickcheckbox () {
        cy.get(checkbox).click();
    }

    static clickcontinuebutton() {
        cy.get(continuebutton).click();
    }

    static clickcategory2() {
        cy.get(category2).click();
    }

    static clickhelpcategory2() {
        cy.get(helpcategory2).click();
    }

}

export default productc;