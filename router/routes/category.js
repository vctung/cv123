var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var connection = require("../../config/connection");

// GET api/popularcategories
router.get('/popularcategories', function (req, res) {
	var query = "SELECT * FROM ??";
	var table = ["six_job_category_detail_popular"];
	query = mysql.format(query,table);
	connection.query(query, function(err, results){
		if(err){
			console.log(err);
		}
		else{
			res.json(results);
		}
  	});
     
	
	// // connection.query(query,function(err,rows){
	// // 	if (err) throw err;		
	// // 	res.json(rows);	
	// // });
	// connection.query(query, function(err, rows){
    // 	if(err){
    //   		console.log(err);
    // 	}
    // 	else{
    //   		res.json(rows);	
    // 	}
  	// });
});

// GET api/categories
router.get('/categories', function (req, res) {    
	var query = "SELECT * FROM ??";
	var table = ["user"];
	query = mysql.format(query,table);
	connection.query(query,function(err,rows){
		res.json(rows);		
	});
});

// POST api/categories
router.post("/categories",function(req,res){
	// var query = "INSERT INTO ??(??,??) VALUES (?,?)";
	// var table = ["user_login","user_email","user_password",req.body.email,md5(req.body.password)];
	// query = mysql.format(query,table);
	// connection.query(query,function(err,rows){
	// 	if(err) {
	// 		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	// 	} else {
	// 		res.json({"Error" : false, "Message" : "User Added !"});
	// 	}
	// });
});

router.get("/categories/:user_id",function(req,res){
	var query = "SELECT * FROM ?? WHERE ??=?";
	var table = ["user","id",req.params.user_id];
	query = mysql.format(query,table);
	connection.query(query,function(err,rows){
		res.json(rows);
		// if(err) {
		// 	res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		// } else {
		// 	res.json({"Error" : false, "Message" : "Success", "Users" : rows});
		// }
	});
});
	
router.put("/categories",function(req,res){
	// var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
	// var table = ["user_login","user_password",md5(req.body.password),"user_email",req.body.email];
	// query = mysql.format(query,table);
	// connection.query(query,function(err,rows){
	// 	if(err) {
	// 		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	// 	} else {
	// 		res.json({"Error" : false, "Message" : "Updated the password for email "+req.body.email});
	// 	}
	// });
});
		
module.exports = router;