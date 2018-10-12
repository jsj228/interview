//文件操作需要先引入node自带的fs模块
var fs=require('fs');
//建立node服务先引入http模块
var http=require('http');
//创建nodeHttp服务
http.createServer(function(request,response) {
    //设置响应头
    response.writeHead(200,{"content-type":'text/html;charset=utf-8'});
    if (request.url !== "/favicon.ico") { //清楚第二次访问 //url是node自带的
        console.log('访问中');
   //将相对路径转换成 绝对路径---异步 fs.realpath(path,callback)
        var path="";
        fs.realpath("./file_operation.html",function(err,path) {
            if (err){return console.log('如果相对文件的路径错误时:相对路径转换绝对就会路径失败')}
            console.log(err);//null
            console.log(path)
        })
        response.end('<hr>访问结束')
    }
}).listen(81);
console.log('请访问 http://localhost:81');