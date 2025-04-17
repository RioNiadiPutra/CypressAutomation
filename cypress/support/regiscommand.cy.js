const Firstname = '#firstName';
const Lastname = '#lastName';
const EmailAddress = '#email';
const Phone = '#phone';
const Password = '#password';
const ConfirmPassword = '#confirmPassword';
const Registerbutton = '.button';

class regisc {
    static fillfirstname(firstname, { delay = 200 } = {}){
        cy.get(Firstname).type(firstname, { delay });
    }

    static fillpassword(password,{ delay = 200 } = {}){
        cy.get(Password).type(password, { delay });
    }

    static fillconfirmpassword(confirmpassword, { delay = 200 } = {}){
        cy.get(ConfirmPassword).type(confirmpassword, { delay });
    }

    static clickregisterbutton () {
        cy.get(Registerbutton).click();
    }

    static fillphone(phone, { delay = 200 } = {}){
        cy.get(Phone).type(phone, { delay });
    }

    static filllastname(lastname, { delay = 200 } = {}){
        cy.get(Lastname).type(lastname, { delay });
    }

    static fillemail(email, { delay = 200 } = {}){
        cy.get(EmailAddress).type(email, { delay });
    }
}

export default regisc;