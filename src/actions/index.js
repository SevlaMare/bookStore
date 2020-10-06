const createBook = book => (
  { type: 'CREATE_BOOK', book }
);

const removeBook = book => (
  { type: 'REMOVE_BOOK', book }
);

const filterBooks = category => (
  { type: 'CHANGE_FILTER', filter: category }
);

export { createBook, removeBook, filterBooks };
