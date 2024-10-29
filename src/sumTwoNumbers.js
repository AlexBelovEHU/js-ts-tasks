/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  fn = 0;
  sn = 0;
  fn = firstNumber.toString().replace(/[^\.\-\d]/gi, '');
  sn = secondNumber.toString().replace(/[^\.\-\d]/gi, '');
  num1 = parseFloat(fn, 10);
  num2 = parseFloat(sn, 10);
  if (typeof num1 != 'number' || typeof num2 != 'number') {
    throw new Error(`Can't sum ${num1 + ' ' + num2}`);
  }
  return num1 + num2;
};
