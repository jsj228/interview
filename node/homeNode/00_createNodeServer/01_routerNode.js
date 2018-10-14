var http=require('http');
var url=require('url'); //引入node自带的url
//引入自定义的路由模块
// var router=require('./nodeRouter');
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    if(request.url!=="favicon.ico"){
        //去掉/杠并相对路径
        var UrlName=url.parse(request.url).pathname.replace(/\//g,'');
        console.log(url.parse(request.url).pathname);
        response.end()
    }
    
}).listen("81");
console.log('欢迎调node.js函数-->http://127.0.0.1:81');


