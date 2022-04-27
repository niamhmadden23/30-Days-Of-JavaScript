console.log(" ------ FOR LOOP ------");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log(" ------ WHILE LOOP ------");
let i = 0;
while (i <= 10) {
  console.log(i++);
}

console.log(" ------ DO WHILE LOOP ------");
let x = 0;
do {
  console.log(x++);
} while (x <= 10);

console.log(" ------ FOR LOOP (decrement) ------");
for (let i = 10; i > 0; i--) {
  console.log(i);
}

console.log(" ------ WHILE LOOP (decrement) ------");
i = 10;
while (i > 0) {
  console.log(i--);
}

console.log(" ------ DO WHILE LOOP (decrement)------");
x = 10;
do {
  console.log(x--);
} while (x > 0);

console.log("---- MORE FOR LOOPS ----");
let n = 20;
for (let num = 0; num <= n; num++) {
  console.log(num);
}
console.log("---- PRINTING # ----");
let string = "";
for (let number = 0; number < 5; number++) {
  string += "#";
  console.log(string);
}
console.log("exercise 5");
for (i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

console.log("i i^2 i^3");

for (i = 0; i <= 10; i++) {
  console.log(`${i}  ${i * i}  ${i * i * i}`);
}

console.log("--- EVEN NUMBERS ---");
for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("--- ODD NUMBERS ---");
for (i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

console.log("--- THE SUM OF NUMBERS ---");

let sum = 0;
for (i = 0; i <= 100; i++) {
  sum = i + sum;
  console.log(sum);
}
console.log("--- THE SUM OF EVEN NUMBERS ---");

let result = 0;
for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    result = i + result;
    console.log(result);
  }
}

console.log("--- THE SUM OF ODD NUMBERS ---");

let total = 0;
for (i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    total = i + total;
    console.log(total);
  }
}
console.log("---Random Number in Array---");
let array = [];
for (let i = 0; i < 5; i++) {
  array.push(Math.floor(Math.random() * 100 + 1));
}
console.log(array);
