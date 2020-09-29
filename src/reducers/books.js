const INITIAL_STATE = {
  books: [
    { id: 1, title: 'Book 1', category: 'Action' },
    { id: 2, title: 'Book 2', category: 'Biography' },
    { id: 3, title: 'Book 3', category: 'Learning' },
  ],
};

const ReducerBooks = (state = INITIAL_STATE, action) => {
  if (action.type === 'CREATE_BOOK') return [...state, action.book];
  if (action.type === 'REMOVE_BOOK') return [...state.slice(0, action.index), ...state.slice(action.index + 1)];

  return state;
};

export default ReducerBooks;
