'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num

  }
  add (num1) {
    this.num = this.num + num1
    return this
  }
  subtract (num2) {
    this.num = this.num - num2
    return this
  }
  multiply (num3) {
    this.num = this.num*num3
    return this
  }
  divide (num4) {
    this.num = this.num/num4
    return this
  }
  square (num5) {
    this.num = Math.pos(this.num,num5)
    return this

  }
  squareRoot (num6) {
    this.num = Math.sqrt(this.num, (1/num6))
    return this
  }
}
var calculator = new Calculator(0)
let count = calculator.add(100).subtract(20).multiply(3).divide(2).num 
console.log(count)


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator
