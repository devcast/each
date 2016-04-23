module.exports = function each(list, transform) {
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
