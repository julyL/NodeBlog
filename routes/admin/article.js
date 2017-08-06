var express = require('express');
var router = express.Router();
var dbArticle = require('../../db/article.js');

router.get('/article/:id', function (req, res, next) {
	dbArticle.getArticle({ _id: req.params.id }).then((data) => {
		res.render('./admin/article', {
			user: req.session.user,
			data: data
		});
	})
})

module.exports = router;
