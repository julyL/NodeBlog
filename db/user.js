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
var User = mongoose.model("User", UserSchema);

var dbUser = {
    isRegister(data){
        return User.findOne({username:data.username,password:data.password});
    },
    insert(data) {
        var user = new User({
            username: data.username,
            password: data.password
        })
        user.save((err, res) => {
            if (err) {
                console.log("Error: " + err);
            } else {
                console.log("Success Res: " + res)
            }
        })
    },
}

module.exports=dbUser;