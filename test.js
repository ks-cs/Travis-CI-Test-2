var expect = require('chai').expect;
const { test } = require('./hello');

// more efficient way than writing it like this:
// var chai = require('chai');
// var expect = chai.expect

const hello = (text) => {
    return 5;
}

// expect function takes the function and a test input and include
// expected output
expect(hello('Hello World')).to.equal('Hello World');