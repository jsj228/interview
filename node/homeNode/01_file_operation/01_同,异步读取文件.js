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
    //读文件fs.readFileSync或fs.readFile
        //同步读取文件
        var fileData=fs.readFileSync('./file_operation.html');
        if (fileData){
            response.write('fs.readFileSync同步读取文件内容为：-----\n'+fileData.toString())
        }else{
            console.log('fs.readFileSync读取文件失败:服务器容易崩溃')
        }
        //异步读取文件  fs.readFile(path,[编码方式],callback)  当不指定读出的数据是采用是？格式编码时，默认读取格式为buffer格式
        // fs.readFile('./file_operation.html','utf-8', function (err, fileData) {
        fs.readFile('./file_operation.html',function(err,fileData) {
            if(err){
                console.log('fs.readFile读取文件失败'+err.stack);return false;
            }else{
                //response.write 在这里不能有这个操作
                console.log('fs.readFile文件内容为：-----' +fileData.toString());//将文件内容转换成str
            }
        });
    
    //读取文件 fs.read(fd, buffer, offset, length, position, callback)
        // fd - 通过 fs.open() 方法返回的文件描述符。
        // buffer - 数据写入的缓冲区。
        // offset - 缓冲区写入的写入偏移量。
        // length - 要从文件中读取的字节数。
        // position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
        // callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。
        
        //使用new Buffer.alloc()创建缓冲区
        var buf=new Buffer.alloc(1024);
        fs.open("./dateTime.txt",'r+',function(err,fd){
            if(err){return console.log('文件打开失败')}
            else{console.log('文件打开成功.')}
            console.log('准备读取文件');
            fs.read(fd,buf,0,buf.length,0,function(err,bytes){
                if(err){return console.log("fs.read文件读取失败")}
                else{console.log(bytes+'字节被读取--fs.read');}
                if(bytes>0){
                    console.log('这里是fs.read读取的文件内容：'+buf.slice(0,bytes).toString());
                };
                //为异步模式下关闭文件的语法：fs.close(fd,callback)
                fs.close(fd,function(err){
                    if(err){
                        console.log('文件关闭失败');
                    }else{
                        console.log('文件关闭成功');
                    }
                });
            })
        })
        response.end('<hr>访问结束')
    }
}).listen(81);
console.log('请访问 http://localhost:81');