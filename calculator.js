'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this._hasil = num
  }

  add (num) {
    this._hasil = this._hasil + num
    return this
  }

  subtract (num) {
    this._hasil = this._hasil - num
    return this
  }

  multiply (num) {
    this._hasil = this._hasil * num
    return this
  }

  divide (num) {
    this._hasil = this._hasil / num
    return this
  }

  square (num) {
    this._hasil = Math.pow(this._hasil,num)
    return this

  }

  squareRoot () {
    this._hasil = Math.sqrt(this._hasil)
    return this
  }

  mathPI(){
    this._hasil = Math.PI*this._hasil
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

var kalkulator = new Calculator(5)
kalkulator.add(5).subtract(6).divide(2).multiply(4).add(1).squareRoot().square(2).mathPI()
console.log(kalkulator._hasil);




module.exports = Calculator
