/*EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
Example 1:
Input: [1 , 4 , 7]  Output: 4
Input: [10, 5]  Output: 7.5
Input: [1.5, 3, 2.5, 1]  Output: 2 */


var arr1 = [1 , 4 , 7]
var arr2 = [10, 5] 
var arr3 = [1.5, 3, 2.5, 1]

const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;


console.log(arrAvg(arr1));
console.log(arrAvg(arr2));
console.log(arrAvg(arr3));


