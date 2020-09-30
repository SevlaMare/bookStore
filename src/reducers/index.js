import { combineReducers } from 'redux';
import ReducerBooks from './books';
import FilterBooks from './books';

export default combineReducers({
  ReducerBooks,
  FilterBooks
});
