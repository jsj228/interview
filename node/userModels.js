function userClass(id,name,age) {
    this.id=id;
    this.name=name;
    this.age=age;
    this.enter=function () {
        console.log(this.name+'进入userClass类中')
    }
};
module.exports=userClass; 