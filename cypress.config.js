const {
  defineConfig
} = require("cypress");

// promisified fs module
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`);

  if (!fs.existsSync(pathToConfigFile)) { //if does not exist
    console.log("No custom file found."); //print
    return {};
  }

  return fs.readJson(pathToConfigFile) //the file exist
}

module.exports = defineConfig({
  projectId: '3xtvx4',
  defaultCommandTimeout: 10000,
  //chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // accept a configFile value or use development by default
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)


    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    //excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },

    retries: {
        runMode: 0,
        openMode: 0
    },

    // global variables can import to other files
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "http://www.webdriveruniversity.com" //can use in multiple sites
    }
  },
});