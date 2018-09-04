//引入events模块  //安装events模块 npm i events --save-dev
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 绑定 connection 事件处理程序
eventEmitter.on('connection', function () {
    console.log('连接成功。');
    // 触发 data_received 事件 
    eventEmitter.emit('data_received');
});
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function () {
    console.log('数据接收成功。');
});
// 触发 connection 事件 
eventEmitter.emit('connection');
console.log("程序执行完毕。");
//ctrl+c 可退出node服务