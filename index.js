const fs = require('fs');
const readline = require('readline');


class Polynomial {

    constructor(){
  
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

        for (i = 1; i < power; i++)
        {
            for (j = 1; j < xValue; j++)
            {
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
                return expectedAnswer = expectedAnswer.slice(18);
                
            }                
         }
         return yValue;
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



