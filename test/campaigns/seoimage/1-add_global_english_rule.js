scenario('Test case n°1 : Add and check "English" rule for all categories', () => {
    scenario('Add  "English" rule for all categories in Back Office', () => {
        scenario('Login in Back Office', client => {
            test('should open the browser', () => client.open());
            test('should login successfully in BO', () => client.signInBO());
        }, 'seoimage_client');
        scenario('Configure "SEO Image" module', client => {
            test('should go to "Installed modules" page', () => client.goToModulesPage());
            test('should search "seoimg" module', () => client.searchModule('seoimg'));
            test('should check "seoimg" module', () => client.getInstalledModulesNumber())
            test('should check "Configure" button', () => client.getModuleButtonName());
            test('should click on "Configure" button', () => client.clickConfigureModuleButton('seoimg'));
            test('should go to "Optimize images" tab', () => client.goToOptimizeImageTab());
            test('should click on "Add rule" button', () => client.clickAddRuleButton());
            test('should set the rule name to "testEN1"', () => client.setRuleName('testEN1'));
            test('should set the rule language to "English"', () => client.setRuleLanguage(2));
            test('should click on "Next" button', () => client.clickNextButton());
            test('should select "All category"', () => client.selectAllCategory());
            test('should click on "Next" button', () => client.clickNextButton());
            test('should set the "Legend" input to "{product_name}{product_reduce_price} EN1"', () => client.setRuleCondition('{product_name}{product_reduce_price} EN1'));
            test('should save the form', () => client.clickSaveButton());
            test('should close the green validation', () => client.closeGreenValidation());
            test('should click on "Apply rule" button', () => client.clickApplyRuleButton(1));
        }, 'seoimage_client');
        scenario('Logout from the Back Office', client => {
            test('should logout successfully from the Back Office', () => client.signOutBO());
        }, 'seoimage_client');
    }, 'seoimage_client');
    scenario('Check the global "English" rule in Front Office', () => {
        scenario('Go to the Front Office', client => {
            test('should open the shop page', () => client.openShop());
        }, 'seoimage_client');
        scenario('Check that the rule exists when the shop is in "English"', client => {
            test('should set the shop language to "English"', () => client.selectLanguageFo(2));
            test('should select "Faded Short Sleeves T-Shirt" product for "Tops" category', () => client.selectSleevesTshirtProduct());
            test('should check the cover image\'s rule for "Faded Short Sleeves T-Shirt" product', () => client.checkRuleInCoverImage('Faded Short Sleeves T-shirt€19.81 EN1'));
            test('should check the thumbnail image\'s rule for "Faded Short Sleeves T-Shirt" product', () => client.checkRuleInThumbnailImage('Faded Short Sleeves T-shirt€19.81 EN1'));
            test('should select "Printed Dress" product for "Casual dresses" category', () => client.selectPrintedDressCasualDressesCategory());
            test('should check the cover image\'s rule for "Printed Dress" product', () => client.checkRuleInCoverImage('Printed Dress€31.19 EN1'));
            test('should check the thumbnail image\'s rule for "Printed Dress" product', () => client.checkRuleInThumbnailImage('Printed Dress€31.19 EN1'));
        }, 'seoimage_client');
        scenario('Check that the rule doesn\'t exist when the shop is in "French"', client => {
            test('should set the shop language to "French"', () => client.selectLanguageFo(1));
            test('should check the cover image\'s rule for "Printed Dress" product', () => client.checkRuleInCoverImage(''));
            test('should check the thumbnail image\'s rule for "Printed Dress" product', () => client.checkRuleInThumbnailImage(''));
            test('should select "Faded Short Sleeves T-Shirt" product for "Tops" category', () => client.selectSleevesTshirtProduct());
            test('should check the cover image\'s rule for "Faded Short Sleeves T-Shirt" product', () => client.checkRuleInCoverImage(''));
            test('should check the thumbnail image\'s rule for "Faded Short Sleeves T-Shirt" product', () => client.checkRuleInThumbnailImage(''));
        }, 'seoimage_client');
    }, 'seoimage_client');
}, 'seoimage_client', true);