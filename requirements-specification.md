# Requirements Specification Document

This document describes the requirements for this piece of software. It describes both the data and functional requirements in a measure of detail.
Please note that this is not the final document and will be updated in due course.

## Scenario and Rules: Level-1

The objective of this software is to do a mathematical calculation, with a coding twist. We are evaluating multiple polynomial equations, i.e. for the polynomial equation provided we are calculating the Y-value for a given X-value.

The polynomial has the following form:

            
            y  =  3x4  +  2x3  -  6x2  +  8x  -  2 
            
           

    the number of terms in the polynomial does not exceed 10 terms
    the value of the multiplier does not exceed 10
    the value of X does not exceed 50
    all numbers used (the power, multiplier, constant and value of X) will always be positive integers

Now here is the coding twist:
  
	  This software needs to evaluate the equation and must
		ONLY utilise the mathematical operators ADD and SUBTRACT, i.e., 
	  the coding language operator + and - . This is in the interest of performance.

  

It is against the rules to use mathematical operators such as multiplication, division, modulus, "raised to the power of", logarithms, base conversions, logical-shift operators or any mathematical functions/operators other than the operators ADD " + " or SUBTRACT " - " . 

Use of the increment/decrement operator ++ or -- (for example: i++ as a loop counter) is allowed within the code of your solution, but the value should not be used as part of an addition or subtraction within the polynomial calculation itself.

Level-1 Specifics:

The polynomial will be provided as input data in the form of Json as follows, (this json is for the example above):
```
	{
	   "xValue": 5,
	   "terms":
		  [
			 {
				"power": 1,
				"multiplier": 8,
				"action": "add"
			 },
			 {
				"power": 0,
				"multiplier": 2,
				"action": "subtract"
			 },
			 {
				"power": 4,
				"multiplier": 3,
				"action": "add"
			 },
			 {
				"power": 3,
				"multiplier": 2,
				"action": "add"
			 },
			 {
				"power": 2,
				"multiplier": 6,
				"action": "subtract"
			 }
		  ]
	} 
```


## Scenario and Rules: Level-2

In this level we are doing the same mathematical calculation as level-1 with the same limitations on the use of mathematical operators.

As before the polynomial will have the following form:

              y  =  3x4  +  2x3  -  6x2  +  8x  -  2

    the number of terms in the polynomial does not exceed 10 terms
    the value of the multiplier does not exceed 10
    the value of X does not exceed 50
    all numbers used (the power, multiplier, constant and value of X) will always be positive integers

Now here is the coding twist:

		This software needs to evaluate the equation and must
		ONLY utilise the mathematical operators ADD and SUBTRACT, i.e., 
		the coding language operator + and - . This is in the interest of performance.

It is against the rules to use mathematical operators such as multiplication, division, modulus, "raised to the power of", logarithms, base conversions, logical-shift operators or any mathematical functions/operators other than the operators ADD " + " or SUBTRACT " - " . 

Use of the increment/decrement operator ++ or -- (for example: i++ as a loop counter) is allowed within the code of your solution, but the value should not be used as part of an addition or subtraction within the polynomial calculation itself.


Level-2 Specifics:

The format of the input data defining the polynomial varies in this level.

There are now two forms of input data defining the polynomial and the data supplied uses BOTH forms randomly at approximately 50/50.

An important design consideration is that the business analyst driving the requirements for this application has indicated that other input formats WILL be used in the future - however these have not yet been specified and as yet are not included in the test data generated for this level.

The polynomial data for this level includes the json format from level-1. It also includes a new format that is a highly compact numeric mathematical-notation. The new format has a prefix string indicating the new input type thus:

numeric:x=5;y=+8.x^1-2.x^0+3.x^4-6.x^2+2x^3

	This format uses: 
		a dot . to mean multiply or times
		the hat ^ to mean "to the power of"
	
	
	Hence the input data above can be read as: 
		x equals 5
		y equals 8 times (X to the power of 1) 
			minus 2 times (X to the power of zero)
			plus 3 times (X to the power of four)
			minus 6 times (X to the power of 2)
			plus two times (X to the power of three) 
			
	note:	the plus or minus sign will ALWAYS be 
		present on the multiplier of the first 
		term even if that multiplier is zero 

> Note: This software has been  designed and written with the above rules in mind. 