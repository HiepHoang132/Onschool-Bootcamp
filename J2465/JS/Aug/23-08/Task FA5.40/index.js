// Task 1
console.log("Task 1");

function count(word, char) {
  return word.split("").filter((character) => character.toLowerCase() === char)
    .length;
}

console.log(count("DCresource: JavaScript Exercises", "e"));
console.log();

// Task 2
console.log("Task 2");

console.log("dcresource ".trim());
console.log(" dcresource".trim());
console.log(" dcresource ".trim());
console.log();

// Task 3
console.log("Task 3");

function removeElement(str, element) {
  return str.replace(element, "");
}
console.log(
  removeElement("The quick brown fox jumps over the lazy dog", "the")
);
console.log();

// Task 4
console.log("Task 4");

function checkEnding(array, word) {
  return array.endsWith(word);
}
console.log(checkEnding("JS PHP PYTHON", "PYTHON"));
console.log(checkEnding("JS PHP PYTHON", "JS"));
console.log();

// Task 5
console.log("Task 5");

function compare(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(compare("abcd", "AbcD"));
console.log(compare("ABCD", "Abce"));
console.log();

// Task 6
console.log("Task 6");

function checkUpper(str, n) {
  return str[n] === str[n].toUpperCase();
}
console.log(checkUpper("Js STRING EXERCISES", 1));
console.log(checkUpper("Js STRING EXERCISES", 2));
console.log();

// Task 7
console.log("Task 7");
function checkLower(str, n) {
  if (str[n].toLowerCase() === str[n].toUpperCase()) {
    return false;
  }

  return str[n] === str[n].toLowerCase();
}

console.log(checkLower("Js STRING EXERCISES", 1));
console.log(checkLower("Js STRING EXERCISES", 2));
console.log();

// Task 8
console.log("Task 8");

function strStartWith(str, word) {
  return str.startsWith(word);
}

console.log(strStartWith("js string exercises", "js"));
console.log();

// Task 9
console.log("Task 9");

function checkEmpty(str) {
  return typeof str === "string" && str.length === 0;
}

console.log(checkEmpty("abc"));
console.log(checkEmpty(""));
console.log();

// Task 10
console.log("Task 10");

function reverse(str) {
  return str.split("").reverse().join('')
}

console.log(reverse("AaBbc"));
console.log();
