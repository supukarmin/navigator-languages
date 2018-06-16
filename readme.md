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

# Why is this needed
* IE 9 & IE 10: .language & .languages isn't supported, instead: .userLanguage, .browserLanguage, .systemLanguage
* IE 11 & Safri 8: doesn't support .languages
* In some Chrome versions: .languages[0] !== .language (.language doesn't support the country and probably the other additional BCP 47 Language Tag information)

There are probably many more issues like that.

# The Code
(about 350 bytes)
```js
var getNavigatorLanguages = function() {
  if (typeof navigator === 'object') {
    var n = navigator;
    var t = 'anguage';
    var l = 'l' + t + 's';
    if (n[l]) return n[l];
    var o = ['l'+t, 'browserL'+t, 'userL'+t, 'systemL'+t];
    for (var i = 0; i < 4; i++) {
      if (n[o[i]]) return [ n[o[i]] ];
    }
  }
  return null;
};
```
Minified: (about 200-250 bytes)
```js
var getNavigatorLanguages=function(){if('object'==typeof navigator){var a=navigator,b='anguage',c='l'+b+'s';if(a[c])return a[c];for(var d=['l'+b,'browserL'+b,'userL'+b,'systemL'+b],e=0;4>e;e++)if(a[d[e]])return[a[d[e]]]}return null};
```

The umd module is about 400 bytes.

# How does it work?
It checks for different entries in `window.navigator` (especially the IE ones).

v1.0.0 did also some lowercase/uppercase formatting & validating, which was removed in version 2, because it's normally not needed. Use the [format-bcp-47](https://github.com/supukarmin/format-bcp-47) package, if you need to ensure client-side / server-side consistency
