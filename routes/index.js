var express = require('express');
var router = express.Router();
var dbArticle = require('../db/article.js');

router.get('/', function(req, res, next) {
	dbArticle.getlist().then((data)=>{
		dealData(data);
		res.render('index',{
	  		user:req.session.user,
	  		list:data
	  	});
	})
});

function dealData(data){
	data.forEach((v,i)=>{
		v.intr=v.content.replace(/<(\w+)>(.*?)<\/\1>/g,"$2").slice(0,100);
		var t=new Date(+v.date).toDateString().split(" ");
		v.time=t[1]+" "+t[2]+", "+t[3];
	})
}


module.exports = router;
