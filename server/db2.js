var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/test2');

db.on('error', function (error) {
  console.log(error)
})

//schema 结构
var mongooseSchema = new mongoose.Schema({
  username: {type: String, default: 'admin'},
  password: {type: String, default: 'admin'}
})

//添加mongoos 实例方法
mongooseSchema.methods.findByUserName = function (username, callback) {
  return this.model('moogoose').find({username: username}, callback);
}

//定义model
var mongooseModel = db.model('mongoose', mongooseSchema);
