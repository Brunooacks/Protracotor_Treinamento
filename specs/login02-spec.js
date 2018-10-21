// escrita bdd

const LoginPage = require('../pages/login-page')
describe("dado que acessei a pagina login", function () {
    const login_page = new LoginPage();

    beforeEach(function () {
        browser.get(login_page.path);
    })

    it('quando a senha ê inválida', function () {

       login_page.with('me@papito.io','123abc');
       expect(login_page.alert.getText()).toEqual('Senha inválida.');
    
    });
    it('quando o usuario nao esta cadastrado', function () {
        
        login_page.with('me@me.com','123abc')
        expect(login_page.alert.getText()).toEqual('Usuário não cadastrado.');
    });

    it('quando o email e incorreto', function () {

        login_page.with('me&me.com', '123abc');
        expect(login_page.alert.getText()).toEqual('Email incorreto ou ausente.');
    });

    it('quando o email e branco', function () {

        login_page.with('','123abc')
        expect(login_page.alert.getText()).toEqual('Email incorreto ou ausente.');
    });

    it('quando a senha e branco', function () {

        login_page.with('teste@testes.com','');
        expect(login_page.alert.getText()).toEqual('Senha ausente.');
    });

    it('quando a senha e muito curta', function () {

        login_page.with('teste@testes.com','123');
        expect(login_page.alert.getText()).toEqual('Senha deve ter no mínimo 6 caracteres.');
    });

})
