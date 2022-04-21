console.log(countries);
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

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
