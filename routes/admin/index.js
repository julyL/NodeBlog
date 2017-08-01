var express = require('express');
var routerPage = {
    login: require('./login'),   
    register: require('./register'),   
    // article: require('./article'),
    // write: require('./write')
}
var router = express.Router();


Object.keys(routerPage).forEach((val,index)=>{
	router.use('/',routerPage[val])
})
     

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session&&req.session.user){
  		res.render('admin', { title: 'Hello' });
  }else{
  	  res.redirect('/admin/login');
  }
});

// router.use('',)
module.exports = router;