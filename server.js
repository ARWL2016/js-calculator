// Using live-server, so this is now defunct

var express = require("express");
var path = require("path");
var open = require("open");
var chalk = require("chalk");

var app = express();
var port = 3000;

app.use(express.static("src"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(chalk.green("Listening on port:" + port));
        open("http://localhost:" + port);
    }
});
