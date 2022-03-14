//Sanity Check
test("Sanity check", () => {
    expect(true).toBe(true);
});


describe("Unit Tests", () => {
    const {Polynomial} = require("../polynomial");

    // Testing the interface of all instance methods
    describe("Testing all instance methods are actually functions", () => {
      const polynomial = new Polynomial();
    
      test("defines Main()", () => {
        expect(typeof polynomial.Main).toBe("function");
      });

      test("defines ConvertJson()", () => {
        expect(typeof polynomial.ConvertJson).toBe("function");
      });

      test("defines RegexConverter()", () => {
        expect(typeof polynomial.RegexConverter).toBe("function");
      });

      test("defines Pow", () => {
        expect(typeof polynomial.Pow).toBe("function");
      });

      test("defines Calculate()", () => {
        expect(typeof polynomial.Calculate).toBe("function");
      });
    });

    // Testing the Pow Method
    describe("Testing the Pow method", () => {
        const polynomial = new Polynomial();
        
        test("Testing the Pow method", () => {
            expect(polynomial.Pow(2, 3)).toBe(8);
        });
      
        test("Testing the Pow method with a string", () => {
            expect(polynomial.Pow("2", "3")).toBe("Invalid Input");
        } )

        test("Testing the Pow method with a negative number", () => {
            expect(polynomial.Pow(2, -3)).toBe("Invalid Input");
        })
    });

    // Testing the Calculate Method
    describe("Testing the Calculate method", () => {
        const polynomial = new Polynomial();
        test("Testing the Calculate method", () => {
            expect(polynomial.Calculate(2, 3, 'add')).toBe(6);
        });

        test("Testing the Calculate method with a string", () => {
            expect(polynomial.Calculate("2", "3", 'add')).toBe("Invalid Input");
        })

        test("Testing the Calculate method with a negative number", () => {
            expect(polynomial.Calculate(2, -3, 'add')).toBe("Invalid Input");
        })
    });

    // Testing the ConvertJson Method
    describe("Testing the ConvertJson method", () => {
        const polynomial = new Polynomial();
        const firstTestData = '{"xValue":2,"terms":[{"multiplier":2,"power":3,"action":"add"}]}';
        const secondTestData = '{"xValue":"2","terms":[{"multiplier":"2","power":"3","action":"add"}]}';
        const thirdTestData = '{"xValue":2,"terms":[{"multiplier":2,"power":-3,"action":"add"}]}';

        const firstTestDataResult = '{"xValue":2,"terms":[{"multiplier":2,"power":3,"action":"add"}]}';
        const secondTestDataResult = "{\"xValue\":\"2\",\"terms\":[{\"multiplier\":\"2\",\"power\":\"3\",\"action\":\"add\"}]}";
        const thirdTestDataResult = "{\"xValue\":2,\"terms\":[{\"multiplier\":2,\"power\":-3,\"action\":\"add\"}]}";

        test("Testing the ConvertJson method", () => {
            expect(polynomial.ConvertJson(firstTestData)).toBe(firstTestDataResult);
        });

        test("Testing the ConvertJson method with a string", () => {
            expect(polynomial.ConvertJson(secondTestData)).toBe(secondTestDataResult);
        })

        test("Testing the ConvertJson method with a negative number", () => {
            expect(polynomial.ConvertJson(thirdTestData)).toBe(thirdTestDataResult);
        })
    });

    // Testing the RegexConverter Method
    describe("Testing the RegexConverter method", () => {
        const polynomial = new Polynomial();
        const testData = "numeric:x = 38; y = +4.x^1-8.x^3-9.x^2-3.x^0+0.x^4";
        const testDataResult = {"terms": [{"action": "add", "multiplier": 4, "power": 1}, {"action": "subtract", "multiplier": 8, "power": 3}, {"action": "subtract", "multiplier": 9, "power": 2}, 
                                {"action": "subtract", "multiplier": 3, "power": 0}, {"action": "add", "multiplier": 0, "power": 4}], "xValue": 38};

        test("Testing the RegexConverter method", () => {
            expect(polynomial.RegexConverter(testData)).toEqual(testDataResult);
        });

    });

    // Testing the Main Method
    describe("Testing the Main method", () => {
        const polynomial = new Polynomial();
        const testData = {"xValue" : 17,"terms" : [{ "power" : 3,  "multiplier" : 9, "action" :  "subtract"  },{ "power" : 1,  "multiplier" : 10, "action" :  "add"  },{ "power" : 2,  "multiplier" : 7, "action" :  "subtract"  },{ "power" : 5,  "multiplier" : 3, "action" :  "subtract"  },{ "power"
        : 0,  "multiplier" : 1, "action" :  "add"  },{ "power" : 4,  "multiplier" : 0, "action" :  "subtract"  }]};

        const testDataResult = -4305640;

        test("Testing the Main method", () => {
            expect(polynomial.Main(testData)).toBe(testDataResult);
        });
    });

});
