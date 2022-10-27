import Pokemon from '../models/pokemon';

const MAXIMUM_SIZE = 100;

const paginationHandler = async (query) => {
  const totalItens = await Pokemon.count();

  const size = parseInt(query.size) || 20;
  let limit;

  if (size > MAXIMUM_SIZE) {
    limit = MAXIMUM_SIZE;
  } else {
    limit = size;
  }

  const totalPages = Math.ceil(totalItens / limit);
  let page = parseInt(query.page) || 1;

  if (page > totalPages) {
    page = totalPages;
  }

  const offset = (page - 1) * limit;

  return { limit, offset, page, totalPages };
};

export default paginationHandler;
