var express = require('express');
var router = express.Router();
var dbArticle = require('../db/article.js');

router.get('/', function(req, res, next) {
	var list;
	dbArticle.getlist()
  	res.render('index',{
  		user:req.session.user,
  		list:[{}]
  	});
});

module.exports = router;
