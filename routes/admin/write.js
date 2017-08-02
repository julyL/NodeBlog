var express = require('express');
var router = express.Router();
var dbArticle = require('../../db/article.js');

router.get('/write', function(req, res, next) {
  	res.render('./admin/write');
})

router.post('/write',function(req,res,next){
	var data={
        content:req.body.content,
        title:req.body.title,
        date:req.body.date
	}
	dbArticle.insert(data).then(()=>{
		res.json({code:0});
	})
})

module.exports = router;
