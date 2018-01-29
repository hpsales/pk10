"use strict";
const LoginModel = require('./db').LoginModel;
const ArticleModel = require('./db').ArticleModel;
const express = require('express');
const router = express.Router();


/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount', (req, res) => {
  // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  let newAccount = {
    account: req.body.params.account,
    password: req.body.params.password
  };
  LoginModel.createNewAccount(newAccount, (err, data) => {
    if (err) {
      console.log('创建失败');
      res.send(err)
    } else {
      console.log('创建成功');
      console.log(data);
      res.send(data)
    }
  })
});
// 获取已有账号接口
router.get('/api/login/getAccount', (req, res) => {
  // 通过模型去查找数据库
  LoginModel.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
// 登录验证
router.post('/api/login/checkAccount', (req, res) => {
  // 通过模型去查找数据库
  let loginAccount = {
    account: req.body.params.account,
    password: req.body.params.password
  };
  console.log(loginAccount)
  LoginModel.findUser(loginAccount, (err, data) => {
    if (err) {
      console.log('查找失败');
      res.send(err)
    } else {
      if (data == '') {
        res.send({"ERROK": 0})
      } else {
        res.send({"ERROK": 1})
      }
    }
  })
});


// 文章接口
router.post('/api/article/addArticle', (req, res) => {
  let article = {
    title: req.body.params.title,
    time: req.body.params.time,
    context: req.body.params.context
  };
  ArticleModel.addArticle(article, (err, data) => {
    if (err) {
      console.log('添加失败');
      res.send(err)
    } else {
      console.log('添加成功');
      console.log(data)
      res.send(data)
    }
  })
});

router.get('/api/article/showArticle', (req, res) => {
  ArticleModel.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});


module.exports = router;