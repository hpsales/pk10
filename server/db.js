// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/test');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
  account : String,
  password : String
});

const articleSchema = mongoose.Schema({
  title: String,
  time: String,
  context: String
})

//添加mongoose的实例方法

articleSchema.statics.addArticle = function (doc, callback) {
  return this.model('Article').create(doc, callback)
}


loginSchema.statics.createNewAccount= function(doc, callback) {
  return this.model('User').create(doc, callback);
}
loginSchema.statics.findUser= function({account: account,password: password}, callback) {
  return this.model('User').find({account: account,password: password}, callback);
}

/************** 定义模型Model **************/


const Models = {
  LoginModel: mongoose.model('User',loginSchema),
  ArticleModel: mongoose.model('Article',articleSchema)
}

/*LoginModel.findByUserName({account: "superx",password: "123"},function (err,data) {
  if(err){
    console.log(err);
  }else {
    console.log(data+'333333');
  }
})*/
module.exports = Models;