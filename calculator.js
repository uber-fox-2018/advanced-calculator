'use strict'

class Calculator {

  constructor () {
    this.phi = 3.14
    this.result = 0
  }

  //  penjumlahan
  add (num) {
    this.result += num
    
    return this
  }

  //  pengurangan
  subtract (num) {
    this.result -= num
    
    return this
  }

  //  perkalian
  multiply (num) {
    this.result *= num
    
    return this
  }

  //  pembagian
  divide (num) {
    this.result /= num
    
    return this
  }

  //  akar
  square (num) {
    this.result = Math.sqrt(num * num)
    
    return this
  }

  //  pangkat
  squareRoot (num) {
    this.result = Math.pow(num, num)

    return this
  }
  
  //  lingkaran
  circle(num){
    this.result = (num * num) / this.phi

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
