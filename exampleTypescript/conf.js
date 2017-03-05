require('ts-node/register');

module.exports.config = {
  framework: 'jasmine',
  directConnect: true,
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ 'spec.ts' ],

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
