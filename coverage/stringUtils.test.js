import { describe, test, expect } from "vitest";
import { reverseString, isPalindrome, truncate } from "./stringUtils.js";

describe("reverseString", () => {
  test("reverses a simple string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverses an empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("reverses a string with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
  });

  test("reverses a string with special characters", () => {
    expect(reverseString("hello!")).toBe("!olleh");
  });

  test("throws TypeError for non-string input", () => {
    expect(() => reverseString(123)).toThrow(TypeError);
    expect(() => reverseString(null)).toThrow(TypeError);
    expect(() => reverseString(undefined)).toThrow(TypeError);
    expect(() => reverseString({})).toThrow(TypeError);
  });
});

describe("isPalindrome", () => {
  test("identifies simple palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
    expect(isPalindrome("madam")).toBe(true);
  });

  test("identifies non-palindromes", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
  });

  test("handles empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("handles single character", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  test("ignores case", () => {
    expect(isPalindrome("Racecar")).toBe(true);
    expect(isPalindrome("Level")).toBe(true);
  });

  test("ignores non-alphanumeric characters", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPalindrome("Race car!")).toBe(true);
  });

  test("throws TypeError for non-string input", () => {
    expect(() => isPalindrome(123)).toThrow(TypeError);
    expect(() => isPalindrome(null)).toThrow(TypeError);
    expect(() => isPalindrome(undefined)).toThrow(TypeError);
    expect(() => isPalindrome({})).toThrow(TypeError);
  });
});

describe("truncate", () => {
  test("truncates string longer than maxLength", () => {
    expect(truncate("hello world", 5)).toBe("hello...");
    expect(truncate("lorem ipsum dolor sit amet", 10)).toBe("lorem ipsu...");
  });

  test("does not truncate string shorter than maxLength", () => {
    expect(truncate("hello", 10)).toBe("hello");
    expect(truncate("", 5)).toBe("");
  });

  test("handles string equal to maxLength", () => {
    expect(truncate("hello", 5)).toBe("hello");
  });

  test("handles zero maxLength", () => {
    expect(truncate("hello", 0)).toBe("...");
  });

  test("throws TypeError for non-string input", () => {
    expect(() => truncate(123, 5)).toThrow(TypeError);
    expect(() => truncate(null, 5)).toThrow(TypeError);
    expect(() => truncate(undefined, 5)).toThrow(TypeError);
    expect(() => truncate({}, 5)).toThrow(TypeError);
  });

  test("throws TypeError for invalid maxLength", () => {
    expect(() => truncate("hello", -1)).toThrow(TypeError);
    expect(() => truncate("hello", "world")).toThrow(TypeError);
    expect(() => truncate("hello", null)).toThrow(TypeError);
    expect(() => truncate("hello", undefined)).toThrow(TypeError);
    expect(() => truncate("hello", {})).toThrow(TypeError);
  });
});
