'use strict'

class Calculator {
  //write your code here
  constructor (){
    this.a = 0
    this.total = 0
  }

  add (num=0) {
    this.a = num;
    this.total += this.a;
    return this;
  }

  subtract (num=0) {
    this.a = num;
    this.total -= this.a;
    return this;
  }

  multiply (num=0) {
    this.a = num;
    this.total *= this.a;
    return this;
  }
  divide (num=0) {
    this.a = num;
    this.total /= this.a;
    return this;
  }
  square () {
    this.a = this.total;
    this.total *= this.a;
    return this;
  }
  squareRoot () {
    this.a= this.total;
    this.total = Math.sqrt(this.a);
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
let calculator = new Calculator();


module.exports = Calculator
