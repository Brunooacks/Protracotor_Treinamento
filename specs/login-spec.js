describe("Login", function () {

    beforeEach(function () {
        browser.get('/login');

    })

    it('Login com senha incorreta', function () {

        element(by.id('login_email')).sendKeys('me@papito.io');
        element(by.css('input[name=password]')).sendKeys('123abc');
        element(by.css('button[id*=btnLogin]')).click();
        var alert = element(by.css('.alert-login'))
        expect(alert.getText()).toEqual('Senha inválida.');
    });
    it('login com o usuario nao cadastrado ', function () {

        element(by.id('login_email')).sendKeys('me@me.com');
        element(by.css('input[name=password]')).sendKeys('123abc');
        element(by.css('button[id*=btnLogin]')).click();
        var alert = element(by.css('.alert-login'))
        expect(alert.getText()).toEqual('Usuário não cadastrado.');
    });

    it('login com o email incorreto', function () {

        element(by.id('login_email')).sendKeys('me&me.com');
        element(by.css('input[name=password]')).sendKeys('123abc');
        element(by.css('button[id*=btnLogin]')).click();
        var alert = element(by.css('.alert-login'))
        expect(alert.getText()).toEqual('Email incorreto ou ausente.');
    });

    it('login sem preencher o email', function () {

        element(by.id('login_email')).sendKeys('me&me.com');
        element(by.css('input[name=password]')).sendKeys('123abc');
        element(by.css('button[id*=btnLogin]')).click();
        var alert = element(by.css('.alert-login'))
        expect(alert.getText()).toEqual('Email incorreto ou ausente.');
    });

    it('login sem preencher a senha ', function () {

        element(by.id('login_email')).sendKeys('teste@testes.com');
        element(by.css('input[name=password]')).sendKeys('');
        element(by.css('button[id*=btnLogin]')).click();
        var alert = element(by.css('.alert-login'))
        expect(alert.getText()).toEqual('Senha ausente.');
    });

    it('login com senha muito curta', function () {

        element(by.id('login_email')).sendKeys('teste@testes.com');
        element(by.css('input[name=password]')).sendKeys('123');
        element(by.css('button[id*=btnLogin]')).click();
        var alert = element(by.css('.alert-login'))
        expect(alert.getText()).toEqual('Senha deve ter no mínimo 6 caracteres.');
    });

})
