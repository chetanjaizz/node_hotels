const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/mydb';

mongoose.connect(mongoURL,{
  useNewUrlParser : true,
  useUnifiedTopology : true
})

const db = mongoose.connection;

db.on('connected', function(){
  console.log('connected to mongodb server');
});

db.on('error', function(){
  console.log('error occured in server connection');
});

db.on('disconnected', function(){
  console.log('MongoDB disconnected from server');
});

//export database connection
module.exports = db;
 