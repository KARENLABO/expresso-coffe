function paginateArray(array, itemsPerPage, pageNumber) {
  if (array) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return array.slice(startIndex, endIndex);
  }
}

export default paginateArray;
