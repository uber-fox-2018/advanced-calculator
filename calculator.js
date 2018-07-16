'use strict'

class Calculator {
  //write your code here
  constructor () {
    this._number = 0
  }
  add (number) {
    this._number = this._number+number;
    return this;
  }
  subtract (number) {
    this._number = this._number-number;
    return this;
  }
  multiply (number) {
    this._number = this._number*number;
    return this
  }
  divide (number) {
    this._number = this._number/number;
    return this
  }
  square (number) {
    this._number = Math.pow(this._number,number);
    return this
  }
  squareRoot () {
    this._number = Math.sqrt(this._number)
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
