var userParent=require('./userModels');//导入父类
function childUser(id,name,age) {
    userParent.apply(this,[id,name,age]);//继承userParent父类的this
    this.fun=function (res) {
        res.write('<hr>'+this.name +'进入childUser子类中')
    }
};
module.exports = childUser; 