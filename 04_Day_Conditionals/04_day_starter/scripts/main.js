// this is your main.js script

alert("Open the browser console whenever you work on JavaScript");

// let age = window.prompt("please enter your age...");

// if (age >= 18) {
//   window.alert("you are older enough to drive");
// } else {
//   window.alert(`you have ${18 - age} years left until you can drive`);
// }

let a = 4;
let b = 55;

// if (a > b) {
//   console.log("a is greater than b");
// } else {
//   console.log("a is less than b");
// }

const greaterThan = () => {
  return a > b ? "a is greater than b" : "a is less than b";
};

console.log(greaterThan());
