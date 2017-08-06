var express = require('express');
var router = express.Router();
var dbUser = require('../../db/user.js');

router.get('/login', function (req, res, next) {
	res.render('./admin/login', {
		user: req.session.user
	});
})

module.exports = router;
