'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let angkaPertama =  5
let kalkulator = new Calculator (angkaPertama)
console.log(kalkulator.add(6).square(2).squareRoot().result())