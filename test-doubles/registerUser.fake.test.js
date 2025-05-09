import { test, expect, vi, beforeEach } from "vitest";
import { registerUser } from "./registerUser.js";
import { Database } from "./database.js";

// Option 1 - using vi.mock()
vi.mock("./database.js", () => {
  return {
    Database: {
      _data: {},
      _idCounter: 1,
      save: vi.fn((record) => {
        const id = Database._idCounter++;
        Database._data[id] = { ...record, id };
        return id;
      }),
      reset: vi.fn(() => {
        Database._data = {};
        Database._idCounter = 1;
      }),
    },
  };
});

// Option 2 - dependency injection
// import { Database } from "./inMemoryDatabase.js";

beforeEach(() => {
  Database.reset();
  vi.clearAllMocks();
});

test("saves user record in database", () => {
  const email = "iamfake@oregonstate.edu";
  const password = "pa$$Word123";
  const spy = vi.spyOn(Database, "save");

  registerUser(email, password);

  // Option 2 - dependency injection
  // registerUser(email, password, Database);

  expect(spy).toHaveBeenCalled();

  spy.mockRestore();
});

test("saves user record in database", () => {
  const email = "iamfake@oregonstate.edu";
  const password = "pa$$Word123";
  const spy = vi.spyOn(Database, "save");

  registerUser(email, password);

  // Option 2 - dependency injection
  // registerUser(email, password, Database);

  const userRecord = spy.mock.calls[0][0];

  expect(userRecord).toMatchObject({
    email: expect.stringContaining(email),
    password: expect.not.stringContaining(password),
  });

  // Verify hash has correct length for bcrypt
  expect(userRecord.password).toHaveLength(60);

  // Verify hash has correct algorithm prefix
  expect(userRecord.password).toMatch(/^\$(2a|2b)\$/);

  spy.mockRestore();
});

test("returns null on database error", () => {
  const email = "iamfake@oregonstate.edu";
  const password = "pa$$Word123";
  const spy = vi.spyOn(Database, "save");

  spy.mockImplementation(() => {
    throw new Error();
  });

  const response = registerUser(email, password);

  // Option 2 - dependency injection
  // const response = registerUser(email, password, Database);

  expect(response).toBeNull();

  spy.mockRestore();
});
