var express = require('express')
var app = express()
app.get('/', function(req, res) {
    res.end('Hello worldas!');
})
app.listen(4000);
