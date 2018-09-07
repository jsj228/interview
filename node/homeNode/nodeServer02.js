// node.js  中的缓冲区----Buffer类(是node.js的核心库)
// 由于js自身只有字符的数据类型,并没有二进制数据类型；
//所以在js处理TCP流或文件流时，必须使用到二进制的数据
// 所以Node.js中定义了一个Buffer类，用来创建一个专门存放二进制数据的缓存区。
//一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
//Node v6.0 一下的：new Buffer();
//Node v6.0 以后:Buffer.from();
// 定义Buffer对象的示例：
    // 定义一个buf    Buffer类的常量
    const buf=Buffer.from('runoob','ascii');
    console.log(buf.toString('base64'));// 72756e6f6f62 

// Node,js目前所支持的字符编码包括：
    // ascii:仅支持7位ASCII数据；如果设置去掉高位，则编码的速度更快
    //utf8：多字节编码的Unicode字符，
    //utf16le 或 ucs2：把数据编码成2或4个字节；小字节编码的Unicode字符
    //base64：Base64编码
    //latin1或binary：把数据编码成一个字节的方式
    //hex：将每个字节编码成十六进制的数据

 //Buffer提供了一下来创建Buffer类
    // Buffer.alloc(size[, fill[, encoding]]) ： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
    // Buffer.allocUnsafe(size) ： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
    // Buffer.allocUnsafeSlow(size)
    // Buffer.from(array) ： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
    // Buffer.from(arrayBuffer[, byteOffset[, length]]) ： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
    // Buffer.from(buffer) ： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
    // Buffer.from(string[, encoding]) ： 返回一个被 string 的值初始化的新的 Buffer 实例
//创建Buffer类示例：
    // 创建一个长度为 10、且用 0 填充的 Buffer。
    const buf1 = Buffer.alloc(10,0);
    // 创建一个长度为 10、且用 0x1 填充的 Buffer。 
    const buf2 = Buffer.alloc(10, 1);
    // 创建一个长度为 10、且未初始化的 Buffer。
    // 这个方法比调用 Buffer.alloc() 更快，
    // 但返回的 Buffer 实例可能包含旧数据，
    // 因此需要使用 fill() 或 write() 重写。
    const buf3 = Buffer.allocUnsafe(10);
    // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
    const buf4 = Buffer.from([1, 2, 3]);
    // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
    const buf5 = Buffer.from('tést');
    // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
    const buf6 = Buffer.from('tést', 'latin1');
