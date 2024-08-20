const calculateSum = () => {
  const sum = (...nums) => nums.reduce((total, current) => total + current, 0);
  const result = sum(1, 2, 3, 4, 5);
  document.getElementById("result").innerHTML = `
    Tổng các số trong [1, 2, 3, 4, 5]: ${result}
  `;
};

const findMax = () => {
  const maxNumber = (arr) => Math.max(...arr);

  const result = maxNumber([10, 20, 30, 40, 60]);
  document.getElementById("result").innerHTML = `
    Số lớn nhất trong [10, 20, 30, 40, 60]: ${result}
  `;
};
