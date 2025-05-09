/*
 * Note: You can write this code in your githubSearch.test.js file.
 *   I did write it in a separate file for clarity during lecture.
 *   If you write these together with your other tests, you might need to wrap your hooks
 *   and tests in a describe block.
 */

import { describe, afterAll, afterEach, beforeAll, test, expect } from "vitest";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import searchResults from "./searchResults.json";

export const restHandlers = [
  http.get("https://api.github.com/search/repositories", ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get("q");
    if (query) {
      return HttpResponse.json(searchResults);
    }
  }),
];

const server = setupServer(...restHandlers);

describe("GitHub Repo Search Application with MSW", () => {
  beforeAll(() => server.listen());

  afterAll(() => server.close());

  afterEach(() => server.resetHandlers());

  test("should return search results", async () => {
    const response = await fetch(
      "https://api.github.com/search/repositories?q=vitest"
    );
    const data = await response.json();

    expect(data).toEqual(searchResults);
  });
});
