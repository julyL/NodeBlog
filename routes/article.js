var express = require('express');
var router = express.Router();


router.get('/article:id', function(req, res, next) {
  	res.render('./admin/article');
})

router.post('/list',function(req,res,next){
	console.log(req.body);
	req.session.user=req.body;
	res.redirect('/list');
})

module.exports = router;
