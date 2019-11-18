## process使用场景

### 获取命令行参数
```js
console.log(process.argv.slice(2))
```
```bash
➜ アメージング😁  Process git:(master) ✗ node index.js a b  
[ 'a', 'b' ]
```
### 退出程序
```js
var http = require('http')

try {
  log(1)
} catch (err) {
  console.log(err)
  process.exit(1);
}

http.createServer().listen(5000)
```
```bash
➜ アメージング😁  Process git:(master) ✗ node index.js
ReferenceError: log is not defined
    at Object.<anonymous> (/Users/********/cc-nodejs/learning/Process/index.js:5:3)
    at Module._compile (internal/modules/cjs/loader.js:868:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:879:10)
    at Module.load (internal/modules/cjs/loader.js:731:32)
    at Function.Module._load (internal/modules/cjs/loader.js:644:12)
    at Function.Module.runMain (internal/modules/cjs/loader.js:931:10)
    at internal/main/run_main_module.js:17:11
➜ アメージング😁  Process git:(master) ✗ 
```
### 子进程
```js
var spawn = require('child_process').spawn;
const child = spawn('pwd');
process.stdin.pipe(child.stdin)
child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});
```
```js 
// 子进程
var spawn = require('child_process').spawn;
function _spawn(mainModule) {
  var worker = spawn('node', [ mainModule ]);

  worker.on('exit', function (code) {
      if (code !== 0) {
        _spawn(mainModule);
      }
  });
}
_spawn('worker.js');
```