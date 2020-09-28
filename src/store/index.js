import { createStore } from 'redux';
import ReducerBooks from './reducers/books';

const store = createStore(ReducerBooks)

export default store;