let string = "30 days of Javascript";
console.log(string);
console.log(string.length);
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string.substring(0, 3));
console.log(string.slice(3, 7));
console.log(string.includes("script"));
console.log(string.split());
console.log(string.split(" "));
console.log(string.replace("Javascript", "Python"));
let stringTwo = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(stringTwo.split(","));
console.log(string.charCodeAt("J"));
console.log(string.charAt(15));
console.log(string.indexOf("a"));
let conjuctions =
  "You cannot end a sentence with because because because is a conjunction";
console.log(conjuctions.search("because"));
console.log(conjuctions.lastIndexOf("because"));
console.log(conjuctions.indexOf("because"));
console.log(string.trim(" "));
console.log(string.startsWith("3"));
console.log(string.endsWith("t"));
console.log(string.match("a"));
console.log(string.repeat(2));
let concatenation = "30 days of ";
console.log(concatenation.concat("Javascript"));

// level 2

let quote =
  "There is no exercise better for the heart than reaching down and lifting people up.";
console.log(quote);
let num = "10";
let number = parseInt(num);
console.log(typeof number === 10);
console.log(Math.round(9.8) === 10);

let stringPy = "Python";
let stringJ = "Jargon";
console.log(stringPy.includes("on"), stringJ.includes("on"));

let jargon = "I hope this course is not full of jargon";
console.log(jargon.includes("jargon"));

let randonNum = Math.floor(Math.random() * 101);
console.log(randonNum);

let random = Math.floor(Math.random() * 31) + 50;
console.log(random);

let final = Math.floor(Math.random() * 256);
console.log(final);

let javascript = "Javascript";

console.log(Math.floor(Math.random() * javascript.length));

console.log(conjuctions.substring(30, 55));

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

console.log(
  sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
);

const income =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
const perMonth = parseInt(income.match("5000"));
console.log(perMonth);
const annualBonus = parseInt(income.match("10000"));
console.log(annualBonus);
const monthlyCourse = parseInt(income.match("15000"));

const annualIncome = perMonth * 12 + monthlyCourse * 12 + annualBonus;
console.log(`Annual income = $ ${annualIncome}`);
