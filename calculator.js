'use strict'

class Calculator {
  constructor (number) {
    this.hasil = number
    this.phi = Math.PI
  }

  add (number) {
    this.hasil += number
    return this
  }

  subtract (number) {
    this.hasil -= number
    return this
  }

  multiply (number) {
    this.hasil *=  number
    return this
  }

  divide (number) {
    this.hasil /= number
    return this
  }

  square (number) {
    this.hasil = Math.pow(this.hasil, number)
    return this
  }

  squareRoot (number) {
    this.hasil = Math.sqrt(number)
    return this
  }

  luasLingkaran (jariJari) {
    this.hasil = (this.phi * Math.pow(jariJari, 2)).toFixed(2)
    return this
  }

  result () {
    return `Hasil: ${this.hasil}`
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
