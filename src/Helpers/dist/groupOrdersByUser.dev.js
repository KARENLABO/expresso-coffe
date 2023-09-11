"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function groupOrdersByUser(data) {
  var userOrdersMap = new Map();
  data.forEach(function (order) {
    var user = order.user,
        drink = order.drink,
        size = order.size,
        price = order.price;

    if (!userOrdersMap.has(user)) {
      userOrdersMap.set(user, {
        user: user,
        orders: [],
        total: 0
      });
    }

    var userOrders = userOrdersMap.get(user);
    userOrders.orders.push({
      drink: drink,
      size: size,
      price: price
    });
    userOrders.total += parseFloat(price); // Parse the price as a number before adding it
  });
  return Array.from(userOrdersMap.values());
}

var _default = groupOrdersByUser;
exports["default"] = _default;