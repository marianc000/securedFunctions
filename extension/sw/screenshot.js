// screenshot.js
export async function takeScreenshot(windowId, format) {
   const url= await chrome.tabs.captureVisibleTab(windowId, { format }) ;
   return fetch(url).then(r => r.blob());
}