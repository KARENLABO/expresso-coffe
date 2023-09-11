function joinProperties(usersOrders, agroupedAmounts) {
  const mergedData = usersOrders.map((userData) => {
    const { user } = userData;
    const totalAmountInfo = agroupedAmounts.find((item) => item.user === user);

    if (totalAmountInfo) {
      // If a corresponding entry is found in totalAmountData, add it
      return {
        ...userData,
        totalAmount: totalAmountInfo.totalAmount,
      };
    }
    // If no corresponding entry is found, just return the original userData
    return userData;
  });

  return mergedData;
}

export default joinProperties;
