const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({

  dishName : {
    type : String,
    required :true
  },
  description : {
    type : String,
    
  },
   price: {
    type : Number,
    required :true
  },
  ingredients: {
    type: [String],
    default: [],
    required: true
  },
  calories: {
    type: Number,
    required: true
  }




})
const menu = mongoose.model('menu', menuSchema);
module.exports = menu;