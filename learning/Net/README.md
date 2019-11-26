# Net 

## TCP 服务器事件
- listening: ，也就是 server.listen();
- connection: 新链接建立时触发，也就是每次收到客户端回调，参数 socket 为 net.createServer 实例，也可以写在 net.createServer(function- (socket) {}) 方法里
- close：当 server 关闭的时候触发（server.close()）。 如果有连接存在，直到所有的连接结束才会触发这个事件
- error：捕获错误，例如监听一个已经存在的端口就会报 Error: listen EADDRINUSE 错误

## TCP 链接事件方法
- data: 一端调用 write() 方法发送数据时，另一端会通过 socket.on('data') 事件接收到，可以理解为读取数据
- end: 每次 socket 链接会出现一次，例如客户端发送消息之后执行 Ctrl + C 终端，就会收到
- error: 监听 socket 的错误信息
- write：write 是一个方法（socket.write()）上面的 data 事件是读数据，write 方法在这里就为写数据到另一端，

![20191126094123.png](https://i.loli.net/2019/11/26/9xr4JwZjN56VzsX.png)


## 参考
- [net（网络）](http://nodejs.cn/api/net.html#net_net)
- [Nodejs进阶：核心模块net入门与实例讲解](https://www.cnblogs.com/chyingp/p/6072338.html)
- 深入浅出nodejs