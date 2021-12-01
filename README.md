Automation codes using CodeceptJS
----------------------------------
**Automation scripts running webdriverIO using CodeceptJS framework. We will also be using Selenium-standalone.**
URL to know more about CodeceptJS: https://codecept.io/

**Required**:

CD to the directory of your folder or where you cloned the repo(example: `\Users\git\/ClonedRepo`)
- Must have latest version of Java.
- Install latest version of NodeJS: https://nodejs.org/en/download/
  - Or use the following command in terminal: `sudo npm install n -g` and then `sudo n latest` to install the latest version on NodeJS

  ***Getting Started***
  **CD to the directory of the cloned Repo**
- Step 1. enter the command `npm init -y` (This creates the package.json file)

- Step 2. enter the command `npm install codeceptjs webdriverio --save -dev` (This creates the node_modules folder, which will be added to gitignore file)

- Step 3. enter the command `npx codeceptjs init` to initialize CodeceptJS (Select `Webdriver` and press enter to everything else)

- Step 4. enter the command `npm i @wdio/selenium-standalone-service --save -dev` (This installs Selenium Webdriver and will automatically run each time a test is begins to execute)


  ***OPTIONAL Helpers***:
  I like to use Allure for my reports(it is already configured in the codecept.conf.js), you can install using npm: `npm install -g allure-commandline --save-dev`


**To Test**:

Currently the tests are running headless. If you want to see a visual of the tests being run, just comment out the args: `['--headless', '--disable-gpu', '--no-sandbox']` located in the `desiredCapabilities` in the `codecept.conf.js` file. Just remember to uncomment before merging your PR to master

Before running the tests, make sure you are in the `root directory` of the repo in the terminal or CLI. For this repo, the root directory is `codeceptAutomation`

To run all tests in one run, use the command `npx codeceptjs run`

To run a single file: `npx codeceptjs run fileNameOfYourTest.js`
Example: `npx codeceptjs run tests/admin/admin_test.js` (All the test files are in the folder `tests` and are organized according to feature)

If you want to see a detailed description that will help with debuggin in the test, add `--verbose` to the end of the command for each test. Example: `npx codeceptjs run --verbose`

If you want to see the steps associated with the test, include `--steps` Example: `npx codeceptjs run --steps`

You can also run each test one at a time using the `--grep` command followed by whichever `@tag` was used in the test file. More below:
Example: `npx codeceptjs run --grep @tea`


You can combine these commands. Example: `npx codeceptjs run --verbose --grep @test --plugins allure`

**For a list of all commands: https://codecept.io/commands/#run** More below:

To run the Tea scenarios, you npx codeceptjs run --grep '@tea'
To run with with all details and report: npx codeceptjs run --grep '@tea' --verbose --plugins allure

CupCake tests:
npx codeceptjs run --grep '@cupcake'

Marksheet Sign-up form test:
npx codeceptjs run --grep '@mark'

Game board test:
npx codeceptjs run --grep '@board'

If you want to have allure report added, simply add `--plugins allure` at the end of the command. Once the tests are complete, just enter allure serve output and a new chrome window will open display the results of the test. (NOTE: in the output folder, I like to delete the contents in the folder before running a new test for the day. Helps declutter the allure reporting). Example: `npx codecepjs run --plugins allure`

  **- One thing to note when running with `--plugins allure`, the report will be saved in the `allureReports` folder. For file storage space purposed, I added this folder to the .gitignore folder, but it will still be saved in your local folder. You have to manually clear the contents in this folder if you don't want the extra clutter. Also the end of test results and any screenshot failures are saved in the `./output` folder. This is also being added to `.gitignore` file. So once again it is your responsibility to clear the contents in that folder if you do not want that extra clutter. I normally clear them out at the end of the week.**
