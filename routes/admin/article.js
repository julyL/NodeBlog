var express = require('express');
var router = express.Router();
var dbArticle = require('../../db/article.js');

router.get('/article/:id', function(req, res, next) {
	dbArticle.getArticle({_id:req.params.id}).then((data)=>{
		res.render('./admin/article',{
			user:req.session.user,
			data:data
		});
	})
})

router.post('/article/update',function(req,res,next){
		dbArticle.update(req.body).then(()=>{
			res.json({code:0});
		})
})

router.post('/article/remove',function(req,res,next){
       	var removeId=req.body.articleId;
		dbArticle.remove({_id:removeId}).then(()=>{
			res.json({code:0});
		})
})

module.exports = router;
