console.log('@@@ SERVER');

module.exports = {
  rootDir: '../',
  testMatch: ['<rootDir>/server/**/?(*.)(test).js?(x)'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  collectCoverageFrom: [
    "server/**/*.{js,jsx}",
    "!**/node_modules/**",
  ],
};
