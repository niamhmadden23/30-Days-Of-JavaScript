function printName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}

printName("Niamh", "Madden");

function sumOfNums(a, b) {
  console.log(a + b);
}

sumOfNums(200, 2000);

function areaOfRectangle(length, width) {
  let area = length * width;
  console.log(area);
}

areaOfRectangle(10, 4);

function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  console.log(perimeter);
}

perimeterOfRectangle(4, 4);

function volumeOfRectangle(length, height, width) {
  let volume = length * width * height;
  console.log(volume);
}

volumeOfRectangle(2, 2, 2);

const printArray = (array) => {
  array.forEach((element) => {
    console.log(element);
  });
};

printArray(["Niamh", "Mabel"]);

function showDateTime() {
  let day = new Date();
  let date = day.getDate();
  let month = day.getMonth();
  let year = day.getFullYear();

  let time = day.getHours();
  let minutes = day.getMinutes();
  console.log(`0${date}/0${month + 1}/${year} ${time}:${minutes}`);
}

showDateTime();

console.log("---swap values---");

function swapValue(num1, num2) {
  return ([num1, num2] = [num2, num1]);
}

console.log(swapValue(2, 3));
