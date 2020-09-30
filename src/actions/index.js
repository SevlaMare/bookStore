const createBook = book => (
  { type: 'CREATE_BOOK', book }
);

const removeBook = book => (
  { type: 'REMOVE_BOOK', book }
);

const filterBooks = book => (
  { type: 'CHANGE_FILTER', book }
);

export { createBook, removeBook, filterBooks };
