function processData(numbers, arrays, objectToClone, objectsToMerge) {
  const sum = (...nums) => nums.reduce((total, current) => total + current, 0);

  const concatArrays = (...arrs) => [].concat(...arrs);

  const merge = (...obj) => Object.assign({}, ...obj); // a: 1, b:3, c:4, d: 5
  
  const sort = (...nums) => nums.sort((a, b) => a - b);

  return {
    sum: sum(...numbers),
    concatenatedArray: concatArrays(...arrays),
    clonedObject: { ...objectToClone },
    mergedObject: merge(...objectsToMerge), // { a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 }
    sortedNumbers: sort(...numbers),
  };
}

// Kiểm tra
const data = {
  numbers: [5, 3, 8, 1, 10, 2],
  arrays: [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8],
  ],
  objectToClone: { a: 1, b: 2, c: 3 },
  objectsToMerge: [{ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 }],
};

const result = processData(
  data.numbers,
  data.arrays,
  data.objectToClone,
  data.objectsToMerge
);

console.log(result);

/**
 * Output dự kiến
 * {
 *   sum: 29,
 *   concatenatedArray: [1, 2, 3, 4, 5, 6, 7, 8]
 *   clonedObject: {a: 1, b: 2, c: 3}
 *   mergedObject: {a: 1, b: 3, c: 4, d: 5}
 *   sortedNumbers: [1, 2, 3, 5, 8, 10]
 * }
 */
