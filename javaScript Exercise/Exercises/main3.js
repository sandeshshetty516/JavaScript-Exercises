/* 3:
Write a JavaScript program to replace every character 
in agiven string with the character following it in 
the alphabet
*/
const moveCharsForward = (str) => 
str.split('')
.map(char => String.fromCharCode(char.charCodeAt(0) + 1))
.join('');
console.log(moveCharsForward('abcdef'));