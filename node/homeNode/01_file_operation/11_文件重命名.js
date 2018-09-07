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
    //文件重新命令,或移动文件到指定目录中,或是修改文件的类型 ; fs.rename(filePath,newFileName,callback);
        fs.rename("../reseNewName.text",'./file_operation.html',function (err) {
            // console.log(err);//成功为：null
            if(err){return console.log('文件操作失败')}
            else { console.log('文件更改成功');}
        })
        response.end('<hr>访问结束')
    }
}).listen(81);
console.log('请访问 http://localhost:81');