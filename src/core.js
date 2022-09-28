const express = require("express");
const app = express();

function start(port) {
	app.listen(port);
}

app.get("/", (req, res) => {
	res.send("hi uwu");
	console.log("request made");
})

exports.app = app;
exports.start = start;
