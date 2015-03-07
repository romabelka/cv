var Promise = require('./Promise');
module.exports =  function() {
  var promise = new Promise();

  this.resolve = function() {
      promise.__setState({
          status: 'success',
          value: arguments
      })
  };
  this.reject = function(err) {
      promise.__setState({
          status: 'error',
          value: [err]
      })
  };
  this.promise = function() {return promise}

};