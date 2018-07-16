'use strict'

const Calculator = require("./calculator.js")

var count = new Calculator(4)

console.log(count.add(3).multiply(7).subtract(19).divide(10).square(3).result)
console.log(count.add(5).result)

// execute function on calculator.js in here
