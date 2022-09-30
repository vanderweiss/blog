const router = require("express").Router();

function redirectSecure(req, res, next) {
	if (req.secure) {
		return next();
	}
	console.log("Redirecting to HTTPS");
	res.redirect("https://localhost:4000");
}

router.use(redirectSecure);                

module.exports = router;
