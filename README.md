# techTEST
Automation Challenge

******Automation scripts running webdriverIO using CodeceptJS framework. We will also be using Selenium-standalone.******

**Required**:
- Must have latest version of Java.
- Install latest version of NodeJS: https://nodejs.org/en/download/
- Install CodeceptJS: https://codecept.io/
  - in terminal enter: npm install codeceptjs
  
CD to the directory on where you cloned the repo and initialize CodeceptJS (e.g. desktop):
  - Type: npx codeceptjs init
  - Answer questions. Agree on defaults, when asked to select helpers choose Webdriver

Now install Selenium-Standalone.
  - in terminal, type: npm i @wdio/selenium-standalone-service --save-dev
  - Any configurations should already be set in the codecept.conf.js file.
