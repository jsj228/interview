var http=require('http');
// 建立http请求
http.createServer().listen(8000,function(){
    console.log('web服务器启动完毕时触发')
})
console.log('请运行：http://127.0.0.1:8000');