const generatePagination = (totalItems, page, pageSize) => {
  return {
    page: parseInt(page, 10),
    pageSize: parseInt(pageSize, 10),
    totalPages: Math.round(
      totalItems % pageSize === 0
        ? totalItems / pageSize
        : totalItems / pageSize + 1
    ),
  };
};

module.exports = generatePagination;
