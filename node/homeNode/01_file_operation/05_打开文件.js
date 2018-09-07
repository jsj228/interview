
//文件操作需要先引入node自带的fs模块
var fs=require('fs');
//建立node服务先引入http模块
var http=require('http');
//创建nodeHttp服务
http.createServer(function(request,response) {
    //设置响应头
    response.writeHead(200,{"content-type":'text/html;charset=utf-8'});
    if (request.url !== "/favicon.ico") { //清楚第二次访问 //url是node自带的
    //打开文件  fs.open(path, flags[, mode], callback)
        // path - 文件的路径。
        // flags - 文件打开的行为。具体值详见下文。
            // r	以读取模式打开文件。如果文件不存在抛出异常。
            // r+	以读写模式打开文件。如果文件不存在抛出异常。
            // rs	以同步的方式读取文件。
            // rs+	以同步的方式读取和写入文件。
            // w	以写入模式打开文件，如果文件不存在则创建。
            // wx	类似 'w'，但是如果文件路径存在，则文件写入失败。
            // w+	以读写模式打开文件，如果文件不存在则创建。
            // wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
            // a	以追加模式打开文件，如果文件不存在则创建。
            // ax	类似 'a'， 但是如果文件路径存在，则文件追加失败。
            // a+	以读取追加模式打开文件，如果文件不存在则创建。
            // ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。
        // mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
        // callback - 回调函数，带有两个参数如：callback(err, fd)。
        fs.open('./dateTime.txt','rs+',function(err,fd){
            if(!err){console.log('异步打开文件成功。'+fd==3)}
            else{console.log("异步打开文件失败:"+(fd==undefined));}
        })
        response.end('<hr>访问结束')
    }
}).listen(81);
console.log('请访问 http://localhost:81');

