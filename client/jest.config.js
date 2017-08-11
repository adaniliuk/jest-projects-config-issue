module.exports = {
  rootDir: '../',
  testMatch: ['<rootDir>/client/**/?(*.)(test).js?(x)'],
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  collectCoverageFrom: [
    "client/**/*.{js,jsx}",
    '!client/jest.config.js',
    "!**/node_modules/**",
  ],
};
