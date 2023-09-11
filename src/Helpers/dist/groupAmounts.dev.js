"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function groupAmounts(data) {
  // Create a map to keep track of sums
  var sumMap = {}; // Iterate over the list of objects

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      var key = item.user.toString(); // Convert the field to a string to use it as a key in the map

      if (sumMap.hasOwnProperty(key)) {
        // If the key already exists in the map, add the amount to the existing value
        sumMap[key] += item.amount;
      } else {
        // If the key doesn't exist, create it and set the initial amount
        sumMap[key] = item.amount;
      }
    } // Convert the map back to a list of objects

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var result = Object.keys(sumMap).map(function (key) {
    return {
      user: key,
      totalAmount: sumMap[key]
    };
  });
  return result;
}

var _default = groupAmounts;
exports["default"] = _default;