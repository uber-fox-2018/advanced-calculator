'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num
    this.pi = Math.PI;
  }
  add (num) {
    this.num += num
    return this
  }
  subtract (num) {
    this.num -= num
    return this
  }
  multiply (num) {
    this.num = this.num * num
    return this
  }
  divide (num) {
    this.num = this.num/num
    return this
  }
  square (num) {
    this.num = Math.pow(this.num, num)
    return this
  }
  squareRoot () {
    this.num = Math.sqrt(this.num)
    return this
  } 

  hitungLingkaran () {
    this.num = this.pi * this.num
    return this
  }

  print () {
    return `result: ${this.num}`
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
