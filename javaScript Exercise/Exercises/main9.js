/* 9:
Given two values, write a Javascript program to find out which
one is nearest to 100.
*/

const closeTo100 = (a,b) => (100 - a) < (100 - b) ? a : b;

console.log(closeTo100(19,90));
console.log(closeTo100(55,56));