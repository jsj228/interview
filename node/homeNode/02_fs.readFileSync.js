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
        //想网页中写入内容
        response.write('使用fs.readFileSync来同步读取文件')
        var data=fs.readFileSync('./00_eventsNode.js');
        if (data){
            console.log('文件内容为：-----' + data.toString())
        }else{console.log('读取文件失败:data==undefined')}
        //结束http请求 //也可以输出内容 response.end('000')
        response.end('<hr>访问结束')
    }
}).listen(81);
console.log('请访问 http://localhost:81');