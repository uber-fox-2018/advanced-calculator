'use strict'

const Calculator = require("./calculator.js")

let calculate = new Calculator(1)
console.log(calculate.add(3).divide(2)._number)
