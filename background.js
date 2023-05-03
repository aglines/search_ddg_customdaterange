// use options to date range query string

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
  
    return browser.storage.local.get(["dateRangeOption", "fromDate", "toDate"]).then(result => {
      const queryString = buildDateRangeQueryString(result.dateRangeOption, result.fromDate, result.toDate);
      if (requestDetails.url.startsWith(ddgUrl) && !requestDetails.url.includes(queryString)) {
        const newUrl = requestDetails.url + queryString;
        return {
          redirectUrl: newUrl
        };
      }
    });
  }


// add code to listen for requests
browser.webRequest.onBeforeRequest.addListener(
    addDateRange,
    { urls: ["https://duckduckgo.com/*"] },
    ["blocking"]
    // "blocking" needed in order to redirect request

);


// notes
// when addDateRange is called, why create const ddgUrl with the same URL? 
// it already has the requestDetails.url object, so this isn't DRY
// I could slice the asterisk off the end of the URL, but this is more readable
// building the string is VERY repetitive, made it DRY
