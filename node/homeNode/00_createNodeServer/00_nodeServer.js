var http = require('http');
// 建立http请求
http.createServer(function (req, res) {
    //设置http响应头部  // HTTP 状态值: 200 : OK   // 内容类型: text/html 或 text/plain
    res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });
    if (req.url !== "/favicon.ico") { //清楚第二次访问 //url是node自带的
        console.log('访问中');
        //配置简单的路由    
        if(!(req.url.search(/(^\/)[index]+/g))){
            //向前端页面中写入内容 
            res.write('欢迎来到：' + req.url +'<br>127.0.0.1:8000/index.html <br> 127.0.0.1:8000/index');
        }else{
            //向前端页面中写入内容
            res.write('Sorry 404 \n'+req.url+'页面不存在');
        }
        console.log(req.method);//获取前端页面向后台请求的方式：get /post/
        //结束请求 //也可以像前端发送内容 response.end('000')
        res.end('请求结束'); 
    }
}).listen(8000,function () { 
    console.log('web服务器监听端口时触发')
});
console.log('请运行：http://127.0.0.1:8000');