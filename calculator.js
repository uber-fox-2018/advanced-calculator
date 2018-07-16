'use strict'

class Calculator {
  //write your code here
  constructor (number = 0) {
    this.number = number
  }

  add (value) {
    this.number = this.number + value;
    return this;
  }

  subtract (value) {
    this.number = this.number - value;
    return this
  }

  multiply (value) {
    this.number = this.number * value;
    return this

  }

  divide (value) {
    this.number = this.number / value;
    return this
  }

  square (value) {
    this.number = Math.pow(value, 2);
    return this
  }

  squareRoot (value) {
    this.number = Math.sqrt(value)
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

// let mathTool = new Calculator ()
// console.log(Calculator.square())

module.exports = Calculator
