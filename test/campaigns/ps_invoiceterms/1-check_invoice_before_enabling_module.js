scenario('Test Case n°1 : Check invoices when the module is disabled', () => {
    scenario('Disable the module', () => {
        scenario('Login in Back Office', client => {
            test('should open the browser', () => client.open());
            test('should log in successfully in BO', () => client.signInBO());
        }, 'ps_invoiceterms_client');
        scenario('Disable the "ps_invoiceterms" module', client => {
            test('should go to "Installed modules" page', () => client.goToModulesPage());
            test('should search the "ps_invoiceterms" module page', () => client.searchModule('ps_invoiceterms'));
            test('should check "ps_invoiceterms" module', () => client.getInstalledModulesNumber());
            test('should check "Disable" button', () => client.getModuleButtonName());
            test('should click on "Disable" button', () => client.clickDisableModuleButton('ps_invoiceterms'));
        }, 'ps_invoiceterms_client');
        scenario('Logout from the Back Office', client => {
            test('should log out successfully from the Back Office', () => client.signOutBO());
        }, 'ps_invoiceterms_client');
    }, 'ps_invoiceterms_client');
    scenario('Add product to cart', client => {
        test('should access to Front Office successfully', () => client.openShop());
        test('should select the first product', () => client.selectFirstProduct());
        test('should click on "Add to cart" button', () => client.clickAddToCartButton());
        test('should click on "Continue shopping" button', () => client.clickContinueShoppingButton());
    }, 'ps_invoiceterms_client');
    scenario('Checkout order', client => {
        test('should go to "Shopping cart" page', () => client.goToCartPage());
        test('should click on "Proceed to checkout" button', () => client.clickProceedCheckoutButton());
        test('should fill the personal information form', () => client.fillPersonnelInformationForm());
        test('should fill the addresses form', () => client.fillAddressForm());
        test('should fill the shipping form', () => client.fillShippingForm());
        test('should fill the payment form', () => client.fillPaymentForm());
        test('should get the "order id"', () => client.getOrderId());
    }, 'ps_invoiceterms_client');
    scenario('Check that the terms doesn\'t exist in the invoice', client => {
        test('should login successfully in BO', () => client.signInBO());
        test('should go to "Orders" page', () => client.goToOrdersPage());
        test('should search the created order', () => client.searchOrderById());
        test('should go to the order page', () => client.goToOrderPage());
        test('should change the order status to "Payment accepted"', () => client.changeOrderStatus('Payment accepted'));
        test('should download the invoice', () => client.downloadInvoice());
        test('should get the invoice file name', () => client.getInvoiceFileName());
        test('should check that the terms doesn\'t exist in the invoice', () => client.checkTermsOnInvoice('-1', 'Conditions d\'utilisation'));
    }, 'ps_invoiceterms_client');
}, 'ps_invoiceterms_client', true);