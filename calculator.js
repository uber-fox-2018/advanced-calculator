'use strict'

class Calculator {
  
  constructor () {
    this.prosess = "0"
    this.hasil = 0
  }
  input(str) {
    this.prosess += str
    return this
  }
  add (num) {
    this.input(' + '+num)
    this.hasil += num
    return this
  }
  subtract (num) {
    this.input(' - '+num)
    this.hasil -= num
    return this
  }
  multiply (num) {
    this.input(' x '+num)
    this.hasil *= num
    return this
  }
  divide (num) {
    this.input(' / '+num)
    this.hasil /= num
    return this
  }
  square (num) {
    this.input(' x '+num)
    this.hasil **= num
    return this
  }
  squareRoot (num) {
    this.input(' + ankar pangkat dari ' + num)
    this.hasil = Math.sqrt(num)
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
