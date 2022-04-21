// this is your main.js script

const date = new Date();
const year = date.getFullYear();
console.log(year);
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
const secondsNow = date.getSeconds();

const oldDate = new Date(1970, 1, 1, 0, 0, 0);
console.log(oldDate);

console.log(date.getTime() - oldDate.getTime());

// let base = window.prompt("enter a number");
// let height = window.prompt("enter another number");
// let area = 0.5 * base * height;
// window.prompt(`the area of the triange is ${area}`);
