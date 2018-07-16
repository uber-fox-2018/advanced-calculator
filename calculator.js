'use strict'

class Calculator {
  //write your code here
  constructor (input) {
    this._number = input;
    this._pi = Math.PI;
  }
  add (input) {
    this._number += input;
    return this;
  }
  subtract (input) {
    this._number -= input;
    return this;
  }
  multiply (input) {
    this._number *= input
    return this;
  }
  divide (input) {
    this._number /= input;
    return this;
  }
  square (input) {
    this._number = Math.pow(this._number, input);
    return this;
  }
  squareRoot () {
    this._number = Math.sqrt(this._number);
    return this;
  }
  circleArea(input){
    this._number = this._pi * this.square(input)
    return this;
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
