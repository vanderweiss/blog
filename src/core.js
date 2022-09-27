const express = require("express");

function startServer(port) {	
	const app = express();

	app.listen(port);
}

exports.startServer = startServer;
