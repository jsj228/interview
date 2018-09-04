function fun2(res) {
    console.log('fun2');
    res.write('<hr>这里是fun2');
    
}
//module.exports=fun2;//导出一个函数
module.exports={//可以导出多个函数
    fun2:fun2,
    fun3:function (res) {
        res.write('<hr>这里是fun3');
        console.log('fun3');
    },
    fun4:function (res) {
        console.log('fun4');
        res.write("<hr>这里是fun4");
    },
    fun5: function (res) {
        console.log('fun5');
        res.write("<hr>这里是fun5");
    }
}
