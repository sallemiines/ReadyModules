const CommonClient = require('./common_client');
var {selector} = require('../globals.webdriverio.js');
var should = require('should');

class SeoimageModuleClient extends CommonClient {

    goToOptimizeImageTab() {
        return this.client
            .waitForExist(selector.BO.ModuleConfiguration.optimize_images_tab, 90000)
            .click(selector.BO.ModuleConfiguration.optimize_images_tab)
    }

    clickAddRuleButton() {
        return this.client
            .pause(5000)
            .waitForVisible(selector.BO.ModuleConfiguration.add_new_rule_button, 90000)
            .click(selector.BO.ModuleConfiguration.add_new_rule_button)
    }

    clickEditRuleButton() {
        return this.client
            .waitForExist(selector.BO.ModuleConfiguration.dropdown_button, 90000)
            .click(selector.BO.ModuleConfiguration.dropdown_button)
            .waitForExist(selector.BO.ModuleConfiguration.edit_rule_button, 90000)
            .click(selector.BO.ModuleConfiguration.edit_rule_button)
    }

    setRuleName(ruleName) {
        return this.client
            .pause(2000)
            .waitForExist(selector.BO.ModuleConfiguration.rule_name_input, 90000)
            .setValue(selector.BO.ModuleConfiguration.rule_name_input, ruleName)
    }

    setRuleLanguage(ruleLanguage) {
        return this.client
            .waitForExist(selector.BO.ModuleConfiguration.ruleLanguage_dropdownlist, 90000)
            .click(selector.BO.ModuleConfiguration.ruleLanguage_dropdownlist)
            .waitForExist(selector.BO.ModuleConfiguration.ruleLanguage_select.replace('%s', ruleLanguage), 90000)
            .click(selector.BO.ModuleConfiguration.ruleLanguage_select.replace('%s', ruleLanguage))
    }

    clickNextButton() {
        return this.client
            .waitForExist(selector.BO.ModuleConfiguration.next_step_rule_button, 90000)
            .click(selector.BO.ModuleConfiguration.next_step_rule_button)
    }

    selectACategory() {
        return this.client
            .pause(2000)
            .waitForExist(selector.BO.ModuleConfiguration.category_radio_button, 90000)
            .click(selector.BO.ModuleConfiguration.category_radio_button)
    }

    selectAllCategory() {
        return this.client
            .pause(2000)
            .waitForExist(selector.BO.ModuleConfiguration.all_category_radio_button, 90000)
            .click(selector.BO.ModuleConfiguration.all_category_radio_button)
    }

    selectEveningDressesCategory() {
        return this.client
            .pause(2000)
            .waitForExist(selector.BO.ModuleConfiguration.expan_all_button, 90000)
            .click(selector.BO.ModuleConfiguration.expan_all_button)
            .waitForExist(selector.BO.ModuleConfiguration.evening_dresses_checkbox, 90000)
            .click(selector.BO.ModuleConfiguration.evening_dresses_checkbox)
    }

    selectBlousesCategory() {
        return this.client
            .pause(2000)
            .waitForExist(selector.BO.ModuleConfiguration.expan_all_button, 90000)
            .click(selector.BO.ModuleConfiguration.expan_all_button)
            .waitForExist(selector.BO.ModuleConfiguration.blouses_category_checkbox, 90000)
            .click(selector.BO.ModuleConfiguration.blouses_category_checkbox)
    }

    setRuleCondition(ruleCondition) {
        return this.client
            .waitForExist(selector.BO.ModuleConfiguration.legend_input, 90000)
            .pause(5000)
            .setValue(selector.BO.ModuleConfiguration.legend_input, ruleCondition)
    }

    clickSaveButton() {
        return this.client
            .waitForExist(selector.BO.ModuleConfiguration.save_rule_button, 90000)
            .click(selector.BO.ModuleConfiguration.save_rule_button)
    }

    closeGreenValidation() {
        return this.client
            .pause(2000)
            .waitForExist(selector.BO.ModuleConfiguration.green_validation_notice, 90000)
            .click(selector.BO.ModuleConfiguration.green_validation_notice)
    }

    clickApplyRuleButton(buttonId) {
        return this.client
            .pause(6000)
            .waitForVisible(selector.BO.ModuleConfiguration.apply_rule_button.replace('%s', buttonId), 90000)
            .click(selector.BO.ModuleConfiguration.apply_rule_button.replace('%s', buttonId))
            .pause(5000)
    }

    clickApplyAllRuleButton() {
        return this.client
            .pause(5000)
            .waitForExist(selector.BO.ModuleConfiguration.apply_all_rules_button, 90000)
            .click(selector.BO.ModuleConfiguration.apply_all_rules_button)
            .pause(5000)
    }

    selectLanguageFo(language) {
        return this.client
            .waitForVisible(selector.FO.Common.language_button, 90000)
            .click(selector.FO.Common.language_button)
            .pause(3000)
            .waitForExist(selector.FO.Common.chooseLanguage_button.replace('%s', language), 90000)
            .click(selector.FO.Common.chooseLanguage_button.replace('%s', language))
            .pause(5000)
    }

    selectSleevesTshirtProduct() {
        return this.client
            .waitForExist(selector.FO.HomePage.logo_home_page, 90000)
            .click(selector.FO.HomePage.logo_home_page)
            .waitForExist(selector.FO.HomePage.sleeves_tshirt_image, 90000)
            .click(selector.FO.HomePage.sleeves_tshirt_image)
    }

    selectBlouseProduct(){
        return this.client
            .waitForExist(selector.FO.HomePage.logo_home_page, 90000)
            .click(selector.FO.HomePage.logo_home_page)
            .waitForExist(selector.FO.HomePage.blouse_image, 90000)
            .click(selector.FO.HomePage.blouse_image)
    }

    selectPrintedDressCasualDressesCategory() {
        return this.client
            .waitForExist(selector.FO.HomePage.logo_home_page, 90000)
            .click(selector.FO.HomePage.logo_home_page)
            .waitForExist(selector.FO.HomePage.printed_dress_casual_dresses_category_image, 90000)
            .click(selector.FO.HomePage.printed_dress_casual_dresses_category_image)
    }

    selectPrintedDressEveningDressesCategory() {
        return this.client
            .waitForExist(selector.FO.HomePage.logo_home_page, 90000)
            .click(selector.FO.HomePage.logo_home_page)
            .waitForExist(selector.FO.HomePage.printed_dress_evening_dresses_category_image, 90000)
            .click(selector.FO.HomePage.printed_dress_evening_dresses_category_image)
    }

    checkRuleInCoverImage(alt) {
        return this.client
            .getAttribute(selector.FO.ProductPage.product_image, "alt").then(function (text) {
                should(text).be.equal(alt);
            })
    }

    checkRuleInThumbnailImage(alt) {
        return this.client
            .getAttribute(selector.FO.ProductPage.thumbnail_image, "alt").then(function (text) {
                should(text).be.equal(alt);
            })
    }
}

module.exports = SeoimageModuleClient;