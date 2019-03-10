// require/exports 是 CommonJS/AMD 中为了解决模块化语法而引入的
// import/export 是ES6引入的新规范，因为浏览器引擎兼容问题，需要在node中用babel将ES6语法编译成ES5语法


// import 对应的导入方式： //也可以分开写多次，导入的时候带花括号
// import Aconst from './a_export.js';
// import square from './a_export.js';
// import diag from './a_export.js';
// // import {Aconst,square,diag} from './a_export.js';
// console.log(Aconst);
// console.log(square(11));



// require('a_export.js');
// require(['a_export'], function (a_export){
// 	console.log('some code here')
// });
// require.config({
// 　  paths: {
// 　  		"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min"
//     }
// });

require(['atest'], function (atest) {
	console.log('some code here')
});

