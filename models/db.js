var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'learn_mysql'
});

connection.connect(function(err) {
  if (err) throw err
  console.log('connect success!')
  // connection.query('create table goods ( id int not null, name varchar(100) not null, price float(10,2) not null, create_time timestamp not null )', function(err) {
  //   if(err) throw err
  //   console.log('create table success')
  //   connection.end()
  // })
})

module.exports = connection;
