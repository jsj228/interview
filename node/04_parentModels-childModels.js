//自定义模块----类中的继承 parent.apply(this,[...])
var http=require('http');
//导入自定义的子模块
var childUserModel = require('./childUserModels');//./03_runModels.js
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    if(request.url!=="favicon.ico"){
        console.log('调用node.js中的函数');
        childUser = new childUserModel('001', 'jsj', '27');
        childUser.enter();//调用父类中的方法
        childUser.fun(response)// 
        response.end()
    }
    
}).listen("81");
console.log('欢迎调node.js函数-->http://127.0.0.1:81');


