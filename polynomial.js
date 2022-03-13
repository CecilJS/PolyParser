


class Polynomial {
    constructor(){
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

   
    RegexConverter(data){
        let trimmedYValue = data.slice(18);
        let xValue = data.slice(8, 14);
        xValue = xValue.charAt(xValue.length -1) === ';'? Number(xValue.slice(4,5)) : Number(xValue.slice(4, 6));
        trimmedYValue = trimmedYValue.charAt(0) === '='? trimmedYValue.slice(2) : trimmedYValue.slice(1);
        const rawData = trimmedYValue// some have to be 19 some have to be 20
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
            if (!monomial)
                return { "multiplier": coeficient, "action": action };
            else {
                let [variable, power] = monomial.split(/\^/);
                power = parseInt(power || 1);
                return { "power": power, "multiplier": coeficient, "action": action };
                }
            });
        return {xValue, "terms": terms };
      
    }
    
    Pow(xValue , power){
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
    }

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
            } else if(data.match(/^numeric./i)){   
                    let convertedData = this.RegexConverter(data);
                    for(let i = 0; i < convertedData.terms.length; i++){   
                        yValue += this.Add(convertedData.terms[i].multiplier, this.Pow(convertedData.xValue, convertedData.terms[i].power), convertedData.terms[i].action);  
                       } 
                       //this.evaluatedPolynomial.push(yValue);
                } else{ 
               
                expectedAnswer += data;
                expectedAnswer = Number(expectedAnswer.slice(18));
                return expectedAnswer === this.evaluatedPolynomial[this.evaluatedPolynomial.length - 1];
               
            }                  
         }
        
      
         this.evaluatedPolynomial.push(yValue);
         console.table(this.evaluatedPolynomial);
         return this.evaluatedPolynomial ? true : false;
         
        }
     }

     module.exports = { Polynomial };

    

