const fs = require('fs');
const readline = require('readline');
const { Polynomial }= require('./polynomial.js');

// Instantiate the class
const firstPolynomial = new Polynomial();

// Read file line by line and execute the appropriate functioin
const myInterface = readline.createInterface({
  input: fs.createReadStream('data/LevelOneDataFile.dat')
});

let printData = (data) => {
  return console.log(`${firstPolynomial.Main(data)}`);
}

myInterface.on('line', printData);
