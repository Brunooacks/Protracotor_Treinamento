// arquivo de configuracao protractor 

exports.config = {
    directConnect: true,
    framework: 'jasmine2',
    specs: ['specs/tasks-spec.js'],
    baseUrl: 'https://mark7.herokuapp.com',
    onPrepare: function(){
        browser.manage().timeouts().implicitlyWait(10000);
        browser.ignoreSynchronization = true;

         TIMEOUT = 3000;
        var JasmineHtmlReporter = require('protractor-jasmine2-html-reporter');

        jasmine.getEnv().addReporter(new JasmineHtmlReporter({
            savePath: 'reports',
            screenshotsFolder: './shots',
            takeScreenshots: true,
            cleanDestination: false,
            fixedScreenshotName: true
        }));
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStackTrace: true,
                displayErrorMessages: true,
                displayFailed: true,
                displayDuration: true,
                displayPending: true
            },
            summary: {
                displayErrorMessages: true,
                displayStacktrace: true,
                displaySuccessful: true,
                displayFailed: true,
                displayDuration: true,
                displayPending: true
            },

            colors: {
                enable: true
            }
        }));
    },
    capabilities: {
        'browserName': 'chrome'
    }
}