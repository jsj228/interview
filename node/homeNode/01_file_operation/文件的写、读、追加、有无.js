/*
* @Author: David
* @Date:   2018-08-30 16:06:34
* @Last Modified by:   David
* @Last Modified time: 2018-08-30 16:56:39
*/
    var url=require('url');
    //文件的读写操作模块
    var fs=require('fs');
//当文件已经有时，就会清楚当前文件的内容并写新的文件内容  --->当文件写满时就会出错
    //同步写文件
    //返回值判断是否写入成功  //undefind为写入成功 赋值的情况下，表示写入失败
    var res=fs.writeFileSync('./www/test.txt','写入test文件','utf8'); 
    console.log('判断是否写入成功'+res);
    // 异步写文件
    fs.writeFile('./www/test2.txt','内容er','utf8',function(err){
        //写文件结束后被调用
        console.log(err) //undefined 表示写入成功
    });
//读文件
    console.dir('同步读取文件'+fs.readFileSync('./www/test2.txt','utf8'));
    fs.readFile('./www/test2.txt',function(err,data){
        if(err){
            console.log('文件读取失败');
            throw err;//终止程序
        }else{   
            console.dir('异步读取文件成功'+err);
            //将读取二进制的数据转换成字符串格式的 
            console.dir(data.toString())//除非在文件读取的时候就指定编码格式为utf8;   fs.readFile('./www/test2.txt','utf8',function(err,data){});

        }
    });
//文件是否存在
    console.log(fs.existsSync('./www/aa.txt')+'同步判断文件是否存在');
    fs.exists('./www/aa.txt',function(res){
        if(res){console.log('文件存在')}
    })
    //同步---------创建新文件并在已有的文件内容中添加新的内容
    console.log('创建新文件并在已有的文件内容中添加新的内容'+fs.appendFileSync('./www/dateTime.txt','\n 添加的新的文件内容'+new Date()+'----'+parseInt(Math.random()*10),'utf8'));
    //异步---------创建新文件并在已有的文件内容中添加新的内容
    fs.appendFile('./www/dateTimes','\n 文件添加新的内容----->'+new Date(),function(err){
        if(err){
            console.log('添加文件失败')
        }else{
            console.log('判断文件是否异步添加成功'+err);
        }
    })
//监听文件是否发生改变
    fs.writeFileSync()
    fs.writeFile('./www/t.txt',function(a,b){
        console.log('A---'+a+Oject.prototype.toString.call(a));
        console.log('b---'+b);
    });