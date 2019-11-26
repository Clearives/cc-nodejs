var net = require('net');
var server = net.createServer();
server.listen(5000, function () {
  console.log('server: server is listening');
});
server.on('connection', socket => {
  console.log('server: client connected');
  socket.on('data', buffer => {
    const msg = buffer.toString();
    console.log('client: ' + msg);
    socket.write(Buffer.from('server: hello client, you call is, ' + msg));
  });
  socket.on('close', buffer => {
    console.log('server: client close');
    // server.close(() => {

    // })
  });
})
server.on('close', () => {
  console.log('server: server close');
})
