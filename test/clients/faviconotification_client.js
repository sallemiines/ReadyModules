var CommonClient = require('./common_client');
var {selector} = require('../globals.webdriverio.js');
var should = require('should');

class FaviconNotificationModuleClient extends CommonClient {

    getFaviconBeforeAddToCart() {
        return this.client
            .pause(3000)
            .waitForExist(selector.FO.Common.favicon, 90000)
            .then(() => this.client.getAttribute(selector.FO.Common.favicon, "href").then(function (img) {
                global.favicon_empty_cart = img;
            }))
            .pause(3000)
    }

    checkFaviconNotification() {
        return this.client
            .pause(3000)
            .then(() => this.client.getAttribute(selector.FO.Common.favicon, "href").then(function (img) {
                global.favicon_filled_cart = img;
                should(global.favicon_filled_cart).not.be.equal(global.favicon_empty_cart);
            }))
            .pause(3000)
    }
}

module.exports = FaviconNotificationModuleClient;
