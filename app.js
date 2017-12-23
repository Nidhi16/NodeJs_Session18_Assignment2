var express = require('express');
var app = express();

var jade = require('jade');

var port = process.env.PORT || 8000;

var shop = require('./routes/router');
app.use('/shop', shop);

app.get('/', function(request, response) {
    var mainContent = jade.renderFile('views/index.jade');
    response.send(mainContent);
});

app.listen(port, function(){
    console.log("Listening on port " + port);
});