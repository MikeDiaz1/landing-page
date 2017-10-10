var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/../public/index.html');
})

console.log('hello');
app.listen(3000);