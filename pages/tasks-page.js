class TasksPage {

    constructor(){
        this.EC = protractor.ExpectedConditions;
        this.board = $('#task-board');
        this.newTaskButton = element(by.css("#insert-button"));
        this.inputName = element(by.css("input[name=title]"));
        this.addButton = element(by.css("#form-submit-button"));
        this.alert = element(by.css(".alert-warn"));

    }

    addTask(task) {
        this.inputName.clear();
        this.inputName.sendKeys(task.name);
        this.addButton.click();
    }

    getItem(name){
         browser.wait(this.EC.presenceOf(this.board), TIMEOUT);
         return  element(by.cssContainingText("tr", name));
    }
}

module.exports = TasksPage;