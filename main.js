'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
let calc1 = new Calculator(2); //2
calc1.square(8) //2^8 = 256
     .squareRoot() //sqrt 256 = 16
     .add(8) //16 + 8 = 24
     .subtract(20) //24 - 20 = 4
     .multiply(Calculator.PI) //4 * 3 = 12
     .divide(2);

     
console.log(calc1['data']);