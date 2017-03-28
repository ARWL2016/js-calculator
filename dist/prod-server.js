var express = require("express");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static("app"));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port:" + port);
    }
});
