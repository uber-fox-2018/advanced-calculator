'use strict'

const Calculator = require("./calculator.js")


var calc = new Calculator()

console.log(calc.add(3).subtract(1).multiply(5).divide(2).result)
console.log(calc.square(5).squareRoot(3).result)
console.log(calc.circle(5).result)