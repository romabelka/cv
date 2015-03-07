var Promise = function() {
   this.__successCallbacks = [];
   this.__errorCallbacks = [];
   this.__value = undefined;
   this.__state = 'pending';

   //state = pending, success, error
   this.then = function(successHandler, errorHandler) {
       this.done(successHandler);
       this.fail(errorHandler);
       return this
   };
   this.done = function(callback) {
       if (callback && typeof callback === 'function') {
           this.__successCallbacks.push(callback);
           if (this.__status === 'success') {
               callback.apply(this, this.__value)
           }
       }
       return this
   };
   this.fail = function(callback) {
       if (callback && typeof callback === 'function') {
           this.__errorCallbacks.push(callback);
           if (this.__status === 'error') {
               callback.apply(this, this.__value)
           }
       }
       return this
   };
   this.getState = function() {return this.__state};
   this.__setState = function(args) {
       if (this.__state !== 'pending') {return this}
       this.__state = args.status;
       this.__value = args.value;
       this['__' + this.__state + 'Callbacks'].forEach(function(callback) {
           callback.apply(this, this.__value)
       }.bind(this));
       console.log('---', this);
       return this
   }
};

module.exports = Promise;