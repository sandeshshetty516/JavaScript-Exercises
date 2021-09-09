/* 14:
Write a Javascript program to get the largest even number from an 
array of integers.
*/

const largestEvenNumber = (arr) =>
    Math.max(...arr.filter(num => num % 2 === 0));

console.log(largestEvenNumber([4,6,8,7,9,16,3]));
console.log(largestEvenNumber([1,2,4,7,8,9,10,3,4,15]));