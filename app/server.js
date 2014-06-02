var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(3000,'0.0.0.0');
console.log('Server listening on port 3000. Ctrl-C to quit./');
