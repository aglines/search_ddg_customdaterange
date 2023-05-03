// a function to change the URL of a request

function addDateRange(requestDetails) {
    const ddgUrl = 'https://duckduckgo.com/';
    const dateString = '&df=y';
    // change this for other date ranges :
    // const dateString = '&df=m'; //month, &df=w for week

    // Custom date syntax: 
    //       const dateString = '&df=2010-01-01..2020-01-01'
    // obviously a custom date being hard-coded is weird, but it means zero user interaction
    // Later, maybe add option to pick custom dates a user constantly

    if (requestDetails.url.startsWith(ddgUrl) && !requestDetails.url.includes(dateString)) {
        const newUrl = requestDetails.url + dateString;
        return {
            redirectUrl: newUrl
        };
    }
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
