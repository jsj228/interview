var http = require('http');
// 建立http请求
http.createServer(function (req, res) {
    //设置请求头部
    res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });
    if (req.url !== "/favicon.ico") { //清楚第二次访问 //url是node自带的
        console.log('访问中');
        //向前端页面中写入内容
        res.write('欢迎来到node世界');
        res.write(req.url);//获取请求路径
        console.log(req.method);//获取前端页面向后台请求的方式：get /post/
        //结束http请求 //也可以输出内容 response.end('000')
        res.end();
    }
}).listen(8000,function () {
    console.log('web服务器监听端口时触发')
});
console.log('请运行：http://127.0.0.1:8000');