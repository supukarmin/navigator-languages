module.exports = function() {
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
