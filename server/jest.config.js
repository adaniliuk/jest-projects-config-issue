module.exports = {
  rootDir: '../',
  testMatch: ['<rootDir>/server/**/?(*.)(test).js?(x)'],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50,
    },
  },
  collectCoverageFrom: [
    "server/**/*.{js,jsx}",
    '!server/jest.config.js',
    "!**/node_modules/**",
  ],
};
