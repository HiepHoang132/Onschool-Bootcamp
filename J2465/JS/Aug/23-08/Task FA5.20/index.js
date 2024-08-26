// Task 1
console.log("Task 1");
const array = ["Devcamp", 1];
array.forEach((item) => console.log(typeof item === "string"));
console.log();

// Task 2
console.log("Task 2");
const sliceNth = (word, n) => {
  console.log(word.slice(0, n));
};
sliceNth("Robin Singh", 4);
console.log();

// Task 3
console.log("Task 3");
const splitWord = (word) => {
  console.log(word.split(" "));
};
splitWord("Robin Singh");
console.log();

// Task 4
console.log("Task 4");
const changeWord = (inputString) => {
  console.log(inputString.toLowerCase().replace(/ /g, "-"));
};
changeWord("Robin Singh from USA");
console.log();

// Task 5
console.log("Task 5");
const changeWord2 = (inputString) => {
  if (inputString.includes(" ")) {
    console.log(
      inputString
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
    );
  } else {
    console.log(inputString.charAt(0).toUpperCase() + inputString.slice(1));
  }
};
changeWord2("JavaScript Exercises");
changeWord2("JavaScript exercises");
changeWord2("JavaScriptExercises");
console.log();

// Task 6
console.log("Task 6");
const changeWord3 = (inputString) => {
  if (inputString.includes(" ")) {
    console.log(
      inputString
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
  } else {
    console.log(inputString.charAt(0).toUpperCase() + inputString.slice(1));
  }
};
changeWord3("js string exercises");
console.log();

// Task 7
console.log("Task 7");
const repeatString = (word, n) => {
  if (n < 1) console.log("");
  console.log(Array(n).fill(word).join(" "));
};
repeatString("Ha!", 1);
repeatString("Ha!", 2);
repeatString("Ha!", 3);

// Task 8
console.log("Task 8");

function stringToArray(inputString, n) {
  let a = [];
  for (var i = 0; i < inputString.length; i += n) {
    a.push(inputString.slice(i, i + n));
  }
  return a;
}
console.log(stringToArray("dcresource", 2));
console.log(stringToArray("dcresource", 3));

console.log();

// Task 9
console.log("Task 9");

function countWord(str, subStr) {
  const regex = new RegExp(subStr, "gi"); // /the/gi
  const matches = str.match(regex); // ['The', 'the']
  return matches ? matches.length : 0; // 2
}

console.log(countWord("The quick brown fox jumps over the lazy dog", "the"));

console.log();

// Task 10
console.log("Task 10");

function replaceRight(str, replacement) {
  return str.slice(0, -replacement.length) + replacement;
}

console.log(replaceRight("0000", "123"));
console.log();
