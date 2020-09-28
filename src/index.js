import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/style.css';

import { Provider } from 'react-redux';

import { createStore } from 'redux';
import combineReducers from './store/reducers/index';

const INITIAL_STATE = {
  books: [
    { id: 1, title: 'Book 1', category: 'Action' },
    { id: 2, title: 'Book 2', category: 'Biography' },
    { id: 3, title: 'Book 3', category: 'Learning' },
  ],
};

const store = createStore(combineReducers, INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
);

