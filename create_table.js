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
    var sql = "CREATE TABLE student1(stud_roll int,stud_name text,stud_city text,percentage int,PRIMARY KEY(stud_roll))";

    con.query(sql ,function (err, result){
        if(err) throw err;
        console.log("Table with name student created successfully...");
    });
});