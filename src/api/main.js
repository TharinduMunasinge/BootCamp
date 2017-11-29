
var express = require('express')
var greetingHandler = require('./greet.js');
var reportHandeler = require('./report.js');

var app = express();

app.get('/greet', greetingHandler) ;
app.post('/report', reportHandeler) ;
app.use('/', express.static('assets'));

app.listen(8080);
