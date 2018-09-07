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
   //同步写文件 
        //返回值判断是否写入成功  //undefind为写入成功；否则写入失败，服务器崩掉（写入的文件不存在）
        var res=fs.writeFileSync('./file_operation.html','同步写文件','utf8'); 
        if(res==undefined){response.write('文件同步写入成功'+res);}
        else{response.write('文件同步写入失败'+res);}
    // 异步写文件  fs.writeFile(file, data[, options], callback)
        // data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象
        // options - 该参数是一个对象，包含 {encoding, mode, flag}。
        // encoding utf8, mode为 0666 ， flag 为 'w'
        fs.writeFile('./file_operation.html','异步写文件','utf8',function(err){
            //写文件结束后被调用
            // console.log(err) //undefined 表示写入成功
            if(res==undefined){console.log('文件异步写文件成功'+res);}
            else{console.log('文件异步写入失败'+res)}
        });
        response.end('<hr>访问结束')
    }
}).listen(81);
console.log('请访问 http://localhost:81');