import { test, expect } from "vitest";
import { rot13 } from "./rot13.js";

// first cycle
test("returns empty string for empty input", () => {
  const result = rot13("");
  expect(result).toBe("");
});

// second cycle
test("transforms one lowercase letter without wrapping", () => {
  const result = rot13("a");
  expect(result).toBe("n");
});

// third cycle
test("transforms one lowercase letter with warping", () => {
  const result = rot13("n");
  expect(result).toBe("a");
});

// refactor rot13.js to extract the between logic and the code point logic in separate functions

// fourth cycle
test("transforms one uppercase letter without warping", () => {
  expect(rot13("A")).toBe("N");
});

// fifth cycle
test("transforms one uppercase letter with warping", () => {
  expect(rot13("N")).toBe("A");
});

// sixth cycle
test("doesn't transform '`' (first char before 'a')", () => {
  expect(rot13("`")).toBe("`");
});

// sixth cycle -- additional boundary cases
test("doesn't transform '{' (first char after 'z')", () => {
  expect(rot13("{")).toBe("{");
});

test("doesn't transform '@' (first char before 'A')", () => {
  expect(rot13("@")).toBe("@");
});

test("doesn't transform '[' (first char after 'Z')", () => {
  expect(rot13("[")).toBe("[");
});

// refactor rot13.js to extract the character transformation logic in a separate function

// seventh cycle
test("transforms a multi-character string", () => {
  expect(rot13("abc")).toBe("nop");
});

// tests refactoring for comprehensiveness
test("transforms all lowercase letters", () => {
  expect(rot13("abcdefghijklmnopqrstuvwxyz")).toBe(
    "nopqrstuvwxyzabcdefghijklm"
  );
});

test("transforms all uppercase letters", () => {
  expect(rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe(
    "NOPQRSTUVWXYZABCDEFGHIJKLM"
  );
});

test("doesn't transform multiple symbols", () => {
  expect(rot13("`{@[")).toBe("`{@[");
});

// eigth cycle
test("throws an error when no parameter is passed", () => {
  expect(() => {
    rot13();
  }).toThrowError("Expected string parameter");
});

// ninth cycle
test("throws an error when non-string is passed", () => {
  expect(() => {
    rot13(123);
  }).toThrowError("Expected string parameter");
});

// tenth cycle - special case inputs
test("doesn't transform numbers", () => {
  expect(rot13("0123456789")).toBe("0123456789");
});

test("doesn't transform non-English letters", () => {
  expect(rot13("ñåéîøüç")).toBe("ñåéîøüç");
});

test("handles emojis correctly", () => {
  expect(rot13("🤓🤩")).toBe("🤓🤩");
});
