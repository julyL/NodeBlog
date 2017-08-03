var express = require('express');
var router = express.Router();
var dbArticle = require('../../db/article.js');


router.get('/list', function(req, res, next) {
	dbArticle.getlist().sort({date:-1}).then((data)=>{
		dealData(data);
		res.render('./admin/list',{
	  		user:req.session.user,
	  		list:data
	  	});
	})
})
function dealData(data){
	data.forEach((v,i)=>{
		v.intr=v.html.replace(/<(\/?\w+)>/g,"").slice(0,100);
		var t=new Date(+v.date).toDateString().split(" ");
		v.time=t[1]+" "+t[2]+", "+t[3];
	})
}

module.exports = router;
