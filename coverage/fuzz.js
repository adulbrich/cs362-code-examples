const { reverseString, isPalindrome, truncate } = require("./stringUtils");

function fuzz(buf1, buf2) {
  try {
    reverseString(buf1);
  } catch (e) {
    if (!(e instanceof TypeError)) throw e;
  }

  try {
    isPalindrome(buf1);
  } catch (e) {
    if (!(e instanceof TypeError)) throw e;
  }

  try {
    const maxLength = parseInt(buf2);
    truncate(buf1, maxLength); // Try with a fixed length
  } catch (e) {
    if (!(e instanceof TypeError)) throw e;
  }

  try {
    const str1 = buf1.toString();
    const str2 = buf2.toString();

    // Test with both inputs as strings
    truncate(str1, parseInt(str2));
  } catch (e) {
    if (!(e instanceof TypeError)) throw e;
  }
}

module.exports = {
  fuzz,
};
