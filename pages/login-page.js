class LoginPage{

    constructor(){
        this.path = '/login';
        this.input_email = element(by.css('input[name=email]'));
        this.input_password = element(by.css('input[name=password]'));
        this.submit = element(by.css('button[id*=btnLogin]'));
        this.alert = element(by.css('.alert-login'));
    }

    with(email, pass){
        this.input_email.sendKeys(email);
        this.input_password.sendKeys(pass);
        this.submit.click();

    }


}

module.exports = LoginPage;
