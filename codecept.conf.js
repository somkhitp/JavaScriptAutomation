exports.config = {
  tests: './tests/*.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: '/',
      browser: 'chrome',
      restart: false,
      keepBrowserState: true,
      desiredCapabilities: {
        chromeOptions: {
        //args: ['--headless', '--disable-gpu', '--no-sandbox']
      },
      }
    }
  },
  include: {
    //I: './steps_file.js',
    poPassion: './pages/poPassion.js',
    poMarkSheet: './pages/poMarkSheet.js',
    poCupcakes: './pages/poCupcakes.js',
    poBoardGame: './pages/poBoardGame.js',
    poRadioToggle: './pages/poRadioToggle.js',

  },
  bootstrap: null,
  mocha: {},
  name: 'techTEST',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone'],
    },

    allure: {
      enabled: true
    }
  }
}