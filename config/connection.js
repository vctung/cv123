var mysql = require('mysql');
// var Common = require('./common');
// var conf = Common.conf;
// var logger = Common.logger;

var connectionState = false;
var connection = mysql.createConnection({
  host     : '166.62.10.225',
  user     : 'thlinh',
  password : 'linh@123',
  database : 'cv123vnv2',
  insecureAuth: true
});
connection.on('close', function (err) {
  console.log('mysqldb conn close');
  connectionState = false;
});
connection.on('error', function (err) {
  console.log('mysqldb error: ' + err);
  connectionState = false;
});

function attemptConnection(connection) {
  if(!connectionState){
    connection = mysql.createConnection(connection.config);
    connection.connect(function (err) {
      // connected! (unless `err` is set)
      if (err) {
        console.log('mysql db unable to connect: ' + err);
        connectionState = false;
      } else {
        console.log('mysql connect!');

        connectionState = true;
      }
    });
    connection.on('close', function (err) {
      console.log('mysqldb conn close');
      connectionState = false;
    });
    connection.on('error', function (err) {
      console.log('mysqldb error: ' + err);

      if (!err.fatal) {
        //throw err;
      }
      if (err.code !== 'PROTOCOL_CONNECTION_LOST') {
        //throw err;
      } else {
        connectionState = false;
      }

    });
  }
}
attemptConnection(connection);

var dbConnChecker = setInterval(function(){
  if(!connectionState){
    console.log('not connected, attempting reconnect');
    attemptConnection(connection);
  }
}, 3000);

// Mysql query wrapper. Gives us timeout and db conn refreshal! 
var queryTimeout = 3000;
var query = function(sql,params,callback){
  if(connectionState) {
    // 1. Set timeout
    var timedOut = false;
    var timeout = setTimeout(function () {
      timedOut = true;
      callback('MySQL timeout', null);
    }, queryTimeout);

    // 2. Make query
    connection.query(sql, params, function (err, rows) {
      clearTimeout(timeout);
      if(!timedOut) callback(err,rows);
    });
  } else {
    // 3. Fail if no mysql conn (obviously)
    callback('MySQL not connected', null);
  }
}

// And we present the same interface as the node-mysql library!
// NOTE: The escape may be a trickier for other libraries to emulate because it looks synchronous
exports.query = query;
exports.escape = connection.escape;


// var mysql = require('mysql');

// var pool = mysql.createPool({
//     connectionLimit : 100, //important
//     host     : '166.62.10.225',
//     user     : 'thlinh',
//     password : 'linh@123',
//     database : 'cv123vnv2',
//     debug    :  false
// });

// module.exports = {
//     query: function(){
//         //var sql_args = [];
//         var args = [];
//        // console.log("ARGUMENTS");
//         //console.log(arguments);
//         for(var i=0; i<arguments.length; i++){
//             args.push(arguments[i]);
//         }
//         var callback = args[args.length-1]; //last arg is callback
//         pool.getConnection(function(err, connection) {
//             if(err) {
//                // connection.release();
//                 console.log("Get Connection Error "  + err);
//                 return callback(err);
//             }
            
//             console.log('connected as id ' + connection.threadId);
//             // if(args.length > 2){
//             //     sql_args = args[1];
//             // }
//             connection.query(args[0], function(err, results) {
//                 connection.release(); // always put connection back in pool after last query
//                 if(err){
//                     console.log(err);
//                     return callback(err);
//                 }
//                 callback(null, results);
//             });
            
//             connection.on('error', function(err) {      
//                 console.log("Connection Error " + err);
//                 return callback(err);   
//             });
//       });
//     }
// };

// var mysql = require('mysql');

// var db_config = {
//   host     : '166.62.10.225',
//   user     : 'thlinh',
//   password : 'linh@123',
//   database : 'cv123vnv2'
// };

// var connection;

// function handleDisconnect() {
//   connection = mysql.createConnection(db_config); // Recreate the connection, since
//                                                   // the old one cannot be reused.

//   connection.connect(function(err) {              // The server is either down
//     if(err) {                                     // or restarting (takes a while sometimes).
//       console.log('error when connecting to db:', err);
//       setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//     }                                     // to avoid a hot loop, and to allow our node script to
//     console.log('connected as id ' + connection.threadId);
//   });                                     // process asynchronous requests in the meantime.
//                                           // If you're also serving http, display a 503 error.
//   connection.on('error', function(err) {
//     console.log('db error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//       handleDisconnect();                         // lost due to either server restart, or a
//     } else {                                      // connnection idle timeout (the wait_timeout
//       throw err;                                  // server variable configures this)
//     }
//   });
// }

// handleDisconnect();
 
// module.exports = connection; 