(function () {
  function each(list, transform) {
    var keys = Object.keys(list),
        index = 0,
        total

    // Check if 'length' is the last key
    // this is a guess to turn around this Safari bug
    // https://bugs.webkit.org/show_bug.cgi?id=152454
    if (keys.indexOf('length') === (keys.length - 1)) {
      keys.pop()
    }

    total = keys.length

    if (typeof transform !== 'function') {
      throw('The second param must be a function')
      return
    }

    for (; index < total; index++) {
      transform(list[keys[index]], keys[index])
    }
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = each
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return each
      });
    }
    else {
      window.each = each
    }
  }
}())
