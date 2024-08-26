// Task 1
console.log("Task 1");

function makeArray(start, end) {
  let a = [];
  if (start < end) {
    for (var i = start; i <= end; i++) {
      a.push(i);
    }
  } else {
    for (var i = start; i >= end; i--) {
      a.push(i);
    }
  }
  return a;
}

console.log(makeArray(4, 7));
console.log(makeArray(-4, 7));
console.log();

// Task 2
console.log("Task 2");

function mergeArray(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(mergeArray([1, 2, 3], [100, 2, 1, 10]));
console.log(mergeArray([1, 2, 3], [1, 2, 3]));
console.log();

// Task 3
console.log("Task 3");

function countElement(array, number) {
  return array.filter((value) => value === number).length;
}

console.log(countElement([1, 2, 1, 4, 5, 1, 1, 3, 1], 1));
console.log(countElement([1, 2, 1, 4, 5, 1, 1, 3, 1], 2));
console.log();

// Task 4
console.log("Task 4");

function sum(array) {
  return array.reduce((total, current) => total + current, 0);
}

console.log(sum([1, 2, 3, 4, 5, 6]));
console.log();

// Task 5
console.log("Task 5");

function evenArray(array) {
  return array.filter((number) => number % 2 === 0);
}
console.log(evenArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log();

// Task 6
console.log("Task 6");

function sumArray(arr1, arr2) {
  const maxLength = Math.max(arr1.length, arr2.length);

  let sum = 0;
  let array = [];
  for (var i = 0; i < maxLength; i++) {
    sum = (arr1[i] || 0) + (arr2[i] || 0);
    array.push(sum);
  }

  return array;
}

console.log(sumArray([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));
console.log(sumArray([1, 2, 3], [1, 2, 3, 4, 5]));
console.log();

// Task 7
console.log("Task 7");

function noDupArray(array) {
  return [...new Set(array)];
}

console.log(noDupArray([1, 2, 3, 1, 5, 1, 4, 6, 3, 4]));
console.log();

// Task 8
console.log("Task 8");

function mergeArray2(arr1, arr2) {
  const unique1 = arr1.filter((number) => !arr2.includes(number));
  const unique2 = arr2.filter((number) => !arr1.includes(number));

  return [...unique1, ...unique2];
}
console.log(mergeArray2([1, 2, 3], [100, 2, 1, 10]));
console.log(mergeArray2([1, 2, 3], [1, 2, 3]));
console.log();

// Task 9
console.log("Task 9");

function descending(array) {
  return array.sort((a, b) => b - a);
}

console.log(descending([1, 3, 1, 4, 2, 5, 6]));

// Task 10
console.log("Task 10");

function shiftElement(arr, x, y) {
  if (x < 0 || y < 0 || x >= arr.length || y >= arr.length) {
    throw new Error("Index out of bounds");
  }

  // Remove the element from position x
  const element = arr.splice(x, 1)[0]; // 1 is delete count, so delete 1

  // Insert the removed element at position y
  arr.splice(y, 0, element);

  return arr;
}
console.log(shiftElement([10, 20, 30, 40, 50], 0, 2)); // Output: [20, 30, 10, 40, 50]
console.log(shiftElement([10, 20, 30, 40, 50], 1, 2)); // Output: [10, 30, 20, 40, 50]

console.log();
