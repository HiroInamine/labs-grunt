var first = require('./firstModule');

var secondModule = function() {

  console.log('secondModule');
  first();
}

module.exports = secondModule;
