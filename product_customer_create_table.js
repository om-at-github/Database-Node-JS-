// Create two tables in MYSQL DB product(pcode,pname,amount)and customer(cid,cname,pcode).
//Find customer names who purchased television.
// node product_customer_create_table.js

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"mysql",
    database:"college",
    port : '3306'
});

con.connect(function (err){
    if(err) throw err;
    console.log("Connected to the Database!");
    var sql = "CREATE TABLE product(pcode int,pname text,amount int,PRIMARY KEY(pcode))";
    //var sql = "CREATE TABLE customer(cid int,cname text,pcode int,PRIMARY KEY(cid))";

    con.query(sql ,function (err, result){
        if(err) throw err;
        console.log("Table with name product created successfully...");
       
    });
});