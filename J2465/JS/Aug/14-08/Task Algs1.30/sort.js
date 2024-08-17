/**
 * Sorts a list of numbers using various sorting algorithms.
 */
function sortNumbers() {
  const input = document.getElementById("numbers").value;
  const arr = input.split(",").map(Number);
  document.getElementById("bubble").innerText = bubbleSort([...arr]);
  document.getElementById("selection").innerText = selectionSort([...arr]);
  document.getElementById("insertion").innerText = insertionSort([...arr]);
  document.getElementById("merge").innerText = mergeSortMain(arr);
  document.getElementById("quick").innerText = quickSortMain([...arr]);
  document.getElementById("heap").innerText = heapSort([...arr]);
}
/**
 * Bubble sort algorithm.
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * * Example: bubbleSort([5, 2, 8, 3, 1]) => "1,2,3,5,8"
 * @param {number[]} arr The array to be sorted.
 * @returns {string} The sorted array as a comma-separated string.
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
  return arr.join(",");
}
/**
 * Selection sort algorithm.
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * Example: selectionSort([5, 2, 8, 3, 1]) => "1,2,3,5,8"
 * @param {number[]} arr The array to be sorted.
 * @returns {string} The sorted array as a comma-separated string.
 */
function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr.join(",");
}
/**
 * Insertion sort algorithm.
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 * Example: insertionSort([5, 2, 8, 3, 1]) => "1,2,3,5,8"
 * @param {number[]} arr The array to be sorted.
 * @returns {string} The sorted array as a comma-separated string.
 */
function insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr.join(",");
}
/**
 * Merge sort algorithm.
 * Time complexity: O(n log n)
 * Space complexity: O(n)
 * Example: mergeSort([5, 2, 8, 3, 1], 0, 4) => "1,2,3,5,8"
 *
 * @param {number[]} arr The array to be sorted.
 * @param {number} left The starting index of the subarray.
 * @param {number} right The ending index of the subarray.
 * @returns {string} The sorted array as a comma-separated string.
 */
function merge(arr, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  // Create temp arrays
  const L = new Array(n1);
  const R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (let i = 0; i < n1; i++) L[i] = arr[left + i];
  for (let j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

  let i = 0,
    j = 0;
  let k = left;

  // Merge the temp arrays back into arr[left..right]
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}
/**
 * Merges two sorted subarrays into a single sorted array.
 * @param {number[]} arr The array to be merged.
 * * @param {number} left The starting index of the left subarray.
 * @param {number} mid The ending index of the left subarray.
 * @param {number} right The ending index of the right subarray.
 */
function mergeSort(arr, left, right) {
  if (left >= right) return;

  const mid = Math.floor(left + (right - left) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function mergeSortMain(arr) {
  mergeSort(arr, 0, arr.length - 1);
  return arr;
}
/**
 * Partitions the array around a pivot element.
 *
 * @param {Array} arr The array to be partitioned.
 * @param {Number} low The starting index of the partition.
 * @param {Number} high The ending index of the partition.
 * @returns {Number} The index of the pivot element after partitioning.
 */
function partition(arr, low, high) {
  // Choose the pivot
  const pivot = arr[high];
  let i = low - 1;

  // Traverse arr[low..high] and move all smaller
  // elements on the left side. Elements from low to
  // i are smaller after every iteration
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Move pivot after smaller elements and
  // return its position
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

/**
 * Sorts an array using the QuickSort algorithm.
 *
 * @param {Array} arr The array to be sorted.
 * @param {Number} low The starting index of the sort.
 * @param {Number} high The ending index of the sort.
 */
function quickSort(arr, low, high) {
  if (low < high) {
    // pi is the partition return index of pivot
    const pi = partition(arr, low, high);

    // Recursion calls for smaller elements
    // and greater or equals elements
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

function quickSortMain(arr) {
  quickSort(arr, 0, arr.length - 1);
  return arr;
}
/**
 * Sorts an array in ascending order using the heap sort algorithm.
 *
 * @param {number[]} arr - The input array to be sorted.
 * @returns {string} The sorted array as a comma-separated string.
 * @example
 * heapSort([5, 2, 8, 3, 1, 6, 4]); // returns "1,2,3,4,5,6,8"
 */
function heapSort(arr) {
  debugger;

  buildMaxHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, 0, i);
  }
  return arr.join(",");
}

/**
 * Builds a max heap from the input array.
 * @param {number[]} arr - The input array to be transformed into a max heap.
 */
function buildMaxHeap(arr) {
  for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
    heapify(arr, i, arr.length);
  }
}

/**
 * Heapifies a subtree rooted at the given index.
 *
 * @param {number[]} arr - The input array.
 * @param {number} index - The index of the root of the subtree to heapify.
 * @param {number} heapSize - The size of the heap.
 */
function heapify(arr, index, heapSize) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  if (left < heapSize && arr[left] > arr[largest]) largest = left;
  if (right < heapSize && arr[right] > arr[largest]) largest = right;
  if (largest !== index) {
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    heapify(arr, largest, heapSize);
  }
}
