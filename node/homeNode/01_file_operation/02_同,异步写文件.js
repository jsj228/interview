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
        var res=fs.writeFileSync('./file_operation.html','同步写文件d内容','utf8'); 
        if(res==undefined){response.write('文件同步写入成功'+res);}
        else{response.write('文件同步写入失败'+res);}
    // 异步写文件  fs.writeFile(file, data,[options], callback) //当文件不存在时,就会创建一个新的文件来写入;
        // data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象
        // options - 该参数是一个对象，包含 {encoding, mode, flag}。
            //其默认值 encoding utf8, mode为 0666 ， flag 为 'w'  (w:覆盖原有的文件内容;a:表示给文件追加内容；)
        fs.writeFile('./file_operat.html','\n异步写入文件内容',{flag:'a'},'utf8',function(err){
            //写文件结束后被调用
            // console.log(err) //undefined 表示写入成功
            if(res==undefined){console.log('文件异步写文件成功'+res);}
            else{console.log('文件异步写入失败'+res)}
        });


    //利用fs.readFile和fs.writeFile练习文件的直接读写；
        // 由于不知道文件的编码方式；就是使用fs.readFile通用的默认读取buffer对象数据 
        //buffer 数据对象，可以存放文本文件，音频文件，视频文件，图片文件等多媒体文件
        fs.readFile('./readFile.png',function (err,data) {
            if(err){
                console.log('读取readFile.png文件失败');
            } else {
                // console.log('读取readFile.png文件成功')
                fs.writeFile('./writePng.png',data,function(err) {
                    if(err){console.log('写入失败')}
                    else{console.log('写入文件成功')}
                })
            }
        })
        response.end('<hr>访问结束')
    }
}).listen(81);
console.log('请访问 http://localhost:81');