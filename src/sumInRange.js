/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  sum = 0;
  for (i = Math.min(start, end); i < Math.max(start, end) + 1; i++) {
    sum += i;
  }
  return sum;
};
