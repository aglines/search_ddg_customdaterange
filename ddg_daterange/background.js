function addDateRange(requestDetails) {
    const ddgUrl = 'https://duckduckgo.com/';
    const dateString = '&df=y';
    // change this for other date ranges :
    // const dateString = '&df=m'; //month, &df=w for week
    // Custom date syntax:
    // const dateString = '&df=2010-01-01..2020-01-01'
    // obviously having a custom date hard-coded here is weird but the point is zero user interaction,
    // maybe incorporate that into the extension later

    if (requestDetails.url.startsWith(ddgUrl) && !requestDetails.url.includes(dateString) {
        const newUrl = requestDetails.url + dateString;
        return {
            redirectUrl: newUrl
        };
    }
}
