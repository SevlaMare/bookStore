import { combineReducers } from 'redux';
import ReducerBooks from './books';

export default combineReducers({
  ReducerBooks,
});

// now books are accessible like:
// ReducerBooks: {Books: [...]}
