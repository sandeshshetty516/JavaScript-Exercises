/* 13:
Write a Javascript program to check whether a given array of integers
is sorted in ascending order 
*/
const isAscending = (arr) => {
    for (let i = 0; i< arr.length; i += 1) {
        if (arr[i] > arr[i + 1])
        return false;
    }
    return true;
}

console.log(isAscending([1,3,4,5,6,7]));
console.log(isAscending([2,5,3,5,7,3]));