function calculateSum() {
  const sum = (...nums) => nums.reduce((total, current) => total + current, 0);
  const result = sum(1, 2, 3, 4, 5);
  document.getElementById("result").innerHTML = result;
}

function combineArrays() {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];

  const merge = (...args) => [].concat(args);
  const result = merge(arr1, arr2);

  document.getElementById("result").innerHTML = result;
}
