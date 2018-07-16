'use strict'

class Calculator {
	constructor (number = 1) {
		this.number = number;
		this.PI = 3.14;
	}

	input(number) {
		this.number = number;
		return this;
	}

	add (number) {
		`${ this.number += number}`;
		return this;
	}

	subtract (number) {
		`${ this.number -= number}`;
		return this;
	}

	multiply (number) {
		`${ this.number *= number}`;
		return this;
	}

	divide (number) {
		`${ this.number /= number}`;
		return this;
	}

	square () {
		`${ this.number = this.number * this.number}`;
		return this;
	}

	squareRoot () {
		`${ this.number = Math.sqrt(this.number) }`;
    	return this;		
	}

	print() {
		return this.number;
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