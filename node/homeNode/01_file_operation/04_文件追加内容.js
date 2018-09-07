
//文件操作需要先引入node自带的fs模块
var fs=require('fs');
//建立node服务先引入http模块
var http=require('http');
//创建nodeHttp服务
http.createServer(function(request,response) {
    //设置响应头
    response.writeHead(200,{"content-type":'text/html;charset=utf-8'});
    if (request.url !== "/favicon.ico") { //清楚第二次访问 //url是node自带的
    // appendFile 给文件追加内容；如果追加的文件存在，就追加内容；如果不存在就添加文件，并追加内容
        //同步
        response.write('同步追加文件内容'+fs.appendFileSync('./dateTime.txt','\n 添加的新文件内容'+new Date()+'----'+parseInt(Math.random()*10),'utf8'));
        //异步---------创建新文件并在已有的文件内容中添加新的内容
        fs.appendFile('./dateTime.txt','\n 文件添加新的内容----->'+new Date(),function(isErr){
            // console.log(isErr)//null
            if(!isErr){
                console.log('异步文件追加成功'+isErr);
            }else{
                console.log('异步文件追加失败！！！')
            }
        })
        response.end('<hr>访问结束')
    }
}).listen(81);
console.log('请访问 http://localhost:81');

