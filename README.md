# [PolyParser](#CONTRIBUTING) ![Percentage of statements covered](./coverage/badge-statements.svg) ![Percentage of lines convered](./coverage/badge-lines.svg) ![Percentage of functions unctions](./coverage/badge-functions.svg) ![Percentage of braches covered](./coverage/badge-branches.svg)


  This software reads data (two lines at a time), interpret the data from the first line 
  and calculate the your Y-value (i.e. it solves the equation for the given X-value). 
  Then compares the calculated Y-value with the actual expected Y-value provided in the second line of the data.

  - The data in the file represents 100s to 1000s polynomial equations, 
  each polynomial has two lines of data: - the first line contains the encoded polynomial data. 
  - The second line contains the expected Y-value when solving the polynomial for the given X-value.



## Dependencies

* Node JS
* Jest

## Installation

To run this project, you will need to have the latest version of node installed on your system.
To check which version of node you have installed on your system, type the following command:

```bash
  node --version or node -v 
```

If you do not have node installed on your system, head to the official website
of [node JS](https://nodejs.org/en/) for more information on how to download the latest version.

> Once you have node installed on your system, please follow the steps below to run this project locally:



Clone the project

```bash
  git clone https://github.com/CecilJS/IDBSCodingChallenge
```

Navigate to the project's directory

```bash
  cd IDBSCodingChallenge
```

Install dependencies

```bash
  npm install
```

## Usage
> In order to see the output in your terminal or command line, head to the `polynomial.js` file, inside the `Polynomial` class, locate the `static computeFile` method which is the entry point of the class and include a `console.log` statement on line `28`. Before you run the code, your `computeFile` method should look like the code below:

```javascript
static computeFile(path){
        const fs = require('fs');
        const readline = require('readline');
        const polynomialFactory = new Polynomial();

        const myInterface = readline.createInterface({
          input: fs.createReadStream(`${path}`)
        });

        const printData = (data) => {
          return console.log(`${polynomialFactory.main(data)}`);
        }
      
        myInterface.on('line', printData);
    }

```
 > After following the steps above, you are now ready to run the code and see the output in your terminal. Run the following commands to test both `levelOne.js` and `levelTwo.js` files.

```bash
Note: Run these commands one after the other in your terminal or command line and observe the output.

  node levelOne.js

  node levelTwo.js

```
## Running Tests
> This software uses the JavaScript testing framework called Jest for unit test.

To run tests, run the following command in your terminal or command line:

```bash
  npm run test
```



> Thank you for taking the time to check out my project. Kindly contact the project's Author if you have any feedback to improve the quality of the code.

## Author

- [@CecilJS](https://github.com/CecilJS)
