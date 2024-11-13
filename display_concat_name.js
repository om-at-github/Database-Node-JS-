const prompt = require('prompt-sync')();
const concatname = require('./display_name')

firstname = prompt('Enter the first name - ');
lastname = prompt('Enter the Last name - ');

concated_name = concatname(firstname,lastname)
console.log("The full name is " + concated_name); 

