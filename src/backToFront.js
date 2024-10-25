/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (symbolsCount > str.length) {
    return str;
  }
  copied = '';
  for (i = str.length - symbolsCount; i < str.length; i++) {
    copied += str[i];
  }
  return copied + str + copied;
};
