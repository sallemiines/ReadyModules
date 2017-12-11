scenario('Test case n°6 : Apply all rules', () => {
    scenario('Add a specific "French" rule then apply all rules', () => {
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
            test('should set the rule name to "testFR3"', () => client.setRuleName('testFR3'));
            test('should set the rule language to "French"', () => client.setRuleLanguage(1));
            test('should click on "Next" button', () => client.clickNextButton());
            test('should click on "Select a category" button', () => client.selectACategory());
            test('should select "Blouses" category', () => client.selectBlousesCategory());
            test('should click on "Next" button', () => client.clickNextButton());
            test('should set the "Legend" input to "{product_reduction_percent} FR3"', () => client.setRuleCondition('{product_reduction_percent} FR3'));
            test('should save the form', () => client.clickSaveButton());
            test('should close the green validation', () => client.closeGreenValidation());
            test('should click on "Apply all rules" button', () => client.clickApplyAllRuleButton(1));
        }, 'seoimage_client');
        scenario('Logout from the Back Office', client => {
            test('should log out successfully from the Back Office', () => client.signOutBO());
        }, 'seoimage_client');
    }, 'seoimage_client');
    scenario('Check all rules in Front Office', () => {
        scenario('Go to the Front Office', client => {
            test('should open the shop page', () => client.openShop());
        }, 'seoimage_client');
        scenario('Check that all rules exist when the shop is in "English"', client => {
            test('should set the shop language to "English"', () => client.selectLanguageFo(2));
            test('should select "Printed Dress" product for "Evening Dresses" category', () => client.selectPrintedDressEveningDressesCategory());
            test('should check the cover image\'s rule for "Printed Dress" product', () => client.checkRuleInCoverImage('Evening Dresses Edited_EN1'));
            test('should check the thumbnail image\'s rule for "Printed Dress" product', () => client.checkRuleInThumbnailImage('Evening Dresses Edited_EN1'));
            test('should select "Faded Short Sleeves T-Shirt" product for "Tops" category', () => client.selectSleevesTshirtProduct());
            test('should check the cover image\'s rule for "Faded Short Sleeves T-Shirt" product', () => client.checkRuleInCoverImage('T-shirts Edited_EN1'));
            test('should check the thumbnail image\'s rule for "Faded Short Sleeves T-Shirt" product', () => client.checkRuleInThumbnailImage('T-shirts Edited_EN1'));
        }, 'seoimage_client');
        scenario('Check that all rules exist when the shop is in "French"', client => {
            test('should set the shop language to "French"', () => client.selectLanguageFo(1));
            test('should check the cover image\'s rule for "Faded Short Sleeves T-Shirt" product', () => client.checkRuleInCoverImage('T-shirt délavé à manches courtesdemo_1 FR2'));
            test('should check the thumbnail image\'s rule for "Faded Short Sleeves T-Shirt" product', () => client.checkRuleInThumbnailImage('T-shirt délavé à manches courtesdemo_1 FR2'));
            test('should select "Printed Dress" product for "Evening Dresses" category', () => client.selectPrintedDressEveningDressesCategory());
            test('should check the cover image\'s rule for "Printed Dress" product', () => client.checkRuleInCoverImage('€50.99€50.99 FR1'));
            test('should check the thumbnail image\'s rule for "Printed Dress" product', () => client.checkRuleInThumbnailImage('€50.99€50.99 FR1'));
            test('should select "Blouse" product for "Blouses" category', () => client.selectBlouseProduct());
            test('should check the cover image\'s rule for "Blouse" product', () => client.checkRuleInCoverImage('Blousedemo_2 FR2'));
            test('should check the thumbnail image\'s rule for "Blouse" product', () => client.checkRuleInThumbnailImage('Blousedemo_2 FR2'));
        }, 'seoimage_client');
    }, 'seoimage_client');
}, 'seoimage_client', true);





