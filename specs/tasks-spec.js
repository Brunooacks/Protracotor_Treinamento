const LoginPage = require('../pages/login-page');
const TasksPage = require('../pages/tasks-page');


describe('Tarefas', () => {

    const login_page = new LoginPage();
    const task_page = new TasksPage();

    var task = { name: null };

    describe('dado que eu estou logado', () => {

        beforeAll(() => {
            login_page.go();
            login_page.with("testesb@teste.com", "123456");
            task_page.newTaskButton.click();
        })

        // it('quando cadastro com o nome muito curto', () => {
        //     task.name = "Estudar";
        //     task_page.addTask(task);
        //     expect(
        //         task_page.alert.getText()
        //     ).toEqual('10 caracteres é o mínimo permitido.');
        // })
        // it('quando não informo o nome', () => {
        //     task.name = "";
        //     task_page.addTask(task);
        //     expect(
        //         task_page.alert.getText()
        //     ).toEqual('Nome é obrigatório.');
        // })

        it('quando cadastro uma tarefa', () => {
            task.name = "Estude mais sobre Node JS";
            task_page.addTask(task);
            expect(
                task_page.getItem(task.name).getText()
            ).toContain("Em andamento");
        })
    })
})