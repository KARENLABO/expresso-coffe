function calculateTotalPages(data, itemsPerPage) {
  return Math.ceil(data.length / itemsPerPage);
}

export default calculateTotalPages;
