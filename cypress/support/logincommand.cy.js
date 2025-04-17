const Loginbutton1 = '[href="/account/login"] > u';
const inputemail = '#input-email';
const inputpassword = '#input-password';
const Loginbutton2 = '.btn';

class loginc {

    static clickloginbutton1 () {
        cy.get(Loginbutton1).click();
    }

    static clickloginbutton2 () {
        cy.get(Loginbutton2).click();
    }

    static fillpassword(password,{ delay = 200 } = {}){
        cy.get(inputpassword).type(password, { delay });
    }

    static fillemail(email,{ delay = 200 } = {}){
        cy.get(inputemail).type(email, { delay });
    }


}

export default loginc;