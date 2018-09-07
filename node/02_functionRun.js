var http=require('http');
//2、调用外js文件中的 函数 
// var otherFun2 = require('./other.js');//只能导出一个函数
var otherFunMore = require('./other.js');
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    if(request.url!=="favicon.ico"){
        console.log('调用node.js中的函数');
        response.write('调用node.js中的函数');
        //开始调用本服务器中的自定义的函数
        // fun1(response);
        //开始调用服务器外的js文件中的函数
        // otherFun2(response);
        // otherFunMore.fun2(response);
        // otherFunMore.fun3(response);
        // otherFunMore.fun4(response);
        // otherFunMore.fun5(response);
        for(var i=2;i<=5;i++){
            otherFunMore['fun'+i](response);
        }
        response.end()
    }
    
}).listen("81");
console.log('欢迎调node.js函数-->http://127.0.0.1:81');

// 1、调用本服务中自定义的函数
function fun1(res){
    console.log('fun1')
    res.write('这里是：调用本服务中自定义的函数')
}


