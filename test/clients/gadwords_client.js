const CommonClient = require('./common_client');
var {selector} = require('../globals.webdriverio.js');
var {external} = require('../globals.webdriverio.js');

class GoogleAdwords extends CommonClient {

    checkGoogleAdwordsPromotionalCode() {
        return this.client
            .waitForExist(selector.BO.ModuleGoogleAdwords.voucher_input, 90000)
            .then(() => this.client.getText(selector.BO.ModuleGoogleAdwords.voucher_input))
            .then((voucher) => {
                if (voucher === "") {
                    throw new Error("Google AdWords promotional code is empty");
                }
            });
    }

    clickStartButton() {
        return this.client
            .waitForExist(selector.BO.ModuleGoogleAdwords.gadwords_start_button, 90000)
            .click(selector.BO.ModuleGoogleAdwords.gadwords_start_button, 90000)
            .then(() => this.client.getTabIds())
            .then(ids => this.client.switchTab(ids[1]))
            .pause(3000);
    }

    checkGoogleAdwordsVoucher() {
        return this.client
            .url()
            .then((res) => {
                var current_url = res.value;
                expect(current_url).to.eql("http://www.google.co.uk/ads/get/prestashop75/index.html");
            })
            .waitForExist(external.FO.GoogleAdwords.google_adwords_voucher, 90000)
            .then(() => this.client.isVisible(external.FO.GoogleAdwords.google_adwords_voucher))
            .then((isVisible) => {
                expect(isVisible).to.eql(true)
            });
    }
}

module.exports = GoogleAdwords;

