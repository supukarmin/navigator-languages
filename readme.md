# navigator-languages (tiny & dependency free)

Retrieves the language information saved in window.navigator.languages in a backwards compatible way.

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

If the browser is really old and there is no chance to get any information, you'll get `undefined`.

# Why is this needed
* IE 6 & 7 & 8: Only .systemLanguage, .userLanguage (.language & .languages missing)
* IE 9 & 10: Only .systemLanguage, .userLanguage, .browserLanguage (.language & .languages missing)
* IE 11 & Safari 8 & HTC One M8 & Google Nexus 5, etc.: doesn't support .languages, only .language
* In some Chrome versions: .languages[0] !== .language (.language doesn't support the country and probably the other additional BCP 47 Language Tag information)

There are probably many more issues like that.

# The Code
(about 260 bytes)
```js
var getNavigatorLanguages = function() {
  if (typeof navigator === 'object') {
    var t = 'anguage', n = navigator, f;
    f = n['l' + t + 's'];
    return f && f.length ? f : (t = n['l' + t] ||
      n['browserL' + t] ||
      n['userL' + t]) ? [ t ] : t;
  }
};
```
Minified: (about 180 bytes)
```js
var getNavigatorLanguages=function(){if('object'==typeof navigator){var c,a='anguage',b=navigator;return c=b['l'+a+'s'],c&&c.length?c:(a=b['l'+a]||b['browserL'+a]||b['userL'+a])?[a]:a}};
```

The umd module is about 370 bytes.

# How does it work?
It checks for different entries in `window.navigator`, in this order:
* `.languages` (if ! empty array)
* `.language`
* `.browserLanguage`
* `.userLanguage`

`.systemLanguage` is being ignored, because `.userLanguage` is always available, when also `.systemLanguage` is available and `.userLanguage` is definitely the better choice.

v1.0.0 did also some lowercase/uppercase formatting & validating, which was removed in version 2, because it's normally not needed. Use the [format-bcp-47](https://github.com/supukarmin/format-bcp-47) package, if you need to ensure client-side / server-side consistency
