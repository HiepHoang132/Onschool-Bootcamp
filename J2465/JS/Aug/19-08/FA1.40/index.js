const [a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// Gán giá trị mặc định
const [c, d = 3] = [4];
console.log(c); // 4
console.log(d); // 3

const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};

const numbers = [1, 2, 3, 4, 5];
const { name, age, email } = user;

const [first, second, ...rest] = numbers;
console.log(rest)

document.getElementById(
  "user-info"
).innerHTML = `Name: ${name}, Age: ${age}, ${email}`;

document.getElementById(
  "array-values"
).innerText = `First: ${first}, Second: ${second}, Rest: ${rest.join(", ")}`;
