var express = require('express'),
    mysql = require('mysql')

connection.connect(function(err) {
  if(err) {
    console.log(err.stack)
    return
  }
  console.log('connected as id: ' + connection.threadId)
})
