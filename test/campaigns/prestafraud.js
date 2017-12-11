scenario('Check the existence of the security notification after and before configuring the module', () => {
    scenario('Login in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should login successfully in BO', () => client.signInBO());
    }, 'prestafraud_client');
    scenario('Check the existence of the security notification on the first order', client => {
        test('should go to "Orders" page', () => client.goToOrdersPage());
        test('should click on "View" button of the first order', () => client.goToOrderPage());
        test('should verify that the security notification "This order has not been sent to PrestaShop Security" exists', () => client.checkSecurityNotification('PrestaShop Security\nThis order has not been sent to PrestaShop Security.'));
    }, 'prestafraud_client');
    scenario('Configure "prestafraud" module', client => {
        test('should go to "Installed modules" page', () => client.goToModulesPage());
        test('should search "prestafraud" module', ()=> client.searchModule('prestafraud'));
        test('should check that "prestafraud" module is installed', ()=> client.getInstalledModulesNumber());
        test('should get the name of the first action button of the module', () => client.getModuleButtonName());
        test('should click on "Configure" button', () => client.clickConfigureModuleButton('prestafraud'));
        test('should set "Your email" field to "demo@prestashop.com"', () => client.setEmailField());
        test('should check "I agree with the terms of prestashop..." checkbox', () => client.checkAgreeTermsCheckbox());
        test('should click on "Create account" button', () => client.clickCreateAccountButton());
        test('should verify the content of the next form', () => client.checkContentSecondForm());
        test('should click on "Save" button', () => client.clickSaveButton());
    }, 'prestafraud_client');
    scenario('Logout from the Back Office', client => {
        test('should logout successfully from the Back Office', () => client.signOutBO());
    }, 'prestafraud_client');
    scenario('Go to the Front Office', client => {
        test('should open the shop page', () => client.openShop());
    }, 'prestafraud_client');
    scenario('Add a product to cart', client => {
        test('should select the first product', () => client.selectFirstProduct());
        test('should click on "Add to cart" button', () => client.clickAddToCartButton());
        test('should click on "Continue shopping" button', () => client.clickContinueShoppingButton());
    }, 'prestafraud_client');
    scenario('Checkout order', client => {
        test('should go to "Shopping cart" page', () => client.goToCartPage());
        test('should click on "Proceed to checkout" button of the cart page', () => client.clickProceedCheckoutButton());
        test('should fill the personal information form', () => client.fillPersonnelInformationForm());
        test('should fill the addresses form', () => client.fillAddressForm());
        test('should fill the shipping form', () => client.fillShippingForm());
        test('should fill the payment form', () => client.fillPaymentForm());
        test('should get the "order id"', () => client.getOrderId());
    }, 'prestafraud_client');
    scenario('Verify that the security notification is changed in the order page', client => {
        test('should login successfully in BO', () => client.signInBO());
        test('should go to "Orders" page', () => client.goToOrdersPage());
        test('should search the order created', () => client.searchOrderById());
        test('should click on "View" button of the order searched', () => client.goToOrderPage());
        test('should verify that the security notification is changed to "This order is low risk.Report this order as a fraud to PrestaShop"', () => client.checkSecurityNotification('PrestaShop Security\nScoring: 0.1\nComment: Cannot check real location (this is a local IP address). This order is low risk.\nReport this order as a fraud to PrestaShop'));
    }, 'prestafraud_client');
}, 'prestafraud_client', true);
