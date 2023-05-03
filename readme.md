# Set a custom date range for DuckDuckGo searches on Firefox

In DuckDuckGo on Firefox, I always end up choosing a date range.  DDG used to allow advanced settings (I think?) but this option is gone now.

A Javascript bookmarklet can set a URL where you can set specific things, but that's still user work & not automated.

Simplest code is to insert "&df=y" into the GET method (since I usually pick "in the last year")

Looks like a Firefox extension can do this, I will go down this path.  

Extension submitted and awaiting review at https://addons.mozilla.org/en-US/firefox/addon/duckduckgo-date-range/


## Tutorials 
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension?ref=hackernoon.com

- Background script tutorial
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts_2

- event listeners details
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest

- Trigger code before a request is made  
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest


## Tasks done : 
- create manfiest.json
- create background.js
- create icons
- load extension into Firefox
- tested happy paths, looks OK
- package / sign to install manually
- update the person out there who also wanted this to exist


## To do:

## Not doing 
- not testing other paths, i need this done today (the age-old struggle twixt testing and being done)
- some stress tests incl diff browsers

## Maybe someday
- add a setting so user can pick a custom date range to be used every time
