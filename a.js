define( function ( require, exports, module ) {
  // 通过 require 引入依赖
  // var $ = require('jquery');
  // 或者通过 module.exports 提供整个接口
  var b = require('./b');

  require('jquery');

  require('./c.css');

  require('handlebars');

  var tpl = require( './h.tpl' );

  var compilerTpl = Handlebars.compile( tpl );

  // console.log(compilerTpl({name:'Hi Henry'}));

  $(document.body).append(compilerTpl({name:'Hi Henry'}));



  // exports.fn = function () {
  //   console.log('I am in module a.js');
  //   b.bbbbfn();
  // }



  // module.exports = {
  // 	afn : service
  // }

});