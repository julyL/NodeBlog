var express = require('express');
var router = express.Router();
var dbUser = require('../../db/user.js');
var checkLogin = require('../../middleware/checkStatus.js').checkLogin;

router.get('/register', checkLogin);
router.get('/register', function(req, res, next) {
    res.render('./admin/register');
})

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
        		 res.redirect("/")
        	})
        }
    })
})

module.exports = router;