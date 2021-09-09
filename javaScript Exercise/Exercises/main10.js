/* 10:
Write a Javascript program to check a given string contains 2 to 4 
occurrences of a specified character.
*/
const countChars = (str, char) => 
    str.split('').filter(ch => ch === char).length;

const contains2to4 = (str, char) => 
    countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2to4('tomorrow', 'o'));
console.log(contains2to4('today', 'o'));