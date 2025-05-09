import { expect, test, describe, beforeEach } from "vitest";
import { Calculator } from "./calculator.js";

// AAA Arrange-Act-Assert
test("adds 1 + 2 to equal 3", () => {
  const calculator = new Calculator(); // Arrange
  const result = calculator.add(1, 2); // Act
  expect(result).toBe(3); // Assert
});

// method-driven testing - not recommended
test("Calculator works correctly", () => {
  const calculator = new Calculator();

  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.divide(6, 2)).toBe(3);
});

// behavior-driven approach and AAA - preferred
test("adds 1 + 2 to equal 3", () => {
  const calculator = new Calculator();
  const result = calculator.add(1, 2);
  expect(result).toBe(3);
});

test("subtracts 5 - 2 to equal 3", () => {
  const calculator = new Calculator();
  const result = calculator.subtract(5, 2);
  expect(result).toBe(3);
});

test("multiplies 2 * 3 to equal 6", () => {
  const calculator = new Calculator();
  const result = calculator.multiply(2, 3);
  expect(result).toBe(6);
});

test("divides 6 / 2 to equal 3", () => {
  const calculator = new Calculator();
  const result = calculator.divide(6, 2);
  expect(result).toBe(3);
});

test("divides 6 / Infinity to equal 0", () => {
  const calculator = new Calculator();
  const result = calculator.divide(6, Infinity);
  expect(result).toBe(0);
});

test("divides by zero", () => {
  const calculator = new Calculator();
  expect(() => calculator.divide(6, 0)).toThrowError();
});

test("divides by zero alternative", () => {
  const calculator = new Calculator();
  const result = () => calculator.divide(6, 0);
  expect(result).toThrowError();
});

// grouping tests in a describe block
describe("multiplication operation", () => {
  test("returns positive for two positive inputs", () => {
    const calculator = new Calculator();
    const result = calculator.multiply(2, 3);
    expect(result).toBe(6);
  });

  test("returns positive for two negative inputs", () => {
    const calculator = new Calculator();
    const result = calculator.multiply(-2, -3);
    expect(result).toBe(6);
  });

  test("returns negative for opposite-signed inputs", () => {
    const calculator = new Calculator();
    const result = calculator.multiply(-2, 3);
    expect(result).toBe(-6);
  });
});

// with a test fixture in a beforeEach hook
describe("multiplication operation with fixture", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("returns positive for two positive inputs", () => {
    const result = calculator.multiply(2, 3);
    expect(result).toBe(6);
  });

  test("returns positive for two negative inputs", () => {
    const result = calculator.multiply(-2, -3);
    expect(result).toBe(6);
  });

  test("returns negative for opposite-signed inputs", () => {
    const result = calculator.multiply(-2, 3);
    expect(result).toBe(-6);
  });
});
