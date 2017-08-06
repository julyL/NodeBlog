var express = require('express');
var router = express.Router();
var dbArticle = require('../../db/article.js');

router.get('/write', function (req, res, next) {
	res.render('./admin/write', {
		user: req.session.user,
	});
})

module.exports = router;
