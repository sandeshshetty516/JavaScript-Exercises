/* 5:
Write a JavaScript program to create a new string adding
"New!" in front of the given string.
If the given string begins with "New!" already then return
the original string.
*/ 
const addNew = (str) => str.lastIndexOf('New!') === 0 ? str : `New! ${str}`;

console.log(addNew('Offers'));
console.log(addNew('New! Offers'));