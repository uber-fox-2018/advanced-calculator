  'use strict'

class Calculator {
  //write your code here
  constructor (num = 0) {
    this.result = num
  }
  add (number) {
    this.result += number
    return this
  }
  subtract (number) {
    this.result -= number
    return this
  }
  multiply (number) {
    this.result *= number
    return this
  }
  divide (number) {
    this.result /= number
    return this
  }
  square (number) {
    this.result = Math.pow(this.result, number)
    return this
  }
  squareRoot () {
    this.result = Math.sqrt(this.result)
    return this
  }
  pI(){
    this.result = this.result * 3.14
    return this
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
var calc = new Calculator(8)
// console.log(calc.add())
console.log(calc.pI().result)
