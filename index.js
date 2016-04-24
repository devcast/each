(function() {
  'use strict';

  var each = function(list, transform) {
    var keys  = Object.keys(list),
        index = 0,
        total = keys.length;

    if(keys.indexOf('length') === (keys.length - 1))
      keys.pop();

    if(typeof transform !== 'function')
      throw(ArgumentError, 'The second param must be a function');

    // https://bugs.webkit.org/show_bug.cgi?id=152454
    for(; index < total; index++)
      transform(list[keys[index]], keys[index]);
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = each;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return each;
      });
    }
    else {
      window.each = each;
    }
  }
})();
