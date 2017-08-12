console.log('@@@ CLIENT');

module.exports = {
  rootDir: '../',
  testMatch: ['<rootDir>/client/**/?(*.)(test).js?(x)'],
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
  ],
};
