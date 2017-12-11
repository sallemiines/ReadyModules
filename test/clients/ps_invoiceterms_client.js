var CommonClient = require('./common_client');
var {selector} = require('../globals.webdriverio.js');
var should = require('should');

class PsInvoiceTermsModuleClient extends CommonClient {

    downloadInvoice() {
        return this.client
            .waitForExist(selector.BO.OrderPage.documents_tab, 90000)
            .click(selector.BO.OrderPage.documents_tab)
            .waitForExist(selector.BO.OrderPage.invoice_number_link, 90000)
            .click(selector.BO.OrderPage.invoice_number_link)
            .pause(4000)
    }

    getInvoiceFileName() {
        return this.client
            .getText(selector.BO.OrderPage.invoice_number_link).then(function (text) {
                global.invoiceFileName = text.replace("#", "");
            })
    }

    checkTermsOnInvoice(test, text) {
        return this.client
            .pause(2000)
        pdfUtil.pdfToText(global.downloadsFolderPath + global.invoiceFileName + '.pdf', function (err, data) {
            if (err) throw(err);
            global.textPosition = data.indexOf(text);
            if (global.textPosition == test) {
                done();
            } else {
                done(new Error("The terms of use exist in the invoice although the invoiceterms module is disabled!"));
            }
        })
    }

    goToPagesPage() {
        return this.client
            .moveToObject(selector.BO.Common.design_button)
            .waitForExist(selector.BO.Common.pages_button, 90000)
            .click(selector.BO.Common.pages_button)
    }

    selectTermsOfUsePage() {
        return this.client
            .setValue(selector.BO.PagesPage.pages_search_input, "Terms and conditions of use")
            .click(selector.BO.PagesPage.search_button)
            .click(selector.BO.PagesPage.edit_page_button)
    }

    changePageLanguage() {
        return this.client
            .waitForExist(selector.BO.PagePage.language_dropdownlist, 90000)
            .click(selector.BO.PagePage.language_dropdownlist)
            .waitForExist(selector.BO.PagePage.french_language_button, 90000)
            .click(selector.BO.PagePage.french_language_button)
    }

    editTermsOfUse() {
        return this.client
            .waitForExist(selector.BO.PagePage.title_input, 90000)
            .setValue(selector.BO.PagePage.title_input, "Régles d'utilisation")
            .scroll(selector.BO.PagePage.save_button)
            .click(selector.BO.PagePage.save_button)
    }
}

module.exports = PsInvoiceTermsModuleClient;