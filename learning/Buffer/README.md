# Buffer笔记

## Buffer（缓冲器）
JavaScript 语言没有用于读取或操作二进制数据流的机制。 Buffer 类是作为 Node.js API 的一部分引入的，用于在 TCP 流、文件系统操作、以及其他上下文中与八位字节流进行交互。

Buffer 类在全局作用域中，因此无需使用 require('buffer').Buffer。

## Buffer API

参考：[Buffer API](http://nodejs.cn/api/buffer.html)

### alloc
- Buffer.alloc(size[, fill[, encoding]])
  - 分配的buffer会通过buf.fill进行初始化,能确保永远不会包含敏感数据
  - 因为有初始化操作,因此速度相较于allocUnsafe慢得多
- Buffer.allocUnsafe(size)
  - 分配的 buffer 内存是未初始化的,可能包含敏感数据
- Buffer.allocUnsafeSlow(size)
  - 分配的buffer内存是未初始化的,可能包含敏感数据
  - 创建一个非内存池的buffer,避免垃圾回收机制因创建太多独立的buffer而过度使用

### from
- Buffer.from(string[, encoding])
  - 从字符串创建一个buffer,是最常用的
- Buffer.from(buffer)
  - 从buffer创建一个buffer,常用于复制
- Buffer.from(array)
  - 从数字数组常见一个buffer,如果不是数字,自动被0填充
- Buffer.from(arrayBuffer[, byteOffset[, length]]) 
  - 创建ArrayBuffer的视图，但不会拷贝底层内存。
- Buffer.from(object[, offsetOrEncoding[, length]])
  - 从对象创建一个buffer,实际类似于 Buffer.from(string)
  - 本质上是调用对象的Symbol.toPrimitive或valueOf方法

## Buffer.allocUnsafe() 与 Buffer.allocUnsafeSlow() 不安全的原因
当调用 Buffer.allocUnsafe() 和 Buffer.allocUnsafeSlow() 时，分配的内存片段是未初始化的（没有被清零）。 虽然这样的设计使得内存的分配非常快，但分配的内存可能包含敏感的旧数据。 使用由 Buffer.allocUnsafe() 创建的 Buffer 没有完全重写内存，当读取 Buffer 的内存时，可能使旧数据泄露。

虽然使用 Buffer.allocUnsafe() 有明显的性能优势，但必须格外小心，以避免将安全漏洞引入应用程序。

## Buffer性能对比
> ab -c 200 -n 201 http://127.0.0.1:5000/
![buffer.png](https://i.loli.net/2019/11/13/ebh5ArXRsaOWnpZ.png)
![str.png](https://i.loli.net/2019/11/13/C1RhPjuTLMEicVD.png)

很明显使用Buffer效率更高，参考Requests per second，Transfer rate