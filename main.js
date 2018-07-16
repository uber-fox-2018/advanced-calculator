'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

var calculation= new Calculator(4)  //Input angka yg hendak dieksekusi
console.log(calculation             //Input needed parameters    
.add (6)
.subtract (2) 
.multiply (6)
.divide (2)
.square ()
.squareRoot ()
)