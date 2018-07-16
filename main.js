'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let calculate = new Calculator

console.log(calculate.square(8).subtract(1).multiply(20))

