var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  	res.render('./admin/login');
  	// res.send('admin login')
})
router.post('/login',function(req,res,next){
	console.log(req.body);
	req.session.user=req.body;
	res.redirect('/article');
})

module.exports = router;
