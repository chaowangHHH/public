define(function(require, exports, module) {
  
  var service1 = function () {
  	console.log('I am in module b.js');
  }
  exports.bbbbfn = service1;
  // module.exports = {
  // 	fn : service1
  // }

});