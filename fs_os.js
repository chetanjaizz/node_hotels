var fs = require('fs');
var os = require('os');
var user = os.userInfo();
console.log(user);
fs.appendFile('chetan.txt', "hello " + user.username +"\n", () => {
  console.log("file is created"); 
})
 