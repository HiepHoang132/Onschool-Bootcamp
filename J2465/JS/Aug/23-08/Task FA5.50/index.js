// Task 1
console.log("Task 1");
function roundToNthPlace(num, n) {
  return num.toFixed(n);
}

console.log(roundToNthPlace(2.100212, 2));
console.log(roundToNthPlace(2.100212, 3));
console.log(roundToNthPlace(2100, 2));

console.log();

// Task 2
console.log("Task 2");

function getRandomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomRange(1, 10));
console.log();

// Task 3
console.log("Task 3");

function calPytago(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}
console.log(calPytago(2, 4));
console.log(calPytago(3, 4));
console.log();

// Task 4
console.log("Task 4");

function checkSqr(num) {
  return Math.sqrt(num) ** 2 === num;
}

console.log(checkSqr(64));
console.log(checkSqr(94));
console.log();

// Task 5
console.log("Task 5");

function task5(num) {
  if (num % 5 === 0) return num;

  return Math.ceil(num / 5) * 5;
}

console.log(task5(32));
console.log(task5(137));
console.log();

// Task 6
console.log("Task 6");

function task6(input) {
  return !isNaN(input)
}

console.log(task6(12))
console.log(task6('abcd'))
console.log(task6('12'))
console.log();

// Task 7
console.log("Task 7");

console.log();

// Task 8
console.log("Task 8");

console.log();

// Task 9
console.log("Task 9");

console.log();

// Task 10
console.log("Task 10");

console.log();
