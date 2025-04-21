# Test Doubles

In these lectures, we use different test doubles (stubs, spies, fakes) to make our tests faster and more reliable.

We already provide a `package.json` configured for ESM and Vitest, jsdom, and Testing Library. We also include the `http-server`, `bcrypt`, and `better-sqlite3` packages and two scripts to run the apps for demonstration purposes. You don't need to run the apps to test them in this context.

You'll need to install additional dependencies in order to implement the tests.

You can install dependencies with:

```sh
npm install
```

You can run the apps with:

```sh
npm run serve:time
npm run server:search
```

Either commands will spin up a local HTTP server in our directory. You can change the URL once the server is running to navigate to the different apps, i.e., `currentTime.html` or `githubSearch.html`.

The two apps are styled inline with TailwindCSS which explains why we don't have any CSS files.

Our first example, `registerUser.js`, is a simple function that saves a new user with email and hashed password to a database. In a production environment, we'd expect the database to run on another server and require a network call. For illustration purpose, I provide a `database.js` implementation that uses a local `sqlite` database. You can test that the function works by running:

```sh
node example.js
```

The script will create a new user with our `registerUser()` function and then query the database twice: once with the email, once with the ID. Both calls should return the same email and hashed password.

Switch to the `tests` branch to see the final test suite.
