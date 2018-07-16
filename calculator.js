'use strict'

class Calculator {
  //write your code here
  constructor (number = 0) {
    this.data = number;
  }
  add (number) {
    this.data += number;
    return this;
  }
  subtract (number) {
    this.data -= number;
    return this;
  }
  multiply (number) {
    this.data *= number;
    return this;
  }
  divide (number) {
    this.data /= number;
    return this;
  }
  square (number) {
    this.data = Math.pow(this.data, number);
    return this;
  }
  squareRoot () {
    this.data = Math.sqrt(this.data);
    return this;
  }
  static get PI() {
    return Math.PI;
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
