const get = require('./get');

/**
 * Gets values at indices.
 * @param {Array} x an array
 * @param {Iterable<number>} is indices (-ve: from right)
 * @returns {Array}
 */
function getAll(x, is) {
  var a = [];
  for(var i of is)
    a.push(get(x, i));
  return a;
}
module.exports = getAll;
