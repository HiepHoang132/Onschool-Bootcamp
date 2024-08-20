sumEvenNumbers = (numbers) => {
  return numbers
    .filter((num) => num % 2 === 0)
    .reduce((total, current) => total + current, 0);
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumEvenNumbers(numbers)); // 30
