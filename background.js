chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "SpamWarden",
    title: "Spam check for \"%s\"",
    type: "normal",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  chrome.tabs.create({
    url: "http://twitter.com/search?q=" + encodeURIComponent(info.selectionText)
  });
});