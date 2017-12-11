'use strict';
var common = require('./common.webdriverio');
var path = require('path');
var should = require('should');
var argv = require('minimist')(process.argv.slice(2));

global.date_time = new Date().getTime();
global.URL = argv.URL;
global.email = argv.EMAIL;
global.password = argv.PWD;

global.browser = argv.browser;
global.saucelabs = argv.SAUCELABS;
global._projectdir = path.join(__dirname, '..', '..');
global.product_id = new Date().getTime();
global.new_customer_email = 'pub' + date_time + '@prestashop.com';
global.my_src_image1 = "";
global.my_src_image2 = "";
module.exports = {
    selector: {
        //Back office selectors
        BO: {

            //Common selectors
            Common: {
                menu: '#nav-sidebar',
                orders_settings_button: '#subtab-AdminParentOrders',
                close_validation_button: '.growl-close',
                red_validation_notice: '[class="growl growl-error growl-medium"]',
                green_validation_notice: '[class="growl growl-notice growl-medium"]',
                design_button: '#subtab-AdminParentThemes',
                pages_button: '#subtab-AdminCmsContent',
                shop_name_link: '//*[@id="header_shopname"]'
            },

            //Login page selectors
            LoginPage: {
                login_input: '#email',
                password_input: '#passwd',
                login_button: '[name="submitLogin"]'
            },

            //Modules page selectors
            ModulesPage: {
                modules_subtub: '#subtab-AdminParentModulesSf',
                installed_module_tabs: '(//div[@class="page-head-tabs"]/a)[2]',
                modules_search_results: '.module-search-result-wording',
                modules_search_input: '.pstaggerAddTagInput.module-tags-input',
                modules_search_button: '//*[@id="main-div"]/div[3]/div[2]/div/div[2]/div/div[5]/div/div[1]/div/button',
                module_number_span: '//*[@id="main-div"]/div[3]/div[2]/div/div[2]/div/div[7]/span[1]',
                page_loaded: '.module-search-result-wording',
                module_menu_button: '[class="btn btn-primary-outline  dropdown-toggle"]',
                configure_module_button: '[data-confirm_modal="module-modal-confirm-%module_tech_name-configure"]',
                enable_module_button: '[data-confirm_modal="module-modal-confirm-%module_tech_name-enable"]',
                disable_module_button: '[data-confirm_modal="module-modal-confirm-%module_tech_name-disable"]',
                disable_module_confirm_button: '[class="btn btn-primary uppercase module_action_modal_disable"]',
                actions_module_dropdown: '//*[@class="btn btn-primary-outline  dropdown-toggle"]',
                action_module_installed_button: '//*[@id="modules-list-container-all"]/div[1]/div/div/div[5]/div[2]/form/button',
                action_module_built_button: '//*[@id="modules-list-container-native"]/div/div/div/div[5]/div[2]/form/button'
            },

            //Orders page selectors
            OrdersPage: {
                add_new_order_button: '[id="page-header-desc-order-new_order"]',
                id_input: '//*[@id="form-order"]/div/div[2]/table/thead/tr[2]/th[2]/input',
                search_button: '//*[@id="submitFilterButtonorder"]',
                first_order_select: '//*[@id="form-order"]/div/div[2]/table/tbody/tr/td[2]'
            },

            //Order page selectors
            OrderPage: {
                order_reference_label: '//div[@class="col-lg-7"]/div[1]/div[1]/span[1]',
                order_status_dropdown: '//*[@id="id_order_state_chosen"]/a',
                order_status_from_list: '//*[@id="id_order_state_chosen"]/div/ul/li[text()="%s"]',
                update_status_button: '//*[@id="status"]/form/div/div[2]/button',
                view_invoice_button: '[data-selenium-id="view_invoice"]',
                documents_tab: '//a[@href="#documents"]',
                invoice_number_link: '//tr[td[contains(text(), \'Invoice\')]]//td/a[@title="See the document"]',
                prestashop_security_notification: '//*[@id="content"]/div[6]/div/fieldset'
            },

            //Module page configuration selectors
            ModuleConfiguration: {
                //SEOimage module configuration page
                optimize_images_tab: '//*[@id="modulecontent"]/div[1]/div[1]/a[2]',
                add_new_rule_button: '.process-icon-new',
                rule_name_input: '//*[@id="rule_name"]',
                ruleLanguage_dropdownlist: '//*[@id="step-1"]/div[3]/div/div[1]/button',
                ruleLanguage_select: '//*[@id="step-1"]/div[3]/div/div[1]/div/ul/li[%s]',
                next_step_rule_button: '//*[@id="next-step"]',
                all_category_radio_button: '//*[@id="radios-0"]/label/input',
                category_radio_button: '//*[@id="radios-1"]/label/input',
                legend_input: '//*[@id="legend"]',
                save_rule_button: '//*[@id="btn-save"]',
                green_validation_notice: '/html/body/div[6]/div/div/div[1]/div/div[2]/button',
                apply_rule_button: '//*[@id="table-metas-1"]/tbody/tr[%s]/td[7]/div/div/a',
                apply_second_rule_button: '//*[@id="table-metas-1"]/tbody/tr[2]/td[7]/div/div/a',
                apply_all_rules_button: '//*[@id="table-metas-1"]/a[1]',
                dropdown_button: '//*[@id="table-metas-1"]/tbody/tr[1]/td[7]/div/div/button',
                edit_rule_button: '//*[@id="table-metas-1"]/tbody/tr[1]/td[7]/div/div/ul/li[1]/a',
                expan_all_button: '//*[@id="expandall"]',
                evening_dresses_checkbox: '//*[@id="category_10"]/a/i[1]',
                blouses_category_checkbox: '//*[@id="category_7"]/a/i[1]',

                //Prestafraud module configuration page
                trust_account_on_radio_button: '//*[@id="trust_account_on"]',
                email_input: '//*[@name="email"]',
                agree_checkbox: '//*[@id="terms_and_conditions"]',
                create_account_button: '//*[@id="submitCreateAccount"]',
                trust_account_off_radio_button: '//*[@id="trust_account_off"]',
                save_button: '//*[@id="prestashop_trust"]/center/input'
            },

            //Pages page selectors
            PagesPage: {
                pages_search_input: '//*[@id="table-cms"]/thead/tr[2]/th[4]/input',
                search_button: '//*[@id="submitFilterButtoncms"]',
                edit_page_button: '//*[@id="tr_1_3_2"]/td[7]/div/div/a'

            },

            //Page selectors
            PagePage: {
                title_input: '//*[@id="name_1"]',
                language_dropdownlist: '//*[@id="fieldset_0"]/div[2]/div[2]/div/div/div[2]/div[2]/button',
                french_language_button: '//*[@id="fieldset_0"]/div[2]/div[2]/div/div/div[2]/div[2]/ul/li[1]/a',
                save_button: '//*[@id="cms_form_submit_btn"]'
            },

            //Google Adwords module configuration page
            ModuleGoogleAdwords: {
                voucher_input: '//pre[@id="adwords_voucher"]',
                gadwords_start_button: '//*[@id="content"]/div[5]/div[2]/div/div/div/p/a'
            },
            
            //Cookie banner module configuration page
            ModulePageCookieBanner: {
                banner_position_top: '//*[@class="radio-banner-position"]/ul/li[1]',
                banner_position_bottom: '//*[@class="radio-banner-position"]/ul/li[2]',
                banner_position_bottomright: '//*[@class="radio-banner-position"]/ul/li[3]',
                banner_position_bottomleft: '//*[@class="radio-banner-position"]/ul/li[4]',
                save_button: '//*[@id="submitCookieBannerModule"]',
                background_color_input: '//*[@id="color_0"]',
                color_text_input: '//*[@id="color_3"]',
                text_textarea: 'textarea.CB-TEXT',
                text_learn_more_input: 'input.CB-LINK-TEXT',
                cms_page_select: '//*[@id="CB-CMS"]',
                accept_button_text_input: 'input.CB-BUTTON-TEXT',
                background_button_color_input: '//*[@id="color_2"]',
                on_mouse_over_input: '//*[@id="color_4"]',
                button_text_color_input: '//*[@id="color_5"]'
            }
        },
        FO: {
            //Common selectors
            Common: {
                language_button: '//*[@id="_desktop_language_selector"]/div/div/button',
                chooseLanguage_button: '//*[@id="_desktop_language_selector"]/div/div/ul/li[%s]/a',
                favicon: '/html/head/link[2]'
            },

            //Home page selectors
            HomePage: {
                logo_home_page: '//*[@id="_desktop_logo"]/a/img',
                sleeves_tshirt_image: '//*[@id="content"]/section/div/article[1]/div/a/img',
                blouse_image: '//*[@id="content"]/section/div/article[2]/div/a/img',
                printed_dress_casual_dresses_category_image: '//*[@id="content"]/section/div/article[3]/div/a/img',
                printed_dress_evening_dresses_category_image: '//*[@id="content"]/section/div/article[4]/div/a/img',
                first_product_home_page: '.thumbnail.product-thumbnail',
                sign_in_button: '//div[@class="user-info"]//span[@class="hidden-sm-down"]',
                cart_button: '//div[@id="_desktop_cart"]//a'
            },

            //Login page selectors
            LoginPage: {
                login_input: '//input[@class="form-control"]',
                password_input: '//input[@class="form-control js-child-focus js-visible-password"]',
                login_button: '//button[@class="btn btn-primary"]',
                information_block_button: '//*[@id="identity-link"]/span/i'
            },

            //Product page selectors
            ProductPage: {
                product_name: '//*[@id="main"]/div[1]/div[2]/h1',
                product_price: '//*[@id="main"]/div[1]/div[2]/div[1]/div[1]/div/span',
                product_image: '//*[@id="product-modal"]/div/div/div/figure/img',
                thumbnail_image: '//*[@id="content"]/div[1]/div[2]/ul/li[1]/img',
                category_name: '//*[@id="wrapper"]/div/nav/ol/li[4]/a/span',
                women_category_select: '//*[@id="wrapper"]/div/nav/ol/li[2]/a',
                add_to_cart_button: '.btn.btn-primary.add-to-cart',
                continue_shopping_button: '[class="btn btn-secondary"]'
            },

            //Cart page selectors
            CartPage: {
                proceed_to_checkout_button: '//div[@class="checkout cart-detailed-actions card-block"]//a[@class="btn btn-primary"]'
            },

            //Checkout page selectors
            CheckoutPage: {
                PersonalInformationSection: {
                    header: '[id="checkout-personal-information-step"]',
                    order_as_a_guest_button: '//section[@id="checkout-personal-information-step"]//a[@href="#checkout-guest-form"]',
                    sign_in_button: '//section[@id="checkout-personal-information-step"]//a[@href="#checkout-login-form"]',
                    social_title_mr_radio_button: '//input[@name="id_gender" and @value="1"]',
                    social_title_mrs_radio_button: '//input[@name="id_gender" and @value="2"]',
                    first_name_input: '[name="firstname"]',
                    last_name_input: '[name="lastname"]',
                    email_guest_input: '//div[@id="checkout-guest-form"]//input[@name="email"]',
                    customer_privacy_checkbox: '[name="customer_privacy"]',
                    continue_guest_personal_information_button: '//div[@id="checkout-guest-form"]//button[@name="continue"]'
                },
                AddressesSection: {
                    header: '[id="checkout-addresses-step"]',
                    address_input: '[name="address1"]',
                    postcode_input: '[name="postcode"]',
                    city_input: '[name="city"]',
                    country_checkbox: '//select[@name="id_country"]',
                    continue_addresses_button: '[name="confirm-addresses"]'
                },
                DeliverySection: {
                    header: '[id="checkout-delivery-step"]',
                    continue_shipping_button: '[name="confirmDeliveryOption"]'
                },
                PaymentSection: {
                    header: '[id="checkout-payment-step"]',
                    pay_by_check_radio_button: '[id="payment-option-1"]',
                    pay_by_bankwire_radio_button: '[id="payment-option-2"]',
                    pay_by_cash_on_delivery_radio_button: '[id="payment-option-3"]',
                    terms_of_service_checkbox: '[name="conditions_to_approve[terms-and-conditions]"]',
                    order_with_an_obligation_to_pay_button: '[class="btn btn-primary center-block"]'
                }
            },

            //Order Confirmation page selectors
            OrderConfirmationPage: {
                order_reference_label: '//*[@id="order-details"]/ul/li[1]'
            },

            //cookie banner selectors
            CookieBanner: {
                configuration_banner:'//body/div[1]',
                configuration_banner_body:'//body/div[1]/div[2]',
                configuration_banner_body_link:'//body/div[1]/div[2]/a',
                configuration_banner_body_button:'//body/div[1]/div[2]/div/button',
                page_title: '//*[@id="main"]/header/h1'
            }
        },

        shouldExist: function (err, existing) {
            should(err).be.not.defined;
            should(existing).be.true;
        }
    },
    //External site selectors
    external: {
        //FO
        FO: {
            GoogleAdwords: {
                google_adwords_voucher: '//*[@id="right-content"]',
            }
        },
        shouldExist: function (err, existing) {
            should(err).be.not.defined;
            should(existing).be.true;
        }
    }
};