# Set a custom date range for DuckDuckGo / Firefox

- Searching with DuckDuckGo on Firefox, I must always choose a date range
- There didn't seem to be a way to set this permanently (that I like)
- A Javascript bookmarklet could do this, but it's the same amount of work
- A firefox extension can do it:  insert "&df=y" into the URL (for date range = the past year)
- Extension v1 was submitted & awaiting review at https://addons.mozilla.org/en-US/firefox/addon/duckduckgo-date-range/
- let user pick their own date range to be used every time

# To run this code:
- Clone the repo into a local folder
- In Firefox, type "about:debugging" in the address bar
- Click "This Firefox" (below Setup, top left as of this writing), then "Load Temporary Add-on"
- Navigate to the local folder where you cloned the repo, choose "manifest.json", click "Open"
- You should see "DuckDuckGo Date Range" in Temporary Extensions. (it will be functional until Firefox is closed)
- Click the Extensions icon (a puzzle-piece), hover over the area, click Open Extension
- 


## To do:

## Tasks done : 
- create manfiest.json
- create background.js
- create icons
- load extension into Firefox
- tested happy paths, looks OK
- package / sign / upload to addons.mozilla.org
- update the person out there who also wanted this to exist

## Not doing 
- not testing other paths, i need this done today (the age-old struggle twixt testing and being done)
- some stress tests incl diff browsers

## Planned future features
- tbd

### Tutorials that I consulted 
- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension?ref=hackernoon.com

- Background script tutorial
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts_2

- event listeners details
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest

- Trigger code before a request is made  
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
