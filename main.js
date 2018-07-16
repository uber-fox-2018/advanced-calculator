'use strict'

const Calculator = require("./calculator.js")

const calculators = new Calculator(5)
  .add(5)
  .multiply(10)
  .divide(10)
  .square(5)
console.log(calculators.result())

const akar = new Calculator()
  .squareRoot(100)
console.log(akar.result())

const luas_lingkaran = new Calculator()
  .luasLingkaran(9)
console.log(luas_lingkaran.result())

