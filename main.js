'use strict'

const Calculator = require("./calculator.js")

let advanceCalculator = new Calculator(2)
advanceCalculator.add(1).multiply(2).divide(3).square(2).squareRoot().luasLingkaran()
console.log(advanceCalculator.result);

// execute function on calculator.js in here
