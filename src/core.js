const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("hi uwu");
	console.log("request made");
})

exports.app = app;

const fs = require("fs");

const options = {
	key: fs.readFileSync("key.pem"),
	cert: fs.readFileSync("cert.pem")
};

const http = require("http");
const https = require("https");

exports.start = function() {
	http.createServer(app).listen(80);
	https.createServer(options, app).listen(443);
};
