const ReducerBooks = (state = [], action) => {
  if (action.type === 'CREATE_BOOK') return [...state, action.book];
  if (action.type === 'REMOVE_BOOK') return [...state.slice(0, index), ...state.slice(index + 1)];

  return state;
};

export default ReducerBooks;
