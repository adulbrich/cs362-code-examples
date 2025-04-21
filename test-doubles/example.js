import { registerUser } from "./registerUser.js";
import { Database } from "./database.js";

registerUser("hello@example.com", "abc");

console.log(Database.findByEmail("hello@example.com"));
console.log(Database.findById("1"));
