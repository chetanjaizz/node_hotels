var parent = require('./parent.js');


var a = parent.a;
var temp = parent.temp;
console.log(a);
var result = temp(a,5);
console.log(result);