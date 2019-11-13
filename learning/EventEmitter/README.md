## events

### events实例
```js
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
```

### events实例方法

#### emitter.emit(eventName[, ...args])
该方法用来触发事件，如果事件有监听器，则返回 true，否则返回 false。
```js
event.emit('enjoy', 'args'); 
```
#### emitter.on(eventName, listener)
该方法用来监听事件

#### emitter.once(eventName, listener)
该方法同on，但是回调函数只触发一次
```js
event.once('enjoy', function(args) { 
    console.log('enjoy once 事件触发', args); 
});
```
#### emitter.removeListener(eventName, listener)
该方法从名为 eventName 的事件的监听器数组中移除指定的 listener。
```js
// 模拟once
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter;

function onlyOnce () {
	console.log("You'll never see this again");
	emitter.removeListener("firstConnection", onlyOnce);
}

emitter.on("firstConnection", onlyOnce);
```

### 错误捕获
事件处理过程中抛出的错误，可以使用try...catch捕获。

