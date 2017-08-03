var express = require('express');
var router = express.Router();
var dbArticle = require('../../db/article.js');

router.get('/article:id', function(req, res, next) {
  	res.render('./admin/article',{
  		
  	});
})

router.post('/article/add',function(req,res,next){
		dbArticle.insert(req.body).then(()=>{
			res.json({code:0});
		})
})

router.post('/article/remove',function(req,res,next){
		dbArticle.insert(req.body).then(()=>{
			res.json({code:0});
		})
})

module.exports = router;
