import { createStore } from 'redux';
import ReducerBooks from './reducers/books';

const store = createStore(ReducerBooks, INITIAL_STATE);

export default store;
