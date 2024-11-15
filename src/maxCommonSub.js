/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let out = '';
  for (i = 0; i < str1.length; i++) {
    for (j = 0; j < str2.length; j++) {
      if ((str1[i] = str2[j])) {
        let len = 0;
        let localSub = '';
        while (true) {
          if (i + len >= str1.length) {
            break;
          }

          if (str1[i + len] == str2[j + len]) {
            localSub += str1[i + len];
            len++;
          } else {
            break;
          }
        }
        if (len > out.length) {
          out = localSub;
        }
      }
    }
  }
  return out;
};
