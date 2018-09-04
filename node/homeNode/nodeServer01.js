//引入events模块  //安装events模块 npm i events --save-dev
var events = require('events').EventEmitter;
// 创建 event 对象
var event = new events();
// 使用on/once给event对象绑定事件监听器
// 使用emit('事件名',参数1,参数2,...)来触发event绑定的事件监听器

//使用on 给event对象添加some_event事件,并绑定匿名方法
// on(event, listener)
// 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
event.on('some_event', function (arg1) {
    console.log('触发some_event事件', arg1)
});
// 绑定 connection 事件处理程序
event.on('connection', function (arg1, arg2) {
    console.log('连接成功', arg1, arg2);
    // 触发 some_event 事件
    event.emit('some_event', "some_event参数1")
    // 触发 data_received 事件 
    event.emit('data_received', 001, 002, 003);
});
// 使用匿名函数绑定 data_received 事件
event.on('data_received', function (a, b, c) {
    console.log('数据接收成功', a, b, c);
});
setTimeout(() => {
    // 触发 connection 事件 
    event.emit('connection', 'connection参数1', 'connection参数2');
}, 1000);
// 使用once 给event对象添加oneFun事件,并绑定匿名方法
// once(event, listener)
// 绑定单次事件监听，即 监听器最多只会触发一次，触发后立刻解除该监听器。
event.once('onceFun', function (a, b, c) {
    console.log('once(event, listener) 绑定一次onceFun事件监听', a, b, c)
});
event.emit('onceFun', '00A', '00B', '00c');

//使用removeListener(event,FunName)来移除指定的事件监听器和相应的方法
var nameFun = function (a, b, c) {
    console.log('使用removeListener(event,FunName)来移除指定的事件监听器', a, b, c)
}
event.on('removeEvent', nameFun);
event.emit('removeEvent', 'AAA', 'bb', 'c');

// event.removeListener('removeEvent', nameFun);
//使用removeAllListener([event])来移除所有的事件监听器 
//如果指定事件，则移除指定事件的所有监听器

//引入events模块  //安装events模块 npm i events --save-dev
var events = require('events').EventEmitter;
// 创建 event 对象
var event = new events();
// 使用on/once给event对象绑定事件监听器
// 使用emit('事件名',参数1,参数2,...)来触发event绑定的事件监听器

//使用on 给event对象添加some_event事件,并绑定匿名方法
// on(event, listener)
// 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
event.on('some_event', function (arg1) {
    console.log('触发some_event事件', arg1)
});
// 绑定 connection 事件处理程序
event.on('connection', function (arg1, arg2) {
    console.log('连接成功', arg1, arg2);
    // 触发 some_event 事件
    event.emit('some_event', "some_event参数1")
    // 触发 data_received 事件 
    event.emit('data_received', 001, 002, 003);
});
// 使用匿名函数绑定 data_received 事件
event.on('data_received', function (a, b, c) {
    console.log('数据接收成功', a, b, c);
});
setTimeout(() => {
    // 触发 connection 事件 
    event.emit('connection', 'connection参数1', 'connection参数2');
}, 1000);
// 使用once 给event对象添加oneFun事件,并绑定匿名方法
// once(event, listener)
// 绑定单次事件监听，即 监听器最多只会触发一次，触发后立刻解除该监听器。
event.once('onceFun', function (a, b, c) {
    console.log('once(event, listener) 绑定一次onceFun事件监听', a, b, c)
});
event.emit('onceFun', '00A', '00B', '00c');

//使用removeListener(event,FunName)来移除指定的事件监听器和相应的方法
var nameFun = function (a, b, c) {
    console.log('使用removeListener(event,FunName)来移除指定的事件监听器', a, b, c)
}
event.on('removeEvent', nameFun);
event.emit('removeEvent', 'AAA', 'bb', 'c');

// event.removeListener('removeEvent', nameFun);
//使用removeAllListener([event])来移除所有的事件监听器 
//如果指定事件，则移除指定事件的所有监听器
event.setMaxListeners(15); //函数setMaxListeners(n)用于提高监听器的默认限制的数量。

console.log("程序执行完毕");
//ctrl+c 可退出node服务