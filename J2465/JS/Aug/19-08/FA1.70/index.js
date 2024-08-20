let user = { name: "Henry", age: 24, email: "henry@example.com" };
let arr1 = [23, 43, 63];
let arr2 = [32, 34, 36];

const showUserInfo = () => {
  const { name, age, email } = user;
  document.getElementById("result").innerHTML = `
        Name: ${name}, Age: ${age}, Email: ${email}
    `;
};

const calculateSum = (...numbers) => {
  const sum = numbers.reduce((total, current) => total + current, 0);
  document.getElementById("result").innerHTML = `
    Result: ${sum}`;
};

const combineArrays = () => {
  const result = [...arr1, ...arr2];
  document.getElementById("result").innerHTML = `
    Result: ${result}`;
};
