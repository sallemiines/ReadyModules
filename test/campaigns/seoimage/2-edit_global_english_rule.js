scenario('Test case n°2 : Edit and check the "English" rule for all categories', () => {
    scenario('Edit the "English" rule for all categories in Back Office', () => {
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
            test('should go to "Optimize Images" tab', () => client.goToOptimizeImageTab());
            test('should click on "Edit rule" button', () => client.clickEditRuleButton());
            test('should click on "Next" button', () => client.clickNextButton());
            test('should click on "Next" button', () => client.clickNextButton());
            test('should set the "Legend" input to "{default_cat_name} Edited_EN1"', () => client.setRuleCondition('{default_cat_name} Edited_EN1'));
            test('should save the form', () => client.clickSaveButton());
            test('should close the green validation', () => client.closeGreenValidation());
            test('should click on "Apply rule" button', () => client.clickApplyRuleButton(1));
        }, 'seoimage_client');
        scenario('Logout from the Back Office', client => {
            test('should log out successfully from the Back Office', () => client.signOutBO());
        }, 'seoimage_client');
    }, 'seoimage_client');
    scenario('Check the edited "English" rule in Front Office', () => {
        scenario('Go to the Front Office', client => {
            test('should open the shop page', () => client.openShop());
        }, 'seoimage_client');
        scenario('Check that the rule exists when the shop is in "English"', client => {
            test('should set the shop language to "English"', () => client.selectLanguageFo(2));
            test('should select "Faded Short Sleeves T-Shirt" product for "Tops" category', () => client.selectSleevesTshirtProduct());
            test('should check the cover image\'s rule for "Faded Short Sleeves T-Shirt" product', () => client.checkRuleInCoverImage('T-shirts Edited_EN1'));
            test('should check the thumbnail image\'s rule for "Faded Short Sleeves T-Shirt" product', () => client.checkRuleInThumbnailImage('T-shirts Edited_EN1'));
            test('should select "Printed Dress" product for "Casual dresses" category', () => client.selectPrintedDressCasualDressesCategory());
            test('should check the cover image\'s rule for "Printed Dress" product', () => client.checkRuleInCoverImage('Casual Dresses Edited_EN1'));
            test('should check the thumbnail image\'s rule for "Printed Dress" product', () => client.checkRuleInThumbnailImage('Casual Dresses Edited_EN1'));
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

