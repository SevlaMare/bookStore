import { combineReducers } from 'redux';
import ReducerBooks from './books';
import FilterReducer from './filter';

export default combineReducers({
  book: ReducerBooks,
  filter: FilterReducer,
});
