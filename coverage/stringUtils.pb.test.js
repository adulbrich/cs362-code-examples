import { test, fc } from "@fast-check/vitest";
import { describe, expect } from "vitest";
import { reverseString, isPalindrome, truncate } from "./stringUtils.js";

describe("reverseString", () => {
  test.prop([fc.string()])(
    "reverseString: reversing twice returns the original string",
    (str) => {
      expect(reverseString(reverseString(str))).toBe(str);
    }
  );

  test.prop([fc.string()])(
    "reverseString: length remains the same after reversing",
    (str) => {
      expect(reverseString(str).length).toBe(str.length);
    }
  );

  test.prop([fc.string({ minLength: 2 })])(
    "reverseString: first character becomes last and vice versa",
    (str) => {
      const reversed = reverseString(str);
      expect(reversed[0]).toBe(str[str.length - 1]);
      expect(reversed[reversed.length - 1]).toBe(str[0]);
    }
  );
});

describe("isPalindrome", () => {
  test.prop([fc.string()])(
    "isPalindrome: a string + its reverse is always a palindrome",
    (str) => {
      const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
      const palindrome = normalized + reverseString(normalized);
      expect(isPalindrome(palindrome)).toBe(true);
    }
  );

  test.prop([fc.string({ minLength: 1 }), fc.string({ minLength: 1 })])(
    "isPalindrome: adding different characters to middle breaks palindromes",
    (str, middle) => {
      // Skip when the middle could be a palindrome itself
      fc.pre(!isPalindrome(middle));
      fc.pre(middle !== reverseString(middle));

      const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
      const almostPalindrome = normalized + middle + reverseString(normalized);
      expect(isPalindrome(almostPalindrome)).toBe(false);
    }
  );
});

describe("truncate", () => {
  test.prop([fc.string(), fc.nat(100)])(
    "truncate: result never exceeds maxLength + 3 (for ellipsis)",
    (str, maxLength) => {
      const truncated = truncate(str, maxLength);
      expect(truncated.length).toBeLessThanOrEqual(maxLength + 3);
    }
  );

  test.prop([fc.string(), fc.nat(100)])(
    "truncate: strings shorter than maxLength remain unchanged",
    (str, extraLength) => {
      // Ensure maxLength is greater than the string length
      const maxLength = str.length + extraLength;
      expect(truncate(str, maxLength)).toBe(str);
    }
  );

  test.prop([fc.string({ minLength: 5 }), fc.nat(100)])(
    "truncate: truncated strings end with ellipsis",
    (str, maxLength) => {
      // Skip if the string doesn't need truncation
      fc.pre(str.length > maxLength);

      const truncated = truncate(str, maxLength);
      expect(truncated.endsWith("...")).toBe(true);
    }
  );

  test.prop([fc.string({ minLength: 5 }), fc.nat(100)])(
    "truncate: content before ellipsis is the start of original string",
    (str, maxLength) => {
      // Skip if the string doesn't need truncation
      fc.pre(str.length > maxLength);

      const truncated = truncate(str, maxLength);
      const contentBeforeEllipsis = truncated.slice(0, -3);
      expect(str.startsWith(contentBeforeEllipsis)).toBe(true);
      expect(contentBeforeEllipsis.length).toBe(maxLength);
    }
  );
});
