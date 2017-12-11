scenario('Test case n°4 : Add and check "French" rule for a specific category', () => {
    scenario('Add "French" rule for a specific category in Back Office', () => {
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
            test('should set the rule name to "testFR1"', () => client.setRuleName('testFR1'));
            test('should set the rule language to "French"', () => client.setRuleLanguage(1));
            test('should click on "Next" button', () => client.clickNextButton());
            test('should click on "Select a category" button', () => client.selectACategory());
            test('should select "Evening Dresses" category', () => client.selectEveningDressesCategory());
            test('should click on "Next" button', () => client.clickNextButton());
            test('should set the "Legend" input to "{product_price_wt}{product_reduce_price_wt}{product_reduction_percent} FR1"', () => client.setRuleCondition('{product_price_wt}{product_reduce_price_wt}{product_reduction_percent} FR1'));
            test('should save the form', () => client.clickSaveButton());
            test('should close the green validation', () => client.closeGreenValidation());
            test('should click on "Apply rule" button', () => client.clickApplyRuleButton(3));
        }, 'seoimage_client');
        scenario('Logout from the Back Office', client => {
            test('should logout successfully from the Back Office', () => client.signOutBO());
        }, 'seoimage_client');
    }, 'seoimage_client');
    scenario('Check the "French" rule for a specific category in Front Office', () => {
        scenario('Go to the Front Office', client => {
            test('should open the shop page', () => client.openShop());
        }, 'seoimage_client');
        scenario('Check that the "English" rule still exist when the shop is in "English"', client => {
            test('should set the shop language to "English"', () => client.selectLanguageFo(2));
            test('should select "Printed Dress" product for "Evening dresses" category', () => client.selectPrintedDressEveningDressesCategory());
            test('should check the cover image\'s rule for the "Printed Dress" product', () => client.checkRuleInCoverImage('€50.99€50.99 EN2'));
            test('should check the thumbnail image\'s rule for the "Printed Dress" product', () => client.checkRuleInThumbnailImage('€50.99€50.99 EN2'));
            test('should select "Faded Short Sleeves T-Shirt" product for "Tops" category', () => client.selectSleevesTshirtProduct());
            test('should check the cover image\'s rule for "Faded Short Sleeves T-Shirt" product', () => client.checkRuleInCoverImage('T-shirts Edited_EN1'));
            test('should check the thumbnail image\'s rule for "Faded Short Sleeves T-Shirt" product', () => client.checkRuleInThumbnailImage('T-shirts Edited_EN1'));
        }, 'seoimage_client');
        scenario('Check that the rule exists when the shop is in "French"', client => {
            test('should set the shop language to "French"', () => client.selectLanguageFo(1));
            test('should check the cover image\'s rule for "Faded Short Sleeves T-Shirt" product', () => client.checkRuleInCoverImage(''));
            test('should check the thumbnail image\'s rule for "Faded Short Sleeves T-Shirt" product', () => client.checkRuleInThumbnailImage(''));
            test('should select "Printed Dress" product for "Evening dresses" category', () => client.selectPrintedDressEveningDressesCategory());
            test('should check the cover image\'s rule for the "Printed Dress" product', () => client.checkRuleInCoverImage('€50.99€50.99 FR1'));
            test('should check the thumbnail image\'s rule for the "Printed Dress" product', () => client.checkRuleInThumbnailImage('€50.99€50.99 FR1'));
        }, 'seoimage_client');
    }, 'seoimage_client');
}, 'seoimage_client');
