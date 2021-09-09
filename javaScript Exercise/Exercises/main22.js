/* 22:
Write a Javascript function that accepts a string as a
parameter and counts the number of vowels within the string. 
*/

const numberOfVowels = (str, letters = ['a', 'e', 'i', 'o', 'u']) => 
    str.split('').filter(s => letters.indexOf(s) > -1).length;

console.log(numberOfVowels('pacewisdom'));
