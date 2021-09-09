/* 11:
Write a Javscript program to find the number of even digits in an array of 
integers.
*/
const countEvenNumbers = (arr) => 
    arr.filter(num => num % 2 == 0).length;

console.log(countEvenNumbers([1,2,3,4,5,6]));
console.log(countEvenNumbers([10,23,45,33,22,44,56,78]));