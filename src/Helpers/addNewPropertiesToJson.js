function addNewPropertiesToJson(orders, prices) {
  // Create a new array to store orders with added properties (price and qty).
  const ordersWithPriceAndQty = orders.map((order) => {
    // Find the corresponding product in the 'prices' array based on the 'drink' property in the order.
    const product = prices.find(
      (product) => product.drink_name === order.drink
    );

    // If a matching product is found, extract the price based on the 'size' property in the order.
    if (product) {
      const price = `${product.prices[order.size]}`;
      // Assign the extracted price to the 'price' property of the order; if not found, set it to 0.
      order.price = price !== undefined ? price : 0;
    } else {
      // If no matching product is found, set the 'price' property to 0.
      order.price = 0;
    }

    // Assign a hardcoded 'qty' value of 1 to the order, because is only one product, for each order.
    order.qty = 1;

    // Return the order with added 'price' and 'qty' properties.
    return order;
  });

  // Return the array of orders with added properties.
  return ordersWithPriceAndQty;
}

export default addNewPropertiesToJson;
