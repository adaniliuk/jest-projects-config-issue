console.log('@@@ ROOT');

module.exports = {
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
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
