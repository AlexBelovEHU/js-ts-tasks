/**
 * Write a function that returns a function that
 * 1) converts all uppercase letters into lowercase letters
 * 2) removes all non-alphanumeric characters
 * 3) returns a result of a calling isPalindrome function from TestUtils object
 *
 * Note: Alphanumeric characters include letters and numbers.
 *
 * Note: You MUST call isPalindrome function from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ isPalindrome: function() }} TestUtils
 * @returns {function}
 */
//test comment
module.exports.palindrome = function palindrome(TestUtils) {
  return st => {
    let regex = /[\W_]/gi;
    st = st.toLowerCase().replaceAll(regex, '');
    objgect = {};
    objgect['str'] = st;
    return TestUtils.isPalindrome.call(objgect);
  };
};
