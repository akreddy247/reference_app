
//Importing your own files
const greeting = require("./services/greetings.js");

//Import from npm
//npm init if this is first node module
//npm install validator@13.1.1 (sample npm command to install)
const validator = require('validator');


//Usage of the imported code from above
console.log('hello');
console.log(greeting());

console.log(validator.isEmail("anil@yahoo.com"));