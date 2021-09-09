/* 4:
Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy or dd-mm-yyyy
*/
const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}-${months}-${years}`;
}

console.log(formatDate());