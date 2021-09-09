/* 17:
Wrote a Javascript program to compare two objects to determine
if the first one contains the same properties as the second
one (which may also have additional properties)
*/
 const objA = { a: 1, b: 2, c:1};
 const objB = { a: 1, b: 1, c:1};
 const objC = { a: 1, b: 1, d:1};

 const objectsEqual = (a,b) =>
     Object.keys(a).every(key => b[key]);


 console.log(objectsEqual(objA, objB));
 console.log(objectsEqual(objA, objC));
 console.log(objectsEqual(objC, objB));