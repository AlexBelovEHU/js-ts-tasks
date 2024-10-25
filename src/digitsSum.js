/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  n = Math.abs(n);
  sum = Math.floor(n % 10);
  currentDigitNumber = 100;
  while (n > currentDigitNumber / 10) {
    sum += Math.floor(((n % currentDigitNumber) / currentDigitNumber) * 10);
    currentDigitNumber *= 10;
  }
  return sum;
};
