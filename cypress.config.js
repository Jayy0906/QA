const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    video: true, // Enable video recording
    videoUploadOnPasses: false, // Disable video upload for passed tests (optional)
    videosFolder: 'cypress/videos', // Folder where videos will be saved
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
