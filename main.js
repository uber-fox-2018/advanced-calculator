'use strict'

const Calculator = require("./calculator.js")

let cl = new Calculator();

console.log(cl.input(9).print());
console.log(cl.input(9).add(5).print());
