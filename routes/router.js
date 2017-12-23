var express = require('express');
var events = require('events');
var router = express.Router();

var emitter = new events.EventEmitter();
router.get('/enter', function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    emitter.emit('bell', "Ring Ring Ring !!!");
    response.end("Bell Rings Ring Ring Ring !!!");
});

emitter.on('bell', function (data) {
    console.log(data);
});

module.exports = router;