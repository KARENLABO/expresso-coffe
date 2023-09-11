"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function addNewPropertiesToJson(orders, prices) {
  // Create a new array to store orders with added properties (price and qty).
  var ordersWithPriceAndQty = orders.map(function (order) {
    // Find the corresponding product in the 'prices' array based on the 'drink' property in the order.
    var product = prices.find(function (product) {
      return product.drink_name === order.drink;
    }); // If a matching product is found, extract the price based on the 'size' property in the order.

    if (product) {
      var price = "".concat(product.prices[order.size]); // Assign the extracted price to the 'price' property of the order; if not found, set it to 0.

      order.price = price !== undefined ? price : 0;
    } else {
      // If no matching product is found, set the 'price' property to 0.
      order.price = 0;
    } // Assign a hardcoded 'qty' value of 1 to the order, because is only one product, for each order.


    order.qty = 1; // Return the order with added 'price' and 'qty' properties.

    return order;
  }); // Return the array of orders with added properties.

  return ordersWithPriceAndQty;
}

var _default = addNewPropertiesToJson;
exports["default"] = _default;