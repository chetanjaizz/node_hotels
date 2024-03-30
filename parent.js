console.log("Hii i am parent file");

var a = 10;
var temp = function(a,b){
  return a + b;
}

module.exports = {
  a,
  temp
}