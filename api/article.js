var express = require('express');
var router = express.Router();
var dbArticle = require('../db/article.js');

// 更新文章接口
router.post('/article/update',function(req,res,next){
		dbArticle.update(req.body).then(()=>{
			res.json({code:0});
		})
})


// 删除文章接口
router.post('/article/remove',function(req,res,next){
       	var removeId=req.body.articleId;
		dbArticle.remove({_id:removeId}).then(()=>{
			res.json({code:0});
		})
})

// 发布文章接口
router.post('/write',function(req,res,next){
	var data={
        content:req.body.content,
        title:req.body.title,
        date:req.body.date,
        html:req.body.html
	}
	dbArticle.insert(data).then(()=>{
		res.json({code:0});
	})
})

module.exports = router;