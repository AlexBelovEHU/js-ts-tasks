/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  let out = [];
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    if (!out.includes(arr[i])) {
      count++;
      out.push(arr[i]);
    }
  }
  return count;
};
