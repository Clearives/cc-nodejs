## 端口占用问题

### 解决方法思路
首先我们开个临时server去探测是否占用，如果占用，端口+1，递归探测，知道端口正常，我们关闭临时server，在当前端口启动我们的服务。

### http-server
[http-server](https://www.npmjs.com/package/http-server) is a simple, zero-configuration command-line http server. It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.

简单点说，这就是一个临时的服务，类似nginx这种，它是怎么解决端口占用的呢，我们打开源码，发现他用到了一个库，当然他们自己写的，[portfinder](https://www.npmjs.com/package/portfinder)。


### portfinder
portfinder 的思路其实和我们一开始是差不多的，但是它封装的很好，包括一些参数，端口范围什么的都有，我们demo只是粗略的理解一下思路。