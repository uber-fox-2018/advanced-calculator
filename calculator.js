'use strict'
// #### WOEK FLOW #### //
/* 
1) pada constructor buat variable numbers berupa array --> numbers = []
2) pada constructor buat variable result --> result = 0, result merupakan numbers yang sudah di operasikan 
3) function addNumber (param) --> berfungsi untuk menambahkan input angka pada numbers[], maka dari itu isi dari function add
                       berupa this.numbers.push(param)

## OPERATOR             
4) function subtract ()   --> merupakan fungsi untuk mengurangi numbers
5) function multply ()    --> merupakan fungsi untuk mengalikan numbers
6) function divide ()     --> merupakan fungsi untuk membagi numbers
7) function square ()     --> merupakan fungsi untuk pangkat numbers
8) function squareRoot () --> merupakan fungsi untuk memangkatkan numbers
9) function add()         --> merupakan fungsi untuk menambah numbers



*/
class Calculator {
  //write your code here
  constructor (inputAngka) {
    this.angkaPertama =  inputAngka
    this.hasil = 0
  }
  
  
  add (inputAngka){
    let number = this.angkaPertama
    this.hasil += number + inputAngka
    this.angkaPertama =0
    return this
    
  }
  // untuk mengurangi input dengan numbers
  subtract (inputAngka) {
    let number = this.angkaPertama
    this.hasil -= number + inputAngka
    this.angkaPertama =0
    return this
  }

  // untuk tambah input dengan numbers
  multiply (inputAngka) {
    let number = this.angkaPertama
    this.hasil *= number + inputAngka
    this.angkaPertama =0
    return this
  }

  // untuk bagi input dengan numbers
  divide (inputAngka) {
    let number = this.angkaPertama
    this.hasil /= number + inputAngka
    this.angkaPertama =0
    return this
  }

  // untuk kali input dengan numbers
  square (inputAngka) {
    let number = this.angkaPertama
    this.hasil = Math.pow(this.hasil,inputAngka)
    this.angkaPertama =0
    return this
  }

  // untuk akar input dengan numbers
  squareRoot (inputAngka) {
    let number = this.angkaPertama
    this.hasil = Math.sqrt(this.hasil)
    this.angkaPertama =0
    return this
  }

  result (){
    return this.hasil
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
