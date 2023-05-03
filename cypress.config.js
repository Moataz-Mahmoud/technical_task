const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://subscribe.jawwy.tv/eg-en',
    testIsolation: false,
  },

  env: {
    countries: {
      ae: 'UAE',
      ma: 'Morocco',
      ps: 'Palestine',
    },
    packages: {
      currency: 'USD',
      ae: {
        lite_price: 5.4,
        classic_price: 10.9,
        premium_price: 16.3,
      },
      ma: {
        lite_price: 2,
        classic_price: 3.9,
        premium_price: 5.8,
      },
      ps: {
        lite_price: 2.4,
        classic_price: 4.8,
        premium_price: 7.2,
      },
    }
  }
});
