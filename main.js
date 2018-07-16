'use strict'

const Calculator = require("./calculator.js")

// execute function on calculator.js in here
const hitung = new Calculator()

hitung.getNumber(5)
hitung.getNumber(5)

console.log(hitung.tambah().total)  // prosesnya 5 + 5 outputnya 10
console.log(hitung.kurang().total)  // prosesnya 5 - 5 outputnya 0
console.log(hitung.kali().total)    // prosesnya 5 * 5 outputnya 25
console.log(hitung.bagi().total)    // prosesnya 5 / 5 outputnya 1
console.log(hitung.pangkat(3).total)// prosesnya 5 * 5 = 25, 25 * 25 = 625, outputnya 625



// console.log(hitung.getNumber(9).akar())// 3
