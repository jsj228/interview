
//文件操作需要先引入node自带的fs模块
var fs=require('fs');
//建立node服务先引入http模块
var http=require('http');
//创建nodeHttp服务
http.createServer(function(request,response) {
    //设置响应头
    response.writeHead(200,{"content-type":'text/html;charset=utf-8'});
    if (request.url !== "/favicon.ico") { //清楚第二次访问 //url是node自带的
    //文件是否存在
        //同步
        var isFileSync=fs.existsSync('./aa.txt')
        if(isFileSync){
            response.write('同步判断文件是存在的。')
        }else{
            response.write('同步判断文件是不存在的！！！')
        }
        //异步 fs.exists
        fs.exists('./file_operation.html',function(isTrue){
            console.log(isTrue)
            if (isTrue){
                console.log('异步判断文件是存在.')
            }else{
                console.log('异步判断文件是不存在！！！')
            }
        })
        response.end('<hr>访问结束')
    }
}).listen(81);
console.log('请访问 http://localhost:81');

