/* 20:
Write a Javascript function that returns true if the provided
predicate function returns true for all elements in a collection, 
false otherwise.
*/

const isEveryElem = (arr, fn) => {
    for (let i=0; i<arr.length; i+=1) {
        if (!fn(arr[i])) {
            return false;
        }
    }
    return true;
};

console.log(isEveryElem([1,2,3,4,5], (x) => x > 0));
console.log(isEveryElem([1,2,3,4,5], (x) => x > 2));