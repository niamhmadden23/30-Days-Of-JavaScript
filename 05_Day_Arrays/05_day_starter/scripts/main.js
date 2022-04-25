// alert("Open the browser console whenever you work on JavaScript");
// alert("Open the console and check if the countries has been loaded");

let arr = Array(7);
console.log(arr.length);
const country = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

console.log(country.at(0));
console.log(country.length - 1);
console.log(Math.floor(country.length / 2));

const mixedData = ["Niamh", 24, true, "rice", "boxing", "reading"];

console.log(mixedData.length);

const itCompanies = ["facebook", "twitter", "google", "microsoft", "amazon"];
console.log(itCompanies.length);
console.log(itCompanies.at(0));
console.log(itCompanies.at(2));
console.log(itCompanies.at(length - 1));

const eachWord = itCompanies.forEach((word) => {
  console.log(word);
});

const toString = itCompanies.toString();
itCompanies.sort();
itCompanies.reverse();
itCompanies.slice(0, 3);
itCompanies.slice(itCompanies.length - 1, 3);
console.log(itCompanies.at(itCompanies.length / 2));
itCompanies.pop();

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

console.log(text.split(" ").length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("meat");
console.log(shoppingCart);
shoppingCart.push("sugar");
console.log(shoppingCart);
shoppingCart.splice(4, 1);
console.log(shoppingCart);
// console.log((shoppingCart.indexOf("tea") = "green tea"));

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(ages);

// find the average of array
let total = 0;
for (i = 0; i < ages.length; i++) {
  total += ages[i];
}
console.log(total / ages.length);
