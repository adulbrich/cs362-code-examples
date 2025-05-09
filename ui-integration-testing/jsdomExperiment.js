import { JSDOM } from "jsdom";

// Create a JSDOM instance with basic HTML
const dom = new JSDOM("<!DOCTYPE html><p id='hello'>Hello world!</p>");

// Serialize the DOM to HTML
console.log(dom.serialize());

// Get an element by ID
const paragraph = dom.window.document.getElementById("hello");
console.log(paragraph.textContent); // "Hello world!"
