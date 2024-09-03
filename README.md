# QA Assignment - Cypress Test Automation

This repository contains Cypress test automation, covering functional tests, login tests, UI tests, and form validation tests. It also includes setup instructions and test reporting configuration.

## 1. Setup Cypress

### Installation

1. **Node.js:** Ensure Node.js is installed on your machine. Download it from [nodejs.org](https://nodejs.org/).

2. **Go to Project Directory:**
   ```bash
   cd QA_Assignment
   
3. **Install Cypress:**
   ```bash
   npm install cypress --save-dev
   
4. **Run Or Open Cypress:**
   ```bash
   npx cypress open

## 2. Generate Test Report

### Installation

1. **Install mochawesome:**
   ```bash
   npm install cypress-mochawesome-reporter --save-dev
   
2. **Update Cypress Configuration( File: `cypress.config.js` ):**
   ```bash
   const { defineConfig } = require('cypress');
   module.exports = defineConfig({
     reporter: 'cypress-mochawesome-reporter',
     e2e: {
       setupNodeEvents(on, config) {
         require('cypress-mochawesome-reporter/plugin')(on);
        },
       },
     });

3. **Run Tests With Reports:**
   ```bash
   npx cypress run

## 3. Mostly you will need below 2 commands ( Try First )

1. **Run Or Open Cypress:**
   ```bash
   npx cypress open

2. **Run Tests With Reports:**
   ```bash
   npx cypress run
