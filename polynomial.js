class Polynomial {
    constructor(){
        this.evaluatedPolynomial = [];
    }

    #convertJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return JSON.stringify(str);
    }
        return str;
    }


    

    static computeFile(path){
        const fs = require('fs');
        const readline = require('readline');
        const polynomialFactory = new Polynomial();

        const myInterface = readline.createInterface({
            input: fs.createReadStream(`${path}`)
        });

        const printData = (data) => {
            return polynomialFactory.main(data);
        }
      
        myInterface.on('line', printData);
    }
   
    


    #regexConverter(data){
        let trimmedYValue = data.slice(18);
        let xValue = data.slice(8, 14);
        xValue = xValue.charAt(xValue.length -1) === ';'? Number(xValue.slice(4,5)) : Number(xValue.slice(4, 6));
        trimmedYValue = trimmedYValue.charAt(0) === '='? trimmedYValue.slice(2) : trimmedYValue.slice(1);
        const rawData = trimmedYValue;
        const trimmedData = rawData.replace(/[.?{}()|\\]/g, '');
        const groups = /[+-]?\d+x?(\^\d+)?/g;
        const matches = trimmedData.match(groups);

        const terms = matches.map(term => {
            let [coeficient, monomial, action ] = term.split(/(?=[a-z](?:\^\d+)?)/);
                action = coeficient.charAt(0) === '-' ? 'subtract' : 'add';
                    if (coeficient.match(/^[+-]?\d+(\.\d+)?$/)) {
                        coeficient = coeficient.charAt(0) === '-' ? Number(coeficient.slice(1,3)) : Number(coeficient);   
                    }else {
                        monomial = coeficient;
                        coeficient = 1;   
                    }
                    if (!monomial){
                        return { 
                            "multiplier": coeficient, 
                            "action": action 
                        };
                    }else {
                        let [variable, power] = monomial.split(/\^/);
                            power = parseInt(power || 1);
                            return { 
                                "power": power, 
                                "multiplier": coeficient, 
                                "action": action 
                            };
                        }
                    });
            return {xValue, "terms": terms };
    }
    

    #pow(xValue , power){
        if(typeof xValue === 'number' && xValue >= 0 && typeof power === 'number' && power >= 0){
            if (power === 0) return 1;
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
        }else{
            return 'Invalid Input';
        }
    }


    #calculate(multiplier, xValue, action){
        if(typeof xValue === 'number' && xValue >= 0 && typeof multiplier === 'number' && multiplier >= 0){
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
        }else{
            return 'Invalid Input';
        }
       }


    main(data){
         let yValue = 0;
         let expectedAnswer = '';
         const extractedData = this.#convertJson(data);
         const parsedData = [JSON.parse(extractedData)];
           
         for ( const entry of parsedData){            
            if(typeof entry === 'object'){
                for(let i = 0; i < entry.terms.length; i++){    
                 yValue += this.#calculate(entry.terms[i].multiplier, this.#pow(entry.xValue, entry.terms[i].power), entry.terms[i].action);  
                } 
            } else if(data.match(/^numeric./i)){   
                    let convertedData = this.#regexConverter(data);
                    for(let i = 0; i < convertedData.terms.length; i++){   
                        yValue += this.#calculate(convertedData.terms[i].multiplier, this.#pow(convertedData.xValue, convertedData.terms[i].power), convertedData.terms[i].action);  
                       } 
                } else{ 
                expectedAnswer += data;
                expectedAnswer = Number(expectedAnswer.slice(18));
                return this.evaluatedPolynomial[this.evaluatedPolynomial.length - 1] === expectedAnswer ? `${this.evaluatedPolynomial[this.evaluatedPolynomial.length - 1]} is equal to ${expectedAnswer}`  : `${this.evaluatedPolynomial[this.evaluatedPolynomial.length - 1]} is not equal to ${expectedAnswer}`;  
            }                  
         }
         this.evaluatedPolynomial.push(yValue);
         return this.evaluatedPolynomial[this.evaluatedPolynomial.length - 1];
        }
     }

     module.exports = { Polynomial };

    
