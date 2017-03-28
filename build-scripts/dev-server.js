import express from "express";
import path from "path";
import open from "open";
import chalk from "chalk";

const app = express();
const PORT = 3000;

app.use(express.static("src"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(chalk.green(`Listening on port ${PORT}`));
        open("http://localhost:" + PORT);
    }
});