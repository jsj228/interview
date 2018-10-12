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
        //创建目录 fs.mkdir(path[,mode],callback);
        //mode - 默认权限为0777
        fs.mkdir("./creatMkdir/test",function(err){
            if(err){console.log('如果目录存|结尾存在/在就：创建./creatMkdir目录失败')
            }else{console.log('创建./creatMkdir目录成功')}
            // 读取目录 fs.readdir(path, callback)
            fs.readdir('./creatMkdir',function(err,files){
                if(err){console.log('fs.readdir查看目录失败')}
                console.log(Object.prototype.toString.call(files)); //Array
                console.log(files.length);
                for(var i=0;i<files.length;i++){
                    console.log(files[i]);
                }
            })
            //删除目录 fs.rmdir(path,callback)
            fs.rmdir("./creatMkdir/test/",function(err){
                console.log(err);
                if(err){
                    console.log('如果目录不存在就:fs.rmdir删除目录失败');
                }else{
                    console.log('fs.rmdir删除目录成功')
                }
            })
            // 文件模块方法参考手册  
        });
        response.end('<hr>访问结束')
    }
}).listen(81);
console.log('请访问 http://localhost:81');