// create a node.js application that demonstrate create database emp DB and employee table 
//(eid,ename,salary) in MYSQL

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
con.query("CREATE DATABASE emp_DB",function(err,result) {
    if(err) throw err;
    console.log("Database with name emp_DB created successfully...");
});
});