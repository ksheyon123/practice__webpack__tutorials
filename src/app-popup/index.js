// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App.js";

// const chromeStorage = {
//   set: function (object, callback) {
//     return window.chrome.storage.sync.set(object, callback);
//   },
//   get: function (key, callback) {
//     return window.chrome.storage.sync.get(key, callback);
//   },
//   remove: function (address, callback) {
//     return window.chrome.storage.sync.remove(address, callback);
//   },
// };

// const isEmpty = (obj) => {
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) return false;
//   }
//   return true;
// };

// const openApp = () => {
//   window.chrome.tabs.create(
//     {
//       url: window.chrome.extension.getURL("index.html"),
//     },
//     function (tab) {}
//   );
// };

// chromeStorage.get(null, (data) => {
//   const result = isEmpty(data) ? false : true;
//   if (!result) {
//     openApp();
//   } else {
//     setTimeout(() => {
//       ReactDOM.render(<App />, document.getElementById("popup"));
//     }, 250);
//   }
// });

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("popup"));
