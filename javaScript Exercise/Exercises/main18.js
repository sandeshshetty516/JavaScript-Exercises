/* 18:
Write a Javascript program to convert a comma-seperated values(CSV)
string to a 2D array. Anew line indicates a new row in the array.
*/

const parseCSV = (csvString) => 
    csvString.split('\n').map(row => row.split(','));

const str = `abc,def,ghi
jkl,mno,Pqr
stu,vwx,yza`;

console.log(parseCSV(str));