const assert = require('chai').assert;
//const app = require('../server');
const sayHello = require('../server').sayHello;
const addNumbers = require('../server').addNumbers;

describe('App' , function(){
	//Return hello when string match
	it('app should return hello ' , function(){
		let result = sayHello()
		assert.equal(result, 'hello');
	});

	//return string
	it('sayHello should return type string' , function(){
		let result = sayHello();
		assert.typeOf(result , 'string');
	});

	//return messges when addition greater than 5
	it('Value should be above 5' , function(){
		let result = addNumbers(5,10);
		assert.isAbove(result,5);
	});

	//
	it('Value should return type return number' , function(){
		let result = addNumbers(5,10);
		assert.typeOf(result,'number');
	})
})