# Contributing to PolyParser

:+1::tada: First things first, thank you so much for for taking the time to contribute to this project! :tada::+1:

The following is a set of guidelines for contributing to PolyParser and its packages, which is being hosted on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Code of Conduct](#code-of-conduct)

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [PolyParser and Packages](#polyparser-and-packages)
  * [PolyParser Design Decisions](#design-decisions)

[How Can I Contribute?](#how-can-i-contribute)
  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Your First Code Contribution](#your-first-code-contribution)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Styleguide](#javascript-styleguide)
  * [CoffeeScript Styleguide](#coffeescript-styleguide)
  * [Specs Styleguide](#specs-styleguide)
  * [Documentation Styleguide](#documentation-styleguide)

[Additional Notes](#additional-notes)
  * [Issue and Pull Request Labels](#issue-and-pull-request-labels)

## Code of Conduct

This project and everyone participating in it is governed by the [PolyParser Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [polyparser@github.com](mailto:cecil.developer@outlook.com).


## PolyParser and Packages

This document describes the requirements for this piece of software. It describes both the data and functional requirements in a measure of detail.
Please note that this is not the final document and will be updated in due course.



## Design Decisions

### Data Structure and Rules 

> LevelOneDataFile

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

> LevelTwoDataFile

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

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for PolyParser. Following these guidelines will help maintainers and the community understand your report, reproduce the behavior, and find related reports in order to fix this bug.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report).

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

* **Check the [debugging guide](#debugging-guide).** You might be able to find the cause of the problem and fix things yourself. Most importantly, check if you can reproduce the problem in the latest version of PolyParser.
* **Check the [faq](#faq) and the [discussions](https://github.com/CecilJS/PolyParser/issues)** for a list of common questions and problems.
* **Perform a cursory search** in the list of open issues to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#polyparser-and-packages) your bug is related to, create an issue on that repository and provide the following information by opening an [issue](https://github.com/CecilJS/PolyParser/issues).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started PolyParser, e.g. which command exactly you used in the terminal, or how you started PolyParser otherwise. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut or a PolyParser command, and if so which one?
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
* **If you're reporting that PolyParser crashed**, include a crash report with a stack trace from the operating system. On macOS, the crash report will be available in `Console.app` under "Diagnostic and usage information" > "User diagnostic reports". Include the crash report in the issue in a [code block](https://help.github.com/articles/markdown-basics/#multiple-lines), a [file attachment](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/), or put it in a [gist](https://gist.github.com/) and provide link to that gist.
* **If the problem is related to performance or memory**, include a CPU profile capture with your report.
* **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

## Debugging Guide

For a simple debugging guide to this software, please refer to the [PolyParser Readme File](README.md).



## FAQ
In this sectioin, you will find answers to questions that are frequently asked by contributor to an open source project.

This section will be updated in due course.