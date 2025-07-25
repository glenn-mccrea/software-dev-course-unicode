/*

Practice Problem #1

Exercise 1: Retrieve and Add Two Code Points
Objective: Extract the Unicode code points of the first two characters of a string,
add them together, and return the result.

Instructions:
Write a program that takes a string with at least two characters.
Use charCodeAt to get the Unicode code points of the first two characters.
Add the two code points together and assign the result to a variable named sumCodePoints.
Input:
let inputString = "Hi";

Expected Output:
sumCodePoints: 177 // 'H' = 72, 'i' = 105, 72 + 105 = 177
*/
console.log("Exercise 1");
let inputStringA = "at";

let numA1 = inputStringA.charCodeAt(0);
/* console.log(numA1); */
let numA2 = inputStringA.charCodeAt(1);
/* console.log(numA2); */
let sumCodePoints = numA1 + numA2;
console.log(sumCodePoints + " // 'a' = 91, 't' = 116, 97 + 116 = 213");

/*
Exercise 2: Generate a String from Two Code Points
Objective: Take two numeric Unicode code points,
convert them to characters using String.fromCharCode,
and combine them into a single string.

Instructions:
Write a program that accepts two numeric Unicode code points.
Use String.fromCharCode to convert each code point to its corresponding character.
Combine the two characters into a single string and assign it to a variable named combinedString.
Input:
let codePoint1 = 65;
let codePoint2 = 66;

Expected Output:
combinedString: "AB" // 65 = 'A', 66 = 'B', combined = "AB"

/* 
    n: 110
    e: 101
    a: 97
    t: 116
 */
console.log("Exercise 2");
let codePointA = 110;
let codePointB = 101;
let codePointC = 97;
let codePointD = 116;

let combinedString =
  String.fromCharCode(codePointA) +
  String.fromCharCode(codePointB) +
  String.fromCharCode(codePointC) +
  String.fromCharCode(codePointD) +
  " // 110 = 'n', 101 = 'e', 97 = 'a', 116 = 't', combined = neat";
console.log(combinedString);

/*
Exercise 3: Find the Character Difference
Objective: Extract the Unicode code points of two given characters from a string
and calculate the absolute difference between them.

Instructions:
Write a program that takes a string with at least two characters and two specified indices.
Use charCodeAt to find the Unicode code points of the characters at the specified indices.
Calculate the absolute difference between the two code points and assign it to a variable named codePointDifference.
Input:
let inputString = "Cat";
let index1 = 0;
let index2 = 2;

Expected Output:
codePointDifference: 16 // 'C' = 67, 't' = 116, |67 - 116| = 16

*/
console.log("Exercise 3");
/* USING MY VARIABLES FROM EXERCISE ONE!
let inputStringA = "at";

let numA1 = inputStringA.charCodeAt(0);
console.log(numA1);
let numA2 = inputStringA.charCodeAt(1);
console.log(numA2);
*/
let codePointDifference = Math.abs(numA1 - numA2);
console.log(codePointDifference + " // 'a' = 91, 't' = 116, 97 - 116 = 19");
/*

Practice Problem #2

Objective
Practice converting characters from strings to Unicode code points
using charCodeAt and converting Unicode code points back to characters
using String.fromCharCode.

Instructions:
You will complete three tasks to explore the relationship
between characters and their Unicode code points.
Write JavaScript code to complete each task,
ensuring you assign your results to the specified variables.
Log all results to the console.

Tasks:
Task 1: Extract Code Points from Characters
Take the string "Code".
Use charCodeAt to extract the Unicode code points of the first and third characters.
Assign the results to variables named firstCodePoint and thirdCodePoint.

Task 2: Create a Word from Code Points
Use the Unicode code points 72, 101, 108, and 108 (corresponding to the characters H, e, l, and l).
Use String.fromCharCode to create the word "Hell".
Assign the result to a variable named wordFromCodePoints.

Task 3: Swap First and Last Characters
Take the string "Launch".
Extract the Unicode code points of the first and last characters using charCodeAt.
Use String.fromCharCode to swap these characters and create a new string: "hauncL".
Assign the result to a variable named swappedString.*/

//Starter Code
// Task 1
console.log("Problem 2 task 1");
let inputString1 = "Code";
let firstCodePoint = inputString1.charCodeAt(0); // Your code here
let thirdCodePoint = inputString1.charCodeAt(2); // Your code here
console.log(firstCodePoint + thirdCodePoint);

// Task 2
console.log("Problem 2 task 2");
let wordFromCodePoints =
  String.fromCharCode(72) +
  String.fromCharCode(101) +
  String.fromCharCode(108) +
  String.fromCharCode(108); // Your code here
console.log(wordFromCodePoints);

// Task 3
console.log("Problem 2 task 3");
let inputString2 = "Launch";

let swap1 = inputString2.charCodeAt(0);
let swap2 = inputString2.charCodeAt(5); // Your code here
let swappedString =
  String.fromCharCode(swap2) + "aunc" + String.fromCharCode(swap1);
console.log(swappedString);
// Log all results
console.log("Problem #2 Result:");
console.log({
  firstCodePoint,
  thirdCodePoint,
  wordFromCodePoints,
  swappedString,
});
