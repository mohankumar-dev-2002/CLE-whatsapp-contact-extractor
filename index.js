chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // The first tab in the array is the active tab
    var currentTab = tabs[0];
    if (currentTab.url === "https://web.whatsapp.com/") {
        chrome.tabs.executeScript(
            {
                file:'./content.js'
            }
        )
    } else {
      // The current tab is not web.whatsapp.com
      alert("Open the whatsapp web and click again")
    }
  });

