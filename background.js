let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    var activeTab = tabs[0];
    var activeTabId = activeTab.id; // or do whatever you need
  });

//  chrome.browserAction.onClicked.addListener(function (tab) {
//    var found = false;
//    var tabId;
//    chrome.tabs.query({}, function (tabs) {
//      for (var i = 0; i < tabs.length; i++) {
//        if (tabs[i].url.search("www.pandora.com/") > -1) {
//          found = true;
//          tabId = tabs[i].id;
//        }
//      }
//      if (found == false) {
//        chrome.tabs.executeScript(null, { file: "buy.js" });
//      } else {
//        chrome.tabs.update(tabId, { selected: true });
//      }
//    });
//  });

  chrome.tabs.onCreated.addListener(function (activeInfo, second) {
    console.log("onCreated");

    chrome.tabs.getSelected(null, function (tab) {
      if (tab && tab.url) {
        console.log("onCreated tab url:" + tab.url);
      }
    });
  });

  chrome.tabs.onUpdated.addListener(function (activeInfo, second) {
    console.log("onUpdated");
    chrome.tabs.getSelected(null, function (tab) {
      if (tab && tab.url) {
        console.log("onUpdated tab url:" + tab.url);
      }
    });
  });

//  chrome.tabs.onActiveChanged.addListener(function (activeInfo, second) {
//    console.log("onActiveChanged");
//    chrome.tabs.getSelected(null, function (tab) {
//      if (tab && tab.url) {
//        console.log("onActiveChanged tab url:" + tab.url);
//      }
//    });
//  });

  chrome.tabs.onActivated.addListener(function (activeInfo, second) {
    console.log("onActivated" + activeInfo.tabId);
    //chrome.tabs.query({}, function (tabs) {
    //  for (var i = 0; i < tabs.length; i++) {
    //    if (tabs[i].id == activeInfo.tabId)
    //      console.log("onActiveChanged tab url:" + tabs[i].url);
    //  }
    //});


    chrome.tabs.get(activeInfo.tabId, async (tab) => {
        //let muted = !tab.mutedInfo.muted;
        //await chrome.tabs.update(tabId, { muted });

        const isNetflix=tab.url.search('https://www.netflix.com/')

        if(tab.url.search('https://www.netflix.com/')!==-1){
            console.log("netflix found");

        }
        console.log("onActiveChanged tab url:" + tab.url);
      });
  });

  //chrome.action.onClicked.addListener(function(tab) {
  //    // No tabs or host permissions needed!
  //    console.log('Turning ' + tab.url + ' red!');
  //    chrome.scripting.executeScript({
  //      code: 'document.body.style.backgroundColor="red"'
  //    });
  //  });
});
