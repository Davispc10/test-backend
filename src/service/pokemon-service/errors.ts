import { ApplicationError } from "@/protocols";

export function pagingError(): ApplicationError {
  return {
    name: "pagingError",
    message: "Paging data is wrong. \n Make sure that your query contains both 'page={pageValue}' and 'pageSize={pageSizeValue}'. \n Example: 'http://localhost:3000/pokemon?page=0&pageSize=20'",
  };
}

export function sorterError(): ApplicationError {
  return {
    name: "sorterError",
    message: "Sorting data is wrong. \n Sorting options are: 'atk', 'def', 'sta', 'statTotal', 'pokedexNumber'",
  };
}
