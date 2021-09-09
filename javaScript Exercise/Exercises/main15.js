/* 15:
Write a Javascript program to replace the first digit in a string 
(should contain atleast digit) with $ character.
*/

const replaceFirstDigit = (str) => 
    str.replace(/[0-9]/, '$');

console.log(replaceFirstDigit('sandesh516'));
console.log(replaceFirstDigit('s4nd3sh'));