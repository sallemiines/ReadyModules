scenario('Test case n°3 : Add and check "English" rule for a specific category', () => {
    scenario('Add "English" rule for a specific category in Back Office', () => {
        scenario('Login in Back Office', client => {
            test('should open the browser', () => client.open());
            test('should log in successfully in BO', () => client.signInBO());
        }, 'seoimage_client');
        scenario('Configure "SEO Image" module', client => {
            test('should go to "Installed modules" page', () => client.goToModulesPage());
            test('should search "seoimg" module', () => client.searchModule('seoimg'));
            test('should check "seoimg" module', () => client.getInstalledModulesNumber())
            test('should check "Configure" button', () => client.getModuleButtonName());
            test('should click on "Configure" button', () => client.clickConfigureModuleButton('seoimg'));
            test('should go to "Optimize Images" tab', () => client.goToOptimizeImageTab());
            test('should click on "Add rule" button', () => client.clickAddRuleButton());
            test('should set the rule name to "testEN2"', () => client.setRuleName('testEN2'));
            test('should set the rule language to "English"', () => client.setRuleLanguage(2));
            test('should click on "Next" button', () => client.clickNextButton());
            test('should select "All category"', () => client.selectEveningDressesCategory());
            test('should click on "Next" button', () => client.clickNextButton());
            test('should set the "Legend" input to "{product_price_wt}{product_reduce_price_wt}{product_reduction_percent} EN2"', () => client.setRuleCondition('{product_price_wt}{product_reduce_price_wt}{product_reduction_percent} EN2'));
            test('should save the form', () => client.clickSaveButton());
            test('should close the green validation', () => client.closeGreenValidation());
            test('should click on "Apply rule" button', () => client.clickApplyRuleButton(2));
        }, 'seoimage_client');
        scenario('Logout from the Back Office', client => {
            test('should logout successfully from the Back Office', () => client.signOutBO());
        }, 'seoimage_client');
    }, 'seoimage_client');
    scenario('Check the "English" rule for a specific category in Front Office', () => {
        scenario('Go to the Front Office', client => {
            test('should open the shop page', () => client.openShop());
        }, 'seoimage_client');
        scenario('Check that the rule exists when the shop is in "English"', client => {
            test('should set the shop language to "English"', () => client.selectLanguageFo(2));
            test('should select "Printed Dress" product for "Evening Dresses" category', () => client.selectPrintedDressEveningDressesCategory());
            test('should check the cover image\'s rule for "Printed Dress" product', () => client.checkRuleInCoverImage('€50.99€50.99 EN2'));
            test('should check the thumbnail image\'s rule for "Printed Dress" product', () => client.checkRuleInThumbnailImage('€50.99€50.99 EN2'));
            test('should select the "Printed Dress" product for "Casual Dresses" category', () => client.selectPrintedDressCasualDressesCategory());
            test('should check the cover image\'s rule for "Printed Dress" product', () => client.checkRuleInCoverImage('Casual Dresses Edited_EN1'));
            test('should check the the thumbnail image\'s rule for "Printed Dress" product', () => client.checkRuleInThumbnailImage('Casual Dresses Edited_EN1'));
        }, 'seoimage_client');
        scenario('Check that the rule does not exist when the shop is in "French"', client => {
            test('should set the shop language to "French"', () => client.selectLanguageFo(1));
            test('should check the cover image\'s rule for "Printed Dress" product', () => client.checkRuleInCoverImage(''));
            test('should check the the thumbnail image\'s rule for "Printed Dress" product', () => client.checkRuleInThumbnailImage(''));
            test('should select "Printed Dress" product for "Evening Dresses" category', () => client.selectPrintedDressEveningDressesCategory());
            test('should check the cover image\'s rule for "Printed Dress" product', () => client.checkRuleInCoverImage(''));
            test('should check the the thumbnail image\'s rule for "Printed Dress" product', () => client.checkRuleInThumbnailImage(''));
        }, 'seoimage_client');
    }, 'seoimage_client');
}, 'seoimage_client', true);





