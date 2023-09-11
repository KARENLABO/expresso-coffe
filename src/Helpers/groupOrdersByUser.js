function groupOrdersByUser(data) {
  const userOrdersMap = new Map();

  data.forEach((order) => {
    const { user, drink, size, price } = order;

    if (!userOrdersMap.has(user)) {
      userOrdersMap.set(user, {
        user,
        orders: [],
        total: 0,
      });
    }

    const userOrders = userOrdersMap.get(user);
    userOrders.orders.push({ drink, size, price });
    userOrders.total += parseFloat(price); // Parse the price as a number before adding it
  });

  return Array.from(userOrdersMap.values());
}

export default groupOrdersByUser;
