const fs = require('fs');
const readline = require('readline');


class Polynomial {

    constructor(){
        this.Main = this.Main.bind(this);
        this.Pow = this.Pow.bind(this);
        this.Add = this.Add.bind(this);
        this.ConvertJson = this.ConvertJson.bind(this);
        this.answerExpected = [];
        this.evaluatedPolynomial = [];
    }

    // Test if data is json or not and then convert it to json
    ConvertJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return JSON.stringify(str);
    }
        return str;
    }

    
    Pow(xValue , power){
        if (power == 0) return 1;

        let answer = xValue;
        let increment = xValue;
        let i, j;

        for (i = 1; i < power; i++){
            for (j = 1; j < xValue; j++){
                answer += increment;
            }
            increment = answer;
        }
        return answer;   
    }

     //All good now
    Add(multiplier, xValue, action){
        let xResult = 0;
        if(action === 'add'){
          for(let i = 0; i < multiplier; i++){
             xResult += xValue;
               }
        } else{
          for(let i = 0; i < multiplier; i++){
              xResult -= xValue;
             }
          return xResult;
        }
        return xResult;
       }

    Compare(yValue, expectedValue){
        // yValue = this.comparison[0];
        return yValue === expectedValue;
        // arr1 = [1,2,3,4,5];
        // arr2 = [6,7,8,9,10];
        // return arr1 == arr2
    }

    Main(data){
         let yValue = 0;
         let expectedAnswer = '';
         const extractedData = this.ConvertJson(data);
         const parsedData = [JSON.parse(extractedData)];
           
         for ( const entry of parsedData){            
            if(typeof entry === 'object'){
                for(let i = 0; i < entry.terms.length; i++){      
                 yValue += this.Add(entry.terms[i].multiplier, this.Pow(entry.xValue, entry.terms[i].power), entry.terms[i].action);  
                } 
            } else {
                expectedAnswer += data;
                expectedAnswer = Number(expectedAnswer.slice(18));
                return expectedAnswer === this.evaluatedPolynomial[this.evaluatedPolynomial.length - 1];
            }                  
         }
        
         this.evaluatedPolynomial.push(yValue);
         return this.evaluatedPolynomial ? true : false;
         
        }
     }

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



