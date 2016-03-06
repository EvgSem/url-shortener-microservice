var urlShotener = require("../src/url-shortener");
var express = require('express');
var app = express();

app.use(express.static('./'));
app.use(express.static('./src'));

app.get('/shorten', function (req, res) {
 var urlInput = req.query.urlOriginal;
 console.log("Param: " + urlInput);
 var response = urlShotener.shotener(urlInput);
 res.send(response);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports.app = app;