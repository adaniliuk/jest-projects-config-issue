console.log('@@@ ROOT');

module.exports = {
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
    "server/**/*.{js,jsx}",
    "!**/jest.config.js",
    "!**/*.test.{js,jsx}",
    "!**/node_modules/**",
  ],
  projects: ['./client', './server'],
};
