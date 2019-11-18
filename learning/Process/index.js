// 获取参数
// console.log(process.argv.slice(2))

// 退出程序
// var http = require('http')

// try {
//   log(1)
// } catch (err) {
//   console.log(err)
//   process.exit(1);
// }

// http.createServer().listen(5000)

var spawn = require('child_process').spawn;

const child = spawn('pwd');

process.stdin.pipe(child.stdin)

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

// // 子进程
// var spawn = require('child_process').spawn;
// function _spawn(mainModule) {
//   var worker = spawn('node', [ mainModule ]);

//   worker.on('exit', function (code) {
//       if (code !== 0) {
//         _spawn(mainModule);
//       }
//   });
// }
// _spawn('worker.js');
