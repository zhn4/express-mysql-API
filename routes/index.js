var express = require('express');
var router = express.Router();
var connection = require('../models/db.js')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
module.exports = function(app) {
  app.get('/', function(req, res, next) {
    res.render('index', {
      title: 'new method'
    })
  })

  app.get('/goods', function(req, res, next) {// 获取货物列表
    connection.query('select * from goods', function(err, results, fields) {
      if(err) throw err
      res.json({
        ok: true,
        data: results
      })
    })
  })

  app.post('/add', function(req, res, next) {// 增加货物
    connection.query('insert into goods (id, name, price) values (?, ?, ?)', [req.body.id, req.body.name, req.body.price], function(err, results) {
      if(err) throw err
      res.json({
        ok: true,
        data: {
          msg: 'success'
        }
      })
    })
  })

  app.delete('/:name', function(req, res, next) {// 删除货物
    connection.query('delete from goods where name=?', [req.params.name], function(err, results) {
      if(err) throw err
      res.json({
        ok: true,
        data: {
          msg: 'success'
        }
      })
    })
  })

  app.get('/goodsdetails/:name', function(req, res, next) {// 按名字查货物
    connection.query('select * from goods where name=?', [req.params.name], function(err, results) {
      if(err) throw err
      res.json({
        ok: true,
        data: results
      })
    })
  })

  app.put('/:name', function(req, res, next) {
    connection.query('update goods set price=? where name=?', [req.body.price, req.params.name], function(err, results) {
      if(err) throw err
      res.json({
        ok: true,
        data: {
          msg: 'success'
        }
      })
    })
  })


};

// module.exports = router;
