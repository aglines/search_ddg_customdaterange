# Set a custom date range for DuckDuckGo searches on Firefox

In DuckDuckGo on Firefox, I always end up choosing a date range.  DDG used to allow advanced settings (I think?) but this option is gone now.

A Javascript bookmarklet can set a URL where you can set specific things, but that's still user work & not automated.

Simplest code is to insert "&df=y" into the GET method (since I usually pick "in the last year")

Looks like a Firefox extension can do this, I will go down this path.  Tutorial
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension?ref=hackernoon.com

Background script tutorial
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts_2

Trigger code before a request is made - 
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest


# Tasks:
Done Create manfiest.json
- create background.js
- create icons
- load extension into Firefox
- add a setting so user can pick a custom date range to be used every time
- publish it maybe, respond to redditorarna som ville ha det också, I wasn't the only one who wanted this

