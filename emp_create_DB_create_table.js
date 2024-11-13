// create a node.js application that demonstrate create database emp DB and employee table 
//(eid,ename,salary) in MYSQL.
// node emp_create_DB_create_table.js

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"mysql",
    database:"emp_DB",
    port : '3306'
});

con.connect(function (err){
    if(err) throw err;
    console.log("Connected to the Database!");
    var sql = "CREATE TABLE student(sid int,sname text,percentage int,PRIMARY KEY(sid))";

    con.query(sql ,function (err, result){
        if(err) throw err;
        console.log("Table with name student created successfully...");
    });
});