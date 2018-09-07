
//文件操作需要先引入node自带的fs模块
var fs=require('fs');
//建立node服务先引入http模块
var http=require('http');
//创建nodeHttp服务
http.createServer(function(request,response) {
    //设置响应头
    response.writeHead(200,{"content-type":'text/html;charset=utf-8'});
    if (request.url !== "/favicon.ico") { //清楚第二次访问 //url是node自带的
    //获取文件信息 fs.stat(path,callback)
        //回调函数中stats类中的方法有：
            // stats.isFile()	如果是文件返回 true，否则返回 false。
            // stats.isDirectory()	如果是目录返回 true，否则返回 false。
            // stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
            // stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
            // stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
            // stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
            // stats.isSocket()	如果是 Socket 返回 true，否则返回 false。
        fs.stat("./dateTime.txt",function(err,stats){
            // console.log(err==null);//true
            if(err){return false;}
            console.log('判断是不是文件'+stats.isFile());//true
            console.log('判断是不是目录'+stats.isDirectory());//false
            console.log('判断是块设备'+stats.isBlockDevice());//false
        });
        response.end('<hr>访问结束')
    }
}).listen(81);
console.log('请访问 http://localhost:81');

