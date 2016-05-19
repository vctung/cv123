var mysql = require('mysql');

var pool = mysql.createPool({
    host     : '166.62.10.225',
    user     : 'thlinh',
    password : 'linh@123',
    database : 'cv123vnv2',
    port     : 3306
});

module.exports = {
    query: function(){
        //var sql_args = [];
        var args = [];
       // console.log("ARGUMENTS");
        //console.log(arguments);
        for(var i=0; i<arguments.length; i++){
            args.push(arguments[i]);
        }
        var callback = args[args.length-1]; //last arg is callback
        pool.getConnection(function(err, connection) {
            if(err) {
                console.log(err);
                return callback(err);
            }
            // if(args.length > 2){
            //     sql_args = args[1];
            // }
            connection.query(args[0], function(err, results) {
                connection.release(); // always put connection back in pool after last query
                if(err){
                    console.log(err);
                    return callback(err);
                }
                callback(null, results);
            });
      });
    }
};

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