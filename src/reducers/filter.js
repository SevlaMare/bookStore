// import CATEGORIES from '../constant'

const INITIAL_STATE = {
  categories: [
    'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'
  ]
};

const FilterBooks = (state = INITIAL_STATE, action) => {
  if (action.type === 'INIT') return state = INITIAL_STATE

  console.log("YA")

  return state;
};

export default FilterBooks;
