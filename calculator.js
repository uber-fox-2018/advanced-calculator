'use strict'

class Calculator {
  //write your code here
  constructor (firstNumber) {
    this.firstNumber = firstNumber
  }
  add (secondNumber) {
    this.firstNumber += secondNumber
    return this
  }
  subtract (secondNumber) {
    this.firstNumber -= secondNumber
    return this
  }
  multiply (secondNumber) {
    this.firstNumber *= secondNumber
    return this
  }
  divide (secondNumber) {
    this.firstNumber /= secondNumber
    return this
  }
  square (secondNumber) {
    this.firstNumber += Math.pow(this.firstNumber,secondNumber)
    return this
  }
  squareRoot () {
    this.firstNumber += Math.sqrt(this.firstNumber)
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
