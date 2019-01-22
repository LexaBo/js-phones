let http = require('http');
var static = require('node-static');
var file = new static.Server('.', {
    cache: 0,
});

function accept(req, res) {
        file.serve(req, res);
}

http.createServer(accept).listen(3000);