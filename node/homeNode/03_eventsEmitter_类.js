//先引入events模块  //安装events模块 npm i events --save-dev
var events = require('events').EventEmitter;
// 创建 event 对象
var event= new events();
// 使用on/once给event对象绑定事件监听器
// 使用emit('事件名',参数1,参数2,...)来触发event绑定的事件监听器

//使用on 给event对象添加some_event事件,并绑定匿名方法
    // on(event, listener)
    // 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
    event.on('some_event',function (arg1) {
        console.log('触发some_event事件',arg1)
    });
    // 绑定 connection 事件处理程序
    event.on('connection', function (arg1,arg2) {
        console.log('连接成功', arg1,arg2);
        // 触发 some_event 事件
        event.emit('some_event',"some_event参数1")
        // 触发 data_received 事件 
        event.emit('data_received',001,002,003);
    });
    //  给data_received 事件绑定一个匿名监听器
    event.on('data_received', function (a,b,c) {
        console.log('数据接收成功',a,b,c);
    });
    //使用定时器循环触发指定事件的监听器
    setTimeout(() => {
        // 触发 connection 事件 绑定的监听器
        event.emit('connection','connection参数1', 'connection参数2');
    },1000);
// 使用once 给event对象添加oneFun事件,并绑定匿名方法
    // once(event, listener)
    // 绑定单次事件监听，即 监听器最多只会触发一次，触发后立刻解除该监听器。
    event.once('onceFun',function (a,b,c) {
        console.log('once(event, listener) 绑定一次onceFun事件监听',a,b,c)
    });
    event.emit('onceFun','00A','00B','00c');

//使用removeListener(event,FunName)来移除指定的事件和监听器相应的方法
    var nameFun=function (a, b, c) {
        console.log('使用removeListener(event,FunName)来移除指定的事件监听器(FunName)', a, b, c)
    }
    event.on('removeEvent', nameFun);
    event.emit('removeEvent', 'AAA', 'BB', 'C');
    // 注销事件监听器后 ;后续的该事件就无法调用了
    event.removeListener('removeEvent', nameFun);
    event.emit('removeEvent', 'aa', 'bb', 'c');
    
//使用removeAllListener([event])来移除所有的事件监听器 
//如果指定事件，则移除指定事件的所有监听器
    // event.removeAllListeners(); // 移除不掉once给对象绑定的事件监听器
//函数setMaxListeners(n)用于提高监听器的默认限制的数量10。
    event.setMaxListeners(15); 
    console.dir('event.emitter.listenerCount返回指定事件监听器的数量为：' + events.EventEmitter.listenerCount(event,"removeEvent"));
    event.on('removeEvent',function(age2) {
        console.log('这里是removeEvent事件第二个监听器'+age2)
    });
    event.emit('removeEvent',"22222");
    console.dir('event.emitter.listenerCount返回指定事件监听器的数量为：' + events.EventEmitter.listenerCount(event, "removeEvent"));
    // console.dir('event.emitter.listenerCount返回指定事件监听器的数量为：' + events.emitter.listenerCount("removeEvent"));

    // 错误的事件
    //node.js中使用EventEmitter定义了一个特殊的事件error，我们在遇到 异常的时候通常会触发 error 事件。
    // 当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。
    //我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。例如：
    // event.emit("error")

// 继承 EventEmitter
    // 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
console.log("程序执行完毕");
//ctrl+c 可退出node服务