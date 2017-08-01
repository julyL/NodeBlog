var express = require('express');
var router = express.Router();
var dbUser = require('../../db/user.js');
/* GET home page. */
router.get('/register', function(req, res, next) {
  	res.render('./admin/register');
})

router.post('/register',function(req,res,next){
	console.log(req.body);
	dbUser.isRegister({username:req.body,password:req.body.password}).then((err,data)=>{
		console.log(err,data);
	})
	req.session.user=req.body;
	// res.redirect('/article');
})

module.exports = router;
