'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

var calc = new Calculator(2);
calc.add(5).multiply(3).subtract(1); //20

var calc = new Calculator(3);
calc.square(2);

var calc = new Calculator();
calc.pi();

console.log(calc);