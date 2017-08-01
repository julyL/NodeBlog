var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/article', function(req, res, next) {
  	res.render('./admin/article');
  	// res.send('admin login')
})
router.post('/article',function(req,res,next){
	console.log(req.body);
	req.session.user=req.body;
	res.redirect('/article');
})

module.exports = router;
