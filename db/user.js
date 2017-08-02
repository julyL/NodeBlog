//引入之前我们创建的mongose对象
var mongoose = require('./db.js');
//创建一个schema对象
var Schema = mongoose.Schema;

//创建一个schema实例
var UserSchema = new Schema({
    username: {type:"String"},
    password: {type:"String"}
});

//利用UserSchema实例,发布一个User的model并且导出
var UserModel = mongoose.model("User", UserSchema);

var dbUser = {
    isAccountExist(data){
        return UserModel.findOne(data);
    },
    insert(data) {
        var user = new UserModel({
            username: data.username,
            password: data.password
        })
        return user.save();
    },
}

// dbUser.insert({
//     username:'libo',
//     password:'123'
// });

module.exports=dbUser;