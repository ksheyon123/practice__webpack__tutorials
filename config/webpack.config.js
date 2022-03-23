"use strict";

const GenerateJsonPlugin = require("generate-json-webpack-plugin");
const paths = require("./paths");
const manifest = require("./manifest");

// Get environment variables to inject into our app.

// This is the development configuration.
// It is focused on developer experience and fast rebuilds.
// The production configuration is different and lives in a separate file.
module.exports = {
  // You may want 'eval' instead if you prefer to see the compiled output in DevTools.
  // See the discussion in https://github.com/facebookincubator/create-react-app/issues/343.
  devtool: "cheap-module-source-map",
  // These are the "entry points" to our application.
  // This means they will be the "root" imports that are included in JS bundle.
  // The first two entry points enable "hot" CSS and auto-refreshes for JS.
  entry: {
    store: [
      require.resolve("./polyfills"),
      //.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appBackgroundJs,
    ],
  },
  plugins: [new GenerateJsonPlugin("manifest.json", manifest)],
};
