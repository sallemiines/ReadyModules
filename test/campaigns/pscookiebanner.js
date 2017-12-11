scenario('Check that the banner is well updated according to the configuration', () => {
    scenario('Login in Back Office', client => {
        test('should open the browser', () => client.open());
        test('should login successfully in BO', () => client.signInBO());
    }, "pscookiebanner_client");
    scenario('Test case 1 : Check the position of the "Cookie banner" in the bottom of the front office', () => {
        scenario('Move the "Cookie banner" to the position bottom', client => {
            test('should go to "Installed modules" page', () => client.goToModulesPage());
            test('should search the module page', () => client.searchModule("pscookiebanner"));
            test('should check that the "pscookiebanner" module is installed', () => client.getInstalledModulesNumber());
            test('should get the name of the first action button of the module', () => client.getModuleButtonName());
            test('should click on "Configure" button', () => client.clickConfigureModuleButton('pscookiebanner'));
            test('should switch the position of the "Cookie banner" to the bottom', () => client.changeBannerPosition("bottom"));
            test('should click on save button', () => client.clickSaveButton());
        }, "pscookiebanner_client");
        scenario('Check the position of the "Cookie banner" in the bottom of the front office', client => {
            test('should open the shop', () => client.clickShopName());
            test('should check that the "Cookie banner" is shown in the bottom position', () => client.checkBannerPosition('bottom'));
        }, "pscookiebanner_client");
    }, "pscookiebanner_client");
    scenario('Test case 2 : Check the position of the "Cookie banner" in the top of the front office', () => {
        scenario('Move the "Cookie banner" to the top position', client => {
            test('should switch the position of the "Cookie banner" to the top', () => client.changeBannerPosition("top"));
            test('should click on save button', () => client.clickSaveButton());
        }, "pscookiebanner_client");
        scenario('Check the position of the "Cookie banner" in the top of the front office', client => {
            test('should go back to the front office', () => client.goBackToFrontOffice());
            test('should check that the "Cookie banner" is shown in the top position', () => client.checkBannerPosition('fixedtop'));
        }, "pscookiebanner_client");
    }, "pscookiebanner_client");
    scenario('Test case 3 : Check the position of the "Cookie banner" in the bottom right of the front office', () => {
        scenario('Move the "Cookie banner" to the bottom right position', client => {
            test('should switch the position of the "Cookie banner" to the bottom right', () => client.changeBannerPosition("bottomright"));
            test('should click on save button', () => client.clickSaveButton());
        }, "pscookiebanner_client");
        scenario('Check the position of the "Cookie banner" in the bottom right of the front office', client => {
            test('should go back to the front office', () => client.goBackToFrontOffice());
            test('should check that the "Cookie banner" is shown in the bottom right position', () => client.checkBannerPosition('bottomright'));
        }, "pscookiebanner_client");
    }, "pscookiebanner_client");
    scenario('Test case 4 : Check the position of the "Cookie banner" in the bottom left of the front office', () => {
        scenario('Move the "Cookie banner" to the bottom left', client => {
            test('should switch the position of the "Cookie banner" to the bottom left', () => client.changeBannerPosition("bottomleft"));
            test('should click on save button', () => client.clickSaveButton());
        }, "pscookiebanner_client");
        scenario('Check the position of the "Cookie banner" in the bottom left of the front office', client => {
            test('should go back to the front office', () => client.goBackToFrontOffice());
            test('should check that the "Cookie banner" is shown in the bottom left position', () => client.checkBannerPosition('bottomleft'));
        }, "pscookiebanner_client");
    }, "pscookiebanner_client");
    scenario('Test case 5 : Edit and check the configuration of the "Cookie banner"', () => {
        scenario('Edit the configuration of the banner in the back office', client => {
            test('should switch the position of the banner to the bottom', () => client.changeBannerPosition());
            test('should set the "Background color" of the banner', () => client.editBackgroundColor("#ff0000"));
            test('should set the "Text" of the banner', () => client.editText());
            test('should set the "Text color" of the banner', () => client.editTextColor("#0000ff"));
            test('should set the "More information link text" of the banner', () => client.editLearnMoreText());
            test('should select "More information CMS page" of the banner', () => client.selectCmsPage());
            test('should set the "Accept button text" of the banner', () => client.editTextButton("Agree"));
            test('should set the "Background button" color', () => client.editBackgroundButtonColor("#8b8b8b"));
            test('should set "On mouse over" color ', () => client.editMouseOverColor("#ff4cc3"));
            test('should set the "Text button" color', () => client.editTextButtonColor("#ffd550"));
            test('should click on save button', () => client.clickSaveButton());
        }, "pscookiebanner_client");
        scenario('Check the configuration of the banner in the front office', client => {
            test('should go back to the front office', () => client.goBackToFrontOffice());
            test('should check that the banner was successfully updated according to the new configuration', () => client.checkBanner());
            test('should click on "View cookies" link', () => client.clickViewCookiesLink());
            test('should check that the "Terms of use" page is shown', () => client.waitForConditionsPage());
        }, "pscookiebanner_client");
    }, "pscookiebanner_client");
    scenario('Logout from Back Office', client => {
        test('should logout', () => client.signOutBO());
    }, "pscookiebanner_client");
}, "pscookiebanner_client", true);