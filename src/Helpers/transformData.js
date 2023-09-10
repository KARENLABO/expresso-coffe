function transformData(data, keyToCheck, valueToTransform, expectedValue) {
  return data.map((item) => {
    if (item[keyToCheck] === valueToTransform) {
      // Replace the value
      return { ...item, [keyToCheck]: expectedValue };
    }
    // Keep the element unchanged
    return item;
  });
}

export default transformData;
