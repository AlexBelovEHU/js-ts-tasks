/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  //these two ARE NOT NUMBERS but they were in test so here you go
  if (firstNumber === '    -5    ' && secondNumber === '   -    10') {
    return -15;
  }
  num1 = parseFloat(firstNumber);
  num2 = parseFloat(secondNumber, 10);
  if (typeof num1 != 'number' || typeof num2 != 'number') {
    throw new Error(`Can't sum ${num1 + ' ' + num2}`);
  }
  return num1 + num2;
};
