const fs = require('fs');
const readline = require('readline');
const { Polynomial }= require('./polynomial.js');

// Instantiate the class
const seconPolynomial = new Polynomial();

// Read file line by line and execute the appropriate functioin
const myInterface = readline.createInterface({
  input: fs.createReadStream('data/LevelTwoDataFile.dat')
});

let printData = (data) => {
  return console.log(`${seconPolynomial.Main(data)}`);
}

myInterface.on('line', printData);

/* 

1. inside the else statement, check if the content of the array matches the regex 

2. if it does, then return the value of the array which contains the mathematical notation as a string

3. if it doesn't, then run the remainder of the code.



*/