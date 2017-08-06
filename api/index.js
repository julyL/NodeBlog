var express = require('express');
var apiRouter = express.Router();

var apiArticle=require('./article');
var apiUser=require('./user');

//  '/api' 路径下注册接口 
apiRouter.use('/api',apiArticle)
apiRouter.use('/api',apiUser)

module.exports=apiRouter;