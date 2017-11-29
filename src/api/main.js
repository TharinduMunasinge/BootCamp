
var express = require('express')
// import  greetHandler from './greet.js';

var app = express();


app.use('/', express.static('assets'));

app.get('/greet', function(req, res){
  res.json({'a':'b'});
});


app.listen(8080);
