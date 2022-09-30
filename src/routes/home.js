const router = require("express").Router();

function testResponse(req, res) {
	res.sendFile(__dirname);
}

router.use("/", testResponse);

module.exports = router;
