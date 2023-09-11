function calculateTotalPages(data, itemsPerPage) {
  if (data) {
    return Math.ceil(data.length / itemsPerPage);
  } else {
    return 1;
  }
}

export default calculateTotalPages;
