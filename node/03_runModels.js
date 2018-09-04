//自定义模块
var http=require('http');
//导入自定义的模块
var UserModel = require('./userModels');//./03_runModels.js
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    if(request.url!=="favicon.ico"){
        console.log('调用node.js中的函数');
        user = new UserModel('001', 'jsj', '27');
        user.enter();

        response.end()
    }
    
}).listen("81");
console.log('欢迎调node.js函数-->http://127.0.0.1:81');


