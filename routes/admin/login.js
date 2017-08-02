var express = require('express');
var router = express.Router();
var dbUser = require('../../db/user.js');
var checkLogin = require('../../middleware/checkStatus.js').checkLogin;

router.get('/login', checkLogin);
router.get('/login', function(req, res, next) {
  	res.render('./admin/login');
})
router.post('/login',function(req,res,next){
	var dbdata={
        username: req.body.username,
        password: req.body.password
    };
    dbUser.isAccountExist(dbdata).then((dbres)=>{
    	if(dbres){
    		req.session.user=dbdata;
    		res.json({code:0})
    	}else{
    		res.json({code:1000,
    			data:{
    			msg:"用户名或密码错误"
    		}})
    	}
    });
})

module.exports = router;
