// Code wasn't storing browser data correctly, didn't realize Firefox can't do this,
// instead will use browser runtime message to send data to background script

let currentOptions = {
  dateRangeOption: "n",
  fromDate: "",
  toDate: "",
};

function buildDateRangeQueryString(option, fromDate, toDate) {
  if (option === "custom" && fromDate && toDate) {
    return `&df=${fromDate}&dto=${toDate}`;
  } else if (option && ["n", "d", "w", "m", "y"].includes(option)) {
    return `&df=${option}`;
  }
  return "";
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

browser.runtime.onMessage.addListener((message) => {
  currentOptions = message;
});
