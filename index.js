const express = require("express");
const app = express();

const fs = require("fs");
const http = require("http");
const https = require("https");

app.use("/", require("./src/middleware"));

app.use("/", require("./src/routes/home"));

app.use(express.static("public"));

const options = {
	ca: fs.readFileSync("ssl/vanderweiss_com.ca-bundle"),
	cert: fs.readFileSync("ssl/vanderweiss_com.crt"),
	key: fs.readFileSync("ssl/vanderweiss_com.key")
};

http.createServer(app).listen(3000);
https.createServer(options, app).listen(4000);
