var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});

app.listen(3000, function () {
  console.log('Magic is happening on port 3000!')
})