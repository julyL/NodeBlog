//引入之前我们创建的mongose对象
var mongoose = require('./db.js');
//创建一个schema对象
var Schema = mongoose.Schema;

//创建一个schema实例
var ArticleSchema = new Schema({
    content: {type:"String"},
    title: {type:"String"},
    date: {type:"String"},
});

//利用ArticleSchema实例,发布一个Article的model并且导出
var ArticleModel = mongoose.model("Article", ArticleSchema);

var dbArticle = {
    isAccountExist(data){
        return ArticleModel.findOne(data);
    },
    insert(data) {
        var article = new ArticleModel({
            content: data.content,
            title:data.title,
            date: data.date
        })
        return article.save();
    },
    getlist(){
        return ArticleModel.find({},function(data){
            console.log(data)
        })
    }
}

ArticleModel.find(null,function(data){
            console.log(data)
        })

module.exports=dbArticle;