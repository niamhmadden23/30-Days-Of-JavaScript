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

console.log("----FOR LOOP USING N ----");
let n = 20;
for (let num = 0; num <= n; num++) {
  console.log(num);
}
