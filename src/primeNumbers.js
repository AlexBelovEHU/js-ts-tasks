/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return (a, b) => {
    out = [];
    for (i = a; i <= b; i++) {
      if (isPrime(i)) {
        out.push(i);
      }
    }
    return out;
  };
};
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
