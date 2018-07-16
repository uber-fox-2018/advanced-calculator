"use strict";

class Calculator {
  //write your code here
  constructor(num) {
    this.num = num;
    this.phi = 3.14;
  }
  add(input) {
    this.num = this.num + input;
    return this;
  }
  subtract(input) {
    this.num = this.num - input;
    return this;
  }
  multiply(input) {
    this.num = this.num * input;
    return this;
  }
  divide(input) {
    this.num = this.num / input;
    return this;
  }
  square(input) {
    this.num = Math.pow(this.num, input);
    return this;
  }
  squareRoot(input) {
    this.num = Math.sqrt(this.num);
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

module.exports = Calculator;
