//include mysql module
var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "mysql",
port: '3306'
});

//Making connection to database
con.connect(function(err){
if(err) throw err;
console.log("Connected to the Database!");
con.query("CREATE DATABASE college",function(err,result) {
    if(err) throw err;
    console.log("Database with name college created successfully...");
});
});