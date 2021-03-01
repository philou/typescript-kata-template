const config = require('./jest.config');
 
module.exports = {
  ...config,
  reporters: [
    'default',
    ['@wishtack/jest-tcr', {
      revertBlacklistPattern: /spec\.ts$/
    }]
  ]
};