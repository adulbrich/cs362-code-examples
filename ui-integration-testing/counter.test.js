/**
 * @vitest-environment jsdom
 */
import fs from "fs";
import path from "path";
import { describe, test, expect, beforeEach } from "vitest";
import { setupCounter } from "./counter.js";
import { getByText } from "@testing-library/dom";
import "@testing-library/jest-dom/vitest";
import { userEvent } from "@testing-library/user-event";

describe("Counter Application", () => {
  beforeEach(() => {
    const htmlPath = path.resolve(__dirname, "./counter.html");
    const htmlContent = fs.readFileSync(htmlPath, "utf-8");
    document.body.innerHTML = htmlContent;
    setupCounter();
  });

  test("should start with initial count of 0", () => {
    const counterButton = document.getElementById("counter");
    expect(counterButton.textContent).toBe("0");
  });

  test("should increment count when clicked", async () => {
    const counterButton = document.getElementById("counter");

    counterButton.click();
    expect(counterButton.textContent).toBe("1");

    counterButton.click();
    expect(counterButton.textContent).toBe("2");
  });

  test("counter increments when clicked", async () => {
    const counter = getByText(document.body, "0");
    await userEvent.click(counter);
    expect(counter).toHaveTextContent("1");
  });
});
