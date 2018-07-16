'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num= num
    
  }
  add (param) {
    var result= this.num + param
    this.num= result
    return this
  }
  subtract (param) {
    var result= this.num - param
    this.num= result
    return this
  }
  multiply (param) {
    var result= this.num * param
    this.num= result
    return this
  }
  divide (param) {
    var result= this.num / param
    this.num= result
    return this
  }
  square () {
    var result= this.num * this.num
    this.num= result
    return this
  }
  squareRoot () {
    var result= Math.sqrt(this.num)
    this.num= result
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
