//引入之前我们创建的mongose对象
var mongoose = require('./db.js');
//创建一个schema对象
var Schema = mongoose.Schema;

//创建一个schema实例
var ArticleSchema = new Schema({
    content: {type:"String"},
    html: {type:"String"},
    title: {type:"String"},
    date: {type:"Date"},
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
            html:data.html,
            title:data.title,
            date: data.date
        })
        return article.save();
    },
    update(data){
        return ArticleModel.update({_id:data.articleId},{
            title:data.title,
            content:data.content,
            html:data.html,
            date:data.date
        })
    },
    remove(data){
        return ArticleModel.remove(data)
    },
    getlist(){
        return ArticleModel.find({})
    },
    getArticle(data){
         return ArticleModel.findOne(data);
    }
}


module.exports=dbArticle;