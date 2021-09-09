/* 25:
Write a Javascript function to find the first not repeated character
ex string: 'abacddbec'
o/p: 'e'
*/

const notRepeated = (str) =>
    str.split('').filter((item, index, arr) =>
        arr.filter(arrItem => arrItem === item).length === 1
    );

console.log(notRepeated('abacddbec'));
console.log(notRepeated('aabccddef'))