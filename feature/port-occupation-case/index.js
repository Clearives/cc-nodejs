var net = require('net')
var http = require('http')

function probe(port, callback) {
  var server = net.createServer().listen(port)
  server.once('listening', function () {
    if (server) {
      server.close()
    }
    callback(true, port)
  })

  server.once('error', function (err) {
    var result = true
    if (err.code === 'EADDRINUSE') {
      result = false
    }
    callback(result, port)
  })
}

function server(port) {
  var pt = port;
  probe(pt, function (bol, _pt) {
    if (bol === true) {
      server = http.createServer();
      server = server.listen(parseInt(_pt, 10));
      console.log("\n server running at" + "\n\n=> http://localhost:" + _pt + '\n');
    } else {
      server(_pt + 1)
    }
  })
}

server(5000)