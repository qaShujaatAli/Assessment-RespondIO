const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({

  viewportWidth: 1440,
  viewportHeight: 800,
  pageLoadTimeout : 25000,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  includeShadowDom: true,
  
  // reporter: 'cypress-mochawesome-reporter',
  // reporterOptions: {
  //   reportDir: "cypress/report",
  //   html: true,
  //   json: false,
  //   charts: true,
  //   overwrite: false,
  //   reportPageTitle: 'Cypress Inline Reporter',
  //   embeddedScreenshots: true,
  //   inlineAssets: true, //Adds the asserts inline
  // },

  e2e: {
    async setupNodeEvents(on, config) {
      // implement node event listeners here

      // require('cypress-mochawesome-reporter/plugin')(on);
      // on('before:run', async (details) => {
      //   console.log('override before:run');
      //   await beforeRunHook(details);
      // });
      // on('after:run', async () => {
      //   console.log('override after:run');
      //   await afterRunHook();
      // });      

      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
        });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      // Allure Report Plugin
      allureWriter(on, config);

      return config;
    },

    testIsolation: false,
    specPattern: "cypress/e2e/**/*.feature",
  },

});

