// Program to display all the records available in the table student in table format.//
// show_record_format.js//

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "college",
    port: 3306
});

con.connect(function(err){
    if (err) throw err;
    con.query("SELECT * FROM student",function(err,result,fields){
        if(err) throw err;
        // Showing records

        console.log("roll no | name | city");
        console.log("----------------------------");

        //Code to iterate through an array
        Object.keys(result).forEach(function(key){
            var record = result[key]; //Storing each row and accessing it
            console.log(record.stud_roll,"|", record.stud_name,"|", record.stud_city);
        });
    });
});