'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num;
  }
  add (number) {
    this.num += number
    return this
  }
  subtract (number) {
    this.num -= number
    return this
  }
  multiply (number) {
    this.num *= number
    return this
  }
  divide (number) {
    this.num /= number
    return this
  }
  square (number) {
    this.num = Math.pow(this.num,number)
    return this
  }
  squareRoot (number) {
    this.num = Math.sqrt(this.num)
    return this
  }
}

let calculator = new Calculator(10)
let cal = calculator.add(9).subtract(4).multiply(7).num

console.log(cal);
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator

