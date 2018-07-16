'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.result = num
  }
  add (number) { // perjumlahan
    this.result = this.result + number
    return this
  }
  subtract (number) { // pengurangan
    this.result = this.result - number
    return this
  }
  multiply (number) { // perkalian
    this.result = this.result * number
    return this
  }
  divide (number) { // pembagian
    this.result = this.result / number
    return this
  }
  square (number) { // kuadrat 
    this.result = Math.pow(this.result,number)
    return this
  }
  squareRoot () { // akar kuadrat
    this.result = Math.sqrt(this.result)
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
