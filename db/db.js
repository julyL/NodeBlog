
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var mongodbConfig = require('../mongodbConfig');

//连接数据库
mongoose.connect(mongodbConfig.url);

//连接成功后输出语句
mongoose.connection.on('connected',function () {
    console.log('Mongoose connect ' + mongodbConfig.url + " success");
});

//连接异常现实错误原因
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connect Error:' + err);
});

//连接断开后输出语句
mongoose.connection.on('disconnected',function () {
    console.log('Mongoose connect disconnected');
});

//导出mongoose对象
module.exports = mongoose;
