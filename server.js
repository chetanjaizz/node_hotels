var express = require('express');
var app = express();
const db = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');
app.get('/', function(req, res){
  res.send("hello i am here for you !!!!")
}
)

app.use('/menu', menuRoutes);
app.use('/Person' , personRoutes);
app.listen(3000);


