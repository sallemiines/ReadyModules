const CommonClient = require('./common_client');
var {selector} = require('../globals.webdriverio.js');
const rgbHex = require('rgb-hex');

class CookieBanner extends CommonClient {

    goBackToFrontOffice() {
        return this.client
            .getTabIds()
            .then(ids => this.client.switchTab(ids[1]))
            .url('https://' + URL)
    }

    checkBannerPosition(position) {
        return this.client
            .waitForExist(selector.FO.CookieBanner.configuration_banner, 90000)
            .then(() => this.client.getAttribute(selector.FO.CookieBanner.configuration_banner, 'class'))
            .then((classElement) => {
                var checkPosition = classElement.split('eupopup-container eupopup-container-').pop().split(' eupopup-color-default').shift();
                expect(checkPosition).to.eql(position);
            })
            .getTabIds()
            .then(ids => this.client.switchTab(ids[0]))
            .pause(5000);
    }

    changeBannerPosition(position) {
        switch (position) {
            case "top": {
                return this.client
                    .pause(3000)
                    .waitForExist(selector.BO.ModulePageCookieBanner.banner_position_top, 90000)
                    .click(selector.BO.ModulePageCookieBanner.banner_position_top);
            }
            case "bottomright": {
                return this.client
                    .pause(3000)
                    .waitForExist(selector.BO.ModulePageCookieBanner.banner_position_bottomright, 90000)
                    .click(selector.BO.ModulePageCookieBanner.banner_position_bottomright);
            }
            case "bottomleft": {
                return this.client
                    .pause(3000)
                    .waitForExist(selector.BO.ModulePageCookieBanner.banner_position_bottomleft, 90000)
                    .click(selector.BO.ModulePageCookieBanner.banner_position_bottomleft);
            }
            default: {
                return this.client
                    .pause(3000)
                    .waitForExist(selector.BO.ModulePageCookieBanner.banner_position_bottom, 90000)
                    .click(selector.BO.ModulePageCookieBanner.banner_position_bottom);
            }
        }
    }

    editBackgroundColor(color) {
        return this.client
            .waitForExist(selector.BO.ModulePageCookieBanner.background_color_input, 90000)
            .setValue(selector.BO.ModulePageCookieBanner.background_color_input, color)
            .pause(5000);
    }

    editText() {
        return this.client
            .waitForExist(selector.BO.ModulePageCookieBanner.text_textarea, 90000)
            .setValue(selector.BO.ModulePageCookieBanner.text_textarea, "This site uses cookies. Using your site means your agree to our use of cookies. We have published a new cookies policy, which you should need to find out more about the cookies we use.")
            .pause(5000);
    }

    editTextColor(color) {
        return this.client
            .waitForExist(selector.BO.ModulePageCookieBanner.color_text_input, 90000)
            .setValue(selector.BO.ModulePageCookieBanner.color_text_input, color)
            .pause(5000);
    }

    editLearnMoreText() {
        return this.client
            .waitForExist(selector.BO.ModulePageCookieBanner.text_learn_more_input, 90000)
            .setValue(selector.BO.ModulePageCookieBanner.text_learn_more_input, "View cookies.")
            .pause(5000);
    }

    clickSaveButton() {
        return this.client
            .waitForExist(selector.BO.ModulePageCookieBanner.save_button, 90000)
            .click(selector.BO.ModulePageCookieBanner.save_button)
            .pause(5000);
    }

    selectCmsPage() {
        return this.client
            .waitForExist(selector.BO.ModulePageCookieBanner.cms_page_select, 90000)
            .selectByValue(selector.BO.ModulePageCookieBanner.cms_page_select, 3);
    }

    editTextButton(text_button) {
        return this.client
            .waitForExist(selector.BO.ModulePageCookieBanner.accept_button_text_input, 90000)
            .setValue(selector.BO.ModulePageCookieBanner.accept_button_text_input, text_button)
            .pause(5000);
    }

    editBackgroundButtonColor(color) {
        return this.client
            .waitForExist(selector.BO.ModulePageCookieBanner.background_button_color_input, 90000)
            .setValue(selector.BO.ModulePageCookieBanner.background_button_color_input, color);
    }

    editMouseOverColor(color) {
        return this.client
            .waitForExist(selector.BO.ModulePageCookieBanner.on_mouse_over_input, 90000)
            .setValue(selector.BO.ModulePageCookieBanner.on_mouse_over_input, color);
    }

    editTextButtonColor(color) {
        return this.client
            .waitForExist(selector.BO.ModulePageCookieBanner.button_text_color_input, 90000)
            .setValue(selector.BO.ModulePageCookieBanner.button_text_color_input, color);
    }

    clickViewCookiesLink() {
        return this.client
            .waitForExist(selector.FO.CookieBanner.configuration_banner_body_link, 90000)
            .click(selector.FO.CookieBanner.configuration_banner_body_link)
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[2]))
    }

    waitForConditionsPage() {
        return this.client
            .waitForExist(selector.FO.CookieBanner.page_title, 90000)
            .getTabIds()
            .then(ids => this.client.switchTab(ids[0]))
    }

    checkBanner() {
        return this.client
            //check background color
            .waitForExist(selector.FO.CookieBanner.configuration_banner, 90000)
            .then(() => this.client.getAttribute(selector.FO.CookieBanner.configuration_banner, 'style'))
            .then((style) => {
                var checkColor = '#' + (rgbHex(style.split('background-color: ').pop().split('; display: block;').shift())).substr(0, 6);
                expect(checkColor).to.eql("#ff0000");
            })
            //check the text
            .waitForExist(selector.FO.CookieBanner.configuration_banner_body, 90000)
            .then(() => this.client.getText(selector.FO.CookieBanner.configuration_banner_body))
            .then((text) => {
                expect(text.split(' View cookies.Agree')[0]).to.eql("This site uses cookies. Using your site means your agree to our use of cookies. We have published a new cookies policy, which you should need to find out more about the cookies we use.");
            })
            //check text color
            .waitForExist(selector.FO.CookieBanner.configuration_banner_body, 90000)
            .then(() => this.client.getAttribute(selector.FO.CookieBanner.configuration_banner_body, 'style'))
            .then((style) => {
                var checkColor = '#' + (rgbHex(style.split('color: ').pop().split('; font-size').shift())).substr(0, 6);
                expect(checkColor).to.eql("#0000ff");
            })
            //check text link
            .moveToObject(selector.FO.CookieBanner.configuration_banner_body_link, 90000)
            .then(() => this.client.getText(selector.FO.CookieBanner.configuration_banner_body_link))
            .then((text) => {
                expect(text).to.eql("View cookies.")
            })
            //check text button
            .waitForExist(selector.FO.CookieBanner.configuration_banner_body_button, 90000)
            .then(() => this.client.getText(selector.FO.CookieBanner.configuration_banner_body_button))
            .then((text) => {
                expect(text).to.eql("Agree")
            })
            //check background button color
            .waitForExist(selector.FO.CookieBanner.configuration_banner_body_button, 90000)
            .then(() => this.client.getAttribute(selector.FO.CookieBanner.configuration_banner_body_button, 'style'))
            .then((style) => {
                var checkColor = '#' + (rgbHex(style.split('background-color: ').pop().split('; border').shift())).substr(0, 6);
                expect(checkColor).to.eql("#8b8b8b");
            })
            //check on mouse over button color
            .moveToObject(selector.FO.CookieBanner.configuration_banner_body_button, 90000)
            .then(() => this.client.getAttribute(selector.FO.CookieBanner.configuration_banner_body_button, 'style'))
            .then((style) => {
                var checkColor = '#' + (rgbHex(style.split('background-color: ').pop().split('; border').shift())).substr(0, 6);
                expect(checkColor).to.eql("#ff4cc3");
            })
            //check text button color
            .waitForExist(selector.FO.CookieBanner.configuration_banner_body_button, 90000)
            .then(() => this.client.getAttribute(selector.FO.CookieBanner.configuration_banner_body_button, 'style'))
            .then((style) => {
                var checkColor = '#' + (rgbHex(style.split('color: ').pop().split('; font-size').shift())).substr(0, 6);
                expect(checkColor).to.eql("#ffd550");
            })
    }
}

module.exports = CookieBanner;

