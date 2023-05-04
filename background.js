// Code wasn't storing browser data correctly, didn't realize Firefox can't do this,
// instead will use browser runtime message to send data to background script

// also current options are not displayed, lets fix this

let currentOptions = {
  dateRangeOption: "n",
  fromDate: "",
  toDate: "",
};

// custom date queryString syntax:  &df=2023-04-10..2023-05-01

function buildDateRangeQueryString(option, fromDate, toDate) {
  let queryString = "";

  if (option === "custom" && fromDate && toDate) {
    queryString = `&df=${fromDate}..${toDate}`;
  } else if (option && ["n", "d", "w", "m", "y"].includes(option)) {
    queryString = `&df=${option}`;
  }
 
  return queryString;
}


function addDateRange(requestDetails) {
  const ddgUrl = "https://duckduckgo.com/";
  const queryString = buildDateRangeQueryString(currentOptions.dateRangeOption, currentOptions.fromDate, currentOptions.toDate);
  if (requestDetails.url.startsWith(ddgUrl) && !requestDetails.url.includes(queryString)) {
    const newUrl = requestDetails.url + queryString;
    return {
      redirectUrl: newUrl
    };
  }
}

browser.webRequest.onBeforeRequest.addListener(
  addDateRange,
  { urls: ["https://duckduckgo.com/*"] },
  ["blocking"]
);

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "getOptions") {
    sendResponse(currentOptions);
  } else {
    currentOptions = message;
  }
});
