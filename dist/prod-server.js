var express = require("express");

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static("dist"));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port:" + port);
    }
});
