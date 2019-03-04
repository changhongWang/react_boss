const express = require('express')
const mongoose = require('mongoose')
// 链接mongo db 并使用imooc 集合
const DB_URL = 'mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
  console.log('mongo connect success')
})

// 类似于mysql的表，mongo里有文档、字段的概念
// 类似于insert一个表
// create, remove, update分别用于增、删、改
// Find和findOne用来查询数据
const User = mongoose.model('user', new mongoose.Schema({
  user: {type: String, required: true},
  age: {type: Number, required: true}
}))
// User.create({user: 'changhong', age: 18})

// 新建app
const app = express();

app.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>')
});
app.get('/data', function(req, res) {
  User.find({}, function(err, doc) {
    res.json(doc)
  });
});
app.get('/insert', function(req, res) {
  User.create({user: `changhong123`, age: 18})
});
app.get('/delete', function(req, res) {
  User.remove({user: 'changhong'}, function(err, doc) {
    res.json(doc);
  })
});
app.get('/modify', function(req, res) {
  User.update({user: 'changhong123'}, {'$set': {'user':'changhong.wang'}}, function(err, doc) {
    res.json(doc);
  })
});
app.listen(9093, function() {
  console.log('Node App start at port 9093')
})
