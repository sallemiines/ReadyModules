scenario('Check the favicon notification in the Front Office', () => {
    scenario('Enable the "faviconotification" module ', () => {
        scenario('Login in Back Office', client => {
            test('should open the browser', () => client.open());
            test('should login successfully in BO', () => client.signInBO());
        }, 'faviconotification_client');
        scenario('Enable the "faviconotification" module', client => {
            test('should go to "Installed modules" page', () => client.goToModulesPage());
            test('should search "faviconotification" module', () => client.searchModule('faviconotification'));
            test('should check "faviconotification" module', () => client.getInstalledModulesNumber());
            test('should check "Enable" button', () => client.getModuleButtonName());
            test('should click on "Enable" button', () => client.clickEnableModuleButton('faviconotification'));
        }, 'faviconotification_client');
        scenario('Logout from the Back Office', client => {
            test('should logout successfully from the Back Office', () => client.signOutBO());
        }, 'faviconotification_client');
    }, 'faviconotification_client');
    scenario('Check the favicon notification in the Front Office', () => {
        scenario('Go to the Front Office', client => {
            test('should open the shop page', () => client.openShop());
        }, 'faviconotification_client');
        scenario('Get the favicon before adding a product to the cart', client => {
            test('should get the favicon before adding a product to the cart', () => client.getFaviconBeforeAddToCart());
        }, 'faviconotification_client');
        scenario('Add a product to cart', client => {
            test('should select the first product', () => client.selectFirstProduct());
            test('should click on "Add to cart" button', () => client.clickAddToCartButton());
        }, 'faviconotification_client');
        scenario('Find the favicon notification', client => {
            test('should find the favicon notification', () => client.checkFaviconNotification());
        }, 'faviconotification_client');
    }, 'faviconotification_client');
}, 'faviconotification_client', true);