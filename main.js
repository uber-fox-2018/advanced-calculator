'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here

var calculate = new Calculator (1)

.add(5)
.subtract(1)
.divide(5)
.multiply(4)
.square(2)
.squareRoot(3)
.hitungLingkaran()

console.log(calculate.print())
