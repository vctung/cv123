var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '166.62.10.225',
  user     : 'thlinh',
  password : 'linh@123',
  database : 'cv123vnv2'
});
 
module.exports = connection; 