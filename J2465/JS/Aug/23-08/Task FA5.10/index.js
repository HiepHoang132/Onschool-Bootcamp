// Task 1
const array1 = ["Devcamp", [1, 2, 3], "Devcamp User".split()];

console.log("Task 1");
array1.forEach((item) => {
  console.log(Array.isArray(item));
});

console.log();

// Task 2
console.log("Task 2");
const numbers = [1, 2, 3, 4, 5, 6];
const nthItem = (index) => {
  console.log(numbers[index]);
};
nthItem(3);
nthItem(6);
console.log();

//Task 3
console.log("Task 3");
const nums = [3, 8, 7, 6, 5, -4, -3, 2, 1];
nums.sort((a, b) => a - b);
console.log(nums);
console.log();

//Task 4
console.log("Task 4");
const findNthElement = (array, n) => {
  if (n > 0 && n < array.length) {
    console.log(n - 1);
  } else {
    console.log(-1);
  }
};

findNthElement(numbers, 3);
findNthElement(numbers, 7);
console.log();

//Task 5
console.log("Task 5");
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
console.log([...num1, ...num2]);
console.log();

//Task 6
console.log("Task 6");
const array2 = [NaN, 0, 15, false, -22, "", undefined, 47, null];
const filteredArray = array2.filter(
  (item) => typeof item === "number" && !isNaN(item)
);
console.log(filteredArray);
console.log();

//Task 7
console.log("Task 7");
const filterNthElement = (array, n) => {
  return array.filter((number) => number !== n);
};

console.log(filterNthElement([2, 5, 9, 6], 5));
console.log(filterNthElement([2, 9, 6], 5));
console.log(filterNthElement([2, 5, 9, 6], 6));
console.log();

//Task 8
console.log("Task 8");
const getRandomNumber = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

console.log(getRandomNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log();

//Task 9
console.log("Task 9");
const createArray = (arrayLength, number) => {
  return Array.from({ length: arrayLength }, () => number);
};

console.log(createArray(6, 0));
console.log(createArray(4, 11));
console.log();

//Task 10
console.log("Task 10");
const createContinuousArray = (number, arrayLength) => {
  return Array.from({ length: arrayLength }, () => number++);
};

console.log(createContinuousArray(1, 4));
console.log(createContinuousArray(-6, 4));
