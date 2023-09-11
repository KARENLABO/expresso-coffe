function groupAmounts(data) {
  // Create a map to keep track of sums
  const sumMap = {};

  // Iterate over the list of objects
  for (const item of data) {
    const key = item.user.toString(); // Convert the field to a string to use it as a key in the map
    if (sumMap.hasOwnProperty(key)) {
      // If the key already exists in the map, add the amount to the existing value
      sumMap[key] += item.amount;
    } else {
      // If the key doesn't exist, create it and set the initial amount
      sumMap[key] = item.amount;
    }
  }

  // Convert the map back to a list of objects
  const result = Object.keys(sumMap).map((key) => ({
    user: key,
    totalAmount: sumMap[key],
  }));

  return result;
}

export default groupAmounts;
