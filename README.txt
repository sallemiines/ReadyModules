Information: To use the following test suites, you need to install PrestaShop in **English** with setting country to **France** (or you may change some assertions like the separator “,” or “.”, “€” or “$” or “£” or …).
You need to create a user in Back Office with **SuperAdmin** rights

#	Prerequisites

To use nodeJS tests, you need to install:
-	NodeJS
-	Npm
-	Webdrivers for Chrome and Firefox

Required modules to install using npm are:
-	json
-	minimist
-	mocha
-	node-uuid
-	parsed-url
-	q
-	req
-	should
-	webdriverio
-	window
-	selenium-standalone (make sure you'll install a compatible version with your browser version)

#	Run tests

-	First, you need to start selenium-standalone
```
selenium-standalone start
```
> **Note:**
> If you are using it for the first time you need to install it before starting it :
> selenium-standalone install

-	Go to the folder test/campaigns and launch the test campaign that you want by executing the following line:
        ```
        mocha test_campaign_file --URL=localhost/presto --EMAIL=demo@prestashop.com --PWD=prestashop_demo
        ```
Where :

-	**URL**: Front office URL of your prestashop website (without the “http://”)
-	**EMAIL**: Email of the user with SuperAdmin rights
-	**PWD**: Password of the user with SuperAdmin rights
