const INITIAL_STATE = {
  filter: ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi']
};

const FilterBooks = (state = INITIAL_STATE, action) => {
  if (action.type === 'CREATE_BOOK') return state

  return state;
};

export default FilterBooks;
