// Sorts a list of numbers using various sorting algorithms
function sortNumbers() {
  const input = document.getElementById("numbers").value;
  const arr = input.split(",").map(Number);
  document.getElementById("bubble").innerText = bubbleSort([...arr]);
}

/** Bubble sort algorithm
 * Time complexity: 0(n^2), space complexity: 0(1)
 * Example: bubbleSort([5, 2, 8, 3, 1]) => "1, 2, 3, 5, 8"
 * @param {number[]} arr The arr to be sorted
 * @returns {string} The sorted array as a comma-separated string
 */
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr.join(", ");
}
