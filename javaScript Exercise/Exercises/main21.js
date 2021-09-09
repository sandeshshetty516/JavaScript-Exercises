/* 21:
Write a Javascript function that returns a passed string with letters
in alphabetical order
Ex string: 'pacewisdom'
o/p: acdeimopsw
*/

const alphabeticalOrder = (str) => 
    str.split('').sort((a,b) => a > b ? 1 : -1).join('');

console.log(alphabeticalOrder('pacewisdom'));
console.log(alphabeticalOrder('javascript'));