var net = require('net');
var client = net.connect({ port: 5000 }, function () {
  console.log('client: connect');
  client.write('i’m client message\n');
});
client.on('data', function (data) {
  console.log(data.toString());
  client.end();
});
client.on('end', function () {
  console.log('client: close');
});