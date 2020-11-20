"use strict";
var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Hello papichulo!');
});
app.listen(port, function () {
    console.log("Example http://localhost:" + port);
});
