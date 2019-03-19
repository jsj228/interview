// require.js加载的模块，采用AMD规范。也就是说，模块必须按照AMD的规定来写。
// 具体来说，就是模块必须采用特定的define()函数来定义

var rs = require(['atest'], function (atest){ //先加载atest.js这个文件，再执行回掉 函数
　　alert(atest.add(1,1));
 	function foo(){
		alert(atest.add(2,1));
　　}
	alert(foo());
　　return {foo:foo};
});
