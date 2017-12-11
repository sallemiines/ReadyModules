var CommonClient = require('./common_client');
var {selector} = require('../globals.webdriverio.js');
var should = require('should');

class PrestafraudModuleClient extends CommonClient {

    setEmailField() {
        return this.client
            .click(selector.BO.ModuleConfiguration.trust_account_on_radio_button)
            .waitForExist(selector.BO.ModuleConfiguration.email_input, 90000)
            .setValue(selector.BO.ModuleConfiguration.email_input, "demo@prestashop.com")
    }

    checkAgreeTermsCheckbox() {
        return this.client
            .waitForExist(selector.BO.ModuleConfiguration.agree_checkbox, 90000)
            .click(selector.BO.ModuleConfiguration.agree_checkbox)
    }

    clickCreateAccountButton() {
        return this.client
            .waitForExist(selector.BO.ModuleConfiguration.create_account_button, 90000)
            .click(selector.BO.ModuleConfiguration.create_account_button)
    }

    checkContentSecondForm() {
        return this.client
            .waitForExist(selector.BO.ModuleConfiguration.trust_account_off_radio_button, 90000)
            .getAttribute(selector.BO.ModuleConfiguration.trust_account_off_radio_button, "value").then(function (text) {
                should(text).be.equal("1");
            })

            .waitForExist(selector.BO.ModuleConfiguration.trust_account_off_radio_button, 90000)
            .getAttribute(selector.BO.ModuleConfiguration.trust_account_off_radio_button, "value").then(function (text) {
                should(text).not.be.equal("");
            })

            .waitForExist(selector.BO.ModuleConfiguration.trust_account_off_radio_button, 90000)
            .getAttribute(selector.BO.ModuleConfiguration.trust_account_off_radio_button, "value").then(function (text) {
                should(text).not.be.equal("");
            })
    }

    clickSaveButton() {
        return this.client
            .waitForExist(selector.BO.ModuleConfiguration.save_button, 90000)
            .click(selector.BO.ModuleConfiguration.save_button)
    }

    checkSecurityNotification(textInput) {
        return this.client
            .scroll(selector.BO.OrderPage.prestashop_security_notification)
            .getText(selector.BO.OrderPage.prestashop_security_notification).then(function (text) {
                should(text).be.equal(textInput)
            })
    }
}

module.exports = PrestafraudModuleClient;
