var http=require('http');
// 建立http请求
http.createServer(function (request,response) {
    //设置请求头部
    response.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    if(request.url!=="/favicon.ico"){ //清楚第二次访问 //url是node自带的
        console.log('访问中');
        //想网页中写入内容
        response.write('欢迎来到node世界')
        //结束http请求 //也可以输出内容 response.end('000')
        response.end()
    }
}).listen(8000);
console.log('请运行：http://127.0.0.1:8000');