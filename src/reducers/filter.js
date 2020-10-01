const INITIAL_STATE = {
  filter: ''
};

const FilterReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'CHANGE_FILTER') {
    console.log('REDUCER>>>', state.filter)
    console.log('ACTION>>>', action.category)

    return state.filter = action.category
  }

  return state;
};

export default FilterReducer;
