var express = require('express');
var router = express.Router();


router.get('/list', function(req, res, next) {
  	res.render('./admin/list');
})

router.post('/list',function(req,res,next){
	console.log(req.body);
	req.session.user=req.body;
	res.redirect('/list');
})

module.exports = router;
