'use strict'

class Calculator {
  //write your code here
  constructor(num) {
    this.result = num
    this.phi = 3.14
  }

  add(num) {
    this.result += num
    return this
  }

  substract(num) {
    this.result -= num
    return this
  }

  multiply(num) {
    this.result *= num
    return this
  }

  divide(num) {
    this.result /= num
    return this
  }

  square(pow) {
    this.result = Math.pow(this.result, pow)
    return this
  }

  squareRoot() {
    this.result = Math.sqrt(this.result)
    return this
  }

  luasLingkaran() {
    this.result = this.phi * Math.pow(this.result, 2)
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
