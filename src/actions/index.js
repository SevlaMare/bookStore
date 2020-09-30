const createBook = book => (
  { type: 'CREATE_BOOK', book }
);

const removeBook = book => (
  { type: 'REMOVE_BOOK', book }
);

const filterBooks = categories => (
  { type: 'CHANGE_FILTER', categories }
);

export { createBook, removeBook, filterBooks };
