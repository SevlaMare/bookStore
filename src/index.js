import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';

import App from './components/App';
import './css/style.css';

const INITIAL_STATE = {
  FilterBooks:{
    categories: [
      'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'
    ]
  },
  ReducerBooks: {
    books: [
      { id: 1, title: 'Book 1', category: 'Action' },
      { id: 2, title: 'Book 2', category: 'Biography' },
      { id: 3, title: 'Book 3', category: 'Learning' },
    ]
  }
};

const store = createStore(rootReducer, INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
);
