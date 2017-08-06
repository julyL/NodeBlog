var express = require('express');
var router = express.Router();
var dbUser = require('../db/user.js');

// 登录接口
router.post('/login',function(req,res,next){  
	var dbdata={
        username: req.body.username,
        password: req.body.password
    };
    dbUser.isAccountExist(dbdata).then((dbres)=>{
    	if(dbres){
    		req.session.user=dbdata;
    		res.json({
                code:0
            })
    	}else{
    		res.json({code:1000,
    			data:{
    			msg:"用户名或密码错误"
    		}})
    	}
    });
})

// 注册接口
router.post('/register', function(req, res, next) {
	var dbdata={
        username: req.body.username,
        password: req.body.password
    };
    dbUser.isAccountExist(dbdata).then((dbres) => {
        if (dbres) {
            res.json({
                code: 1000,
                data:{
                    msg: '已注册'
                }
            })
        }else{
        	dbUser.insert(dbdata).then((dbres)=>{
        		 req.session.user=dbdata;
        		  res.json({
                         code:0
                  })
        	})
        }
    })
})

// 登出接口
router.get('/logout', function (req, res, next) {
  delete req.session.user;
  res.redirect('../');
})

module.exports = router;