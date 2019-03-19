//require.js加载的模块，采用AMD规范。也就是说，模块必须按照AMD的规定来写。
// 具体来说，就是模块必须采用特定的define()函数来定义
define(function (){
　var add = function (x,y){　return x+y;};
　return {add: add};
});