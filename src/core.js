const express = require("express");
const app = express();

function start(port) {
	app.listen(port);
}

exports.app = app;
exports.start = start;
