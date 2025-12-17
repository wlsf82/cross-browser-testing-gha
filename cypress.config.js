const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    experimentalWebKitSupport: true,
    fixturesFolder: false,
    supportFile: false,
  },
})
