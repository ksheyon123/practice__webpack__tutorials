let color = "#3aa757";

window.chrome.runtime.onInstalled.addListener(() => {
  window.chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});
