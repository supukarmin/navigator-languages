# navigator-languages

Retrieves the language information saved in window.navigator in a backwards compatible way. (retrieves an array which works like `navigator.languages`)

# Install
```
npm i navigator-languages
```

# Usage
```js
const navigatorLanguages = require('navigator-languages');
console.log(navigatorLanguages());
/* CONSOLE:
["de-DE", "en-US", "nl"]
*/
```

# How does it work?
It checks for different entries in `window.navigator` (especially the IE ones) and formats them then as **BCP 47 Language Tags** to match the specification. (It's mostly just uppercase/lowercase formatting and validating). And that's it.
