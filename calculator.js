'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.number = num || 0;
  }
  add (num) {
    this.number += num
    return this
  }
  subtract (num) {
    this.number -= num
    return this
  }
  multiply (num) {
    this.number *= num
    return this
  }
  divide (num) {
    this.number /= num
    console.log(typeof this)
    return this
  }
  square (num) {
    this.number = Math.pow(this.number, num)
    return this
  }
  squareRoot (num) {
    this.number = Math.sqrt(this.data)
    return this
  }

  PI(){
    this.number *= Math.PI;
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
