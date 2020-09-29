const INITIAL_STATE = {
  books: [
    { id: 1, title: 'Book 1', category: 'Action' },
    { id: 2, title: 'Book 2', category: 'Biography' },
    { id: 3, title: 'Book 3', category: 'Learning' },
  ],
};

const ReducerBooks = (state = INITIAL_STATE, action) => {
  if (action.type === 'CREATE_BOOK') return { books: [...state.books, action.book] };
  if (action.type === 'REMOVE_BOOK') {
    const index = state.books.findIndex(b => b.id === action.book.id);
    console.log(action);
    console.log(index);
    return { books: [...state.books.slice(0, index), ...state.books.slice(index + 1)] };
  }

  return state;
};

export default ReducerBooks;
