# UI-Based Integration Testing

In this lecture, we cover the UI-based integration testing using Vitest, jsdom, and Testing Library.

We will work on two different apps:

1. A simple counter website that increases a counter when clicling a button
2. A photo app that allows the user to add pictures (using an URL) and their captions

We already provide a `package.json` configured for ESM and Vitest. We also include the `http-server` package and two scripts to run the apps for demonstration purposes. You don't need to run the apps to test them in this context.

You'll need to install additional dependencies in order to implement the tests.

You can install dependencies with:

```sh
npm install
```

You can run the apps with:

```sh
npm run serve:counter
npm run server:photos
```

Either commands will spin up a local HTTP server in our directory. You can change the URL once the server is running to navigate to the different apps, i.e., `counter.html` or `photos.html`.

The photos app is styled inline with TailwindCSS which explains why we don't have any CSS files.

Switch to the `tests` branch to see the final test suite.
