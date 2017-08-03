var express = require('express');
var router = express.Router();
var dbArticle = require('../db/article.js');

router.get('/article/:id', function(req, res, next) {
	console.log('--',req.params.id)
	dbArticle.getArticle({_id:req.params.id}).then((data)=>{
		res.render('./article',data);
	})
})

router.post('/list',function(req,res,next){
	console.log(req.body);
	req.session.user=req.body;
	res.redirect('/list');
})

module.exports = router;
