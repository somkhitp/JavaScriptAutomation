# techTEST
Automation Challenge

******Automation scripts running webdriverIO using CodeceptJS framework. We will also be using Selenium-standalone.******

**Required**:

CD to the directory of your folder(example: C:\Users\random\Desktop/AutomationTests)
- Must have latest version of Java.
- Install latest version of NodeJS: https://nodejs.org/en/download/
- Install CodeceptJS (website can be found here for more information): https://codecept.io/
  - Install in terminal enter: npm install codeceptjs
  
CD to the directory on where you cloned the repo and initialize CodeceptJS (e.g. C:\Users\random\Desktop/AutomationTests):
  - Type: npx codeceptjs init
  - Answer questions. Agree on defaults, when asked to select helpers choose Webdriver

Now install Selenium-Standalone.
  - Make sure you have selenium downloaded https://www.selenium.dev/downloads/ if you do not have it on your machine..
  - in terminal, type: npm i @wdio/selenium-standalone-service --save-dev
  - Any configurations should already be set in the codecept.conf.js file.

  If running with browser:
  Install chromedriver: https://chromedriver.chromium.org/downloads
  (Optional Firefox) Gekodriver: https://firefox-source-docs.mozilla.org/testing/geckodriver/

  Make sure Selenium and drivers are correctly placed in the environment variable PATH in your directory. More info on how to install it here: https://zwbetz.com/download-chromedriver-binary-and-add-to-your-path-for-automated-functional-testing/


  **OPTIONAL Helpers**:
  I like to use Allure for my reports(it is already configured in the codecept.conf.js), you can install using npm: npm install -g allure-commandline --save-dev


**To test**:

Currently the tests are running headless. If you want to see a visual of the tests being run, just comment out the args: ['--headless', '--disable-gpu', '--no-sandbox'] located in the desiredCapabilities in the codecept.conf.js file

Before running the tests, make sure you are in the root directory of the reppo in the terminal or CLI.

To run all tests in one run, use the command npx codeceptjs run

If you want to see a detailed description in the test, add --verbose to the end of the command for each test.

If you want to have allure report added, simply add --plugins allure at the end of the command. Once the tests are complete, just enter allure serve output and a new chrome window will open display the results of the test. (NOTE: in the output folder, I like to delete the contents in the folder before running a new test for the day. Helps declutter the allure reporting).

You can also run each test one at a time using the --grep command followed by whichever @tag was used in the test file. More below:

To run the Tea scenarios, you npx codeceptjs run --grep '@tea'
To run with with all details and report: npx codeceptjs run --grep '@tea' --verbose --plugins allure

CupCake tests:
npx codeceptjs run --grep '@cupcake'

Marksheet Sign-up form test:
npx codeceptjs run --grep '@mark'

Game board test:
npx codeceptjs run --grep '@board'

**NOTE**: If runningh in separate terminal, you do not need to use '' characters in front and back of the tag. This is only applies whren running the test in terminal within the IDE.

**Conclusion**:
I could of went with the generic style of code writing as seen in the codecept.io site, but I wanted to make the code look more cleaner by using diferent folder structures. This helps me know if there are any duplicated codes. This helps out in the long run when running multiple tests of the same path but for different features. I can simply just reuse a pageobject instead of duplcating the same code. I did find there were a few scenarios that had me trying to create the shortest locator to use, which was the time consuming part, but overall I had a lot of fun doing this challenge. Day 1 took me a while to ramp up on the requirements of programs needed and fiel structures. The best feeling in the world is seeing an automation script run successfully per user acceptance!!!
