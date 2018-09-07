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
    //
        //使用new Buffer.alloc()创建缓冲区
        var buf=new Buffer.alloc(1024);
        console.log('准备读取文件');
        fs.open("./dateTime.txt",'r+',function(err,fd){
            if(err){return console.log('文件打开失败')}
            else{console.log('文件打开成功.')}
            //异步截取文件 fs.ftruncate(fd, len, callback)
            fs.ftruncate(fd,10,function(err){
                if(err){return console.log("fs.ftruncate文件截取失败")}
                else{console.log('文件截取成功--fs.ftruncate');}

                fs.read(fd,buf,0,buf.length,0,function(err,bytes){
                    if(err){console.log('fs.red读取文件失败')}else{console.log('fs.read读取文件成功')}
                    if(bytes>0){
                        console.log('这里是fs.read读取文件的内容：'+buf.slice(0,bytes).toString());
                    };
                });
                
                //为异步模式下删除文件的语法：fs.unlink(path,callback)
                fs.unlink("./dateTime.txt",function(err){
                    if(err){console.log('fs.unlink文件删除失败')}
                    else{console.log('fs.unlink文件删除成功')}
                });
            })
        })
        response.end('<hr>访问结束')
    }
}).listen(81);
console.log('请访问 http://localhost:81');