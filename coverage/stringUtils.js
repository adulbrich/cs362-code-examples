/**
 * Reverses a string
 * @param {string} str - The input string
 * @returns {string} - The reversed string
 */
export function reverseString(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.split("").reverse().join("");
}

/**
 * Checks if a string is a palindrome
 * @param {string} str - The input string
 * @returns {boolean} - True if the string is a palindrome
 */
export function isPalindrome(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return normalized === normalized.split("").reverse().join("");
}

/**
 * Truncates a string to a specified length and adds ellipsis
 * @param {string} str - The input string
 * @param {number} maxLength - Maximum length
 * @returns {string} - The truncated string
 */
export function truncate(str, maxLength) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  if (typeof maxLength !== "number" || maxLength < 0) {
    throw new TypeError("Max length must be a positive number");
  }

  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + "...";
}
