// program to insert record in table student. //

//include Prompt-sync module
const prompt = require ('prompt-sync') ();

//include mysql module
var mysql = require('mysql');

//create a connection variable with the required details
var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"mysql",
    database: "college",
    port: 3306
});

// Make connection to the database
con.connect (function(err){
    if(err) throw err;

    //if connection is successful
    console.log("Connected!");

    //Accepting the user Input from the user
    const roll = prompt ('Enter roll number:');
    const name = prompt ('Enter Student name:');
    const city = prompt('Enter city:');

    //Designing Dynamic Query based on the inputs received from the user 
    var sql = "INSERT INTO student (stud_roll,stud_name,stud_city)VALUES ("+ Number(roll) +",'" + name +"','"+ city +"')";

    con.query(sql,function(err,result){
        if(err) throw err;
        // if there is no error , you have the result 
        console.log("1 record successfully inserted in the table");
    });
});