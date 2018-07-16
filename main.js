'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let calculator = new Calculator(4)
console.log(calculator.add(2).subtract(3).square(2).firstNumber);
