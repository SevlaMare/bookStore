import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/style.css';

import { Provider } from 'react-redux';
import store from './store/index';

const INITIAL_STATE = {
  books: [
    { id: 1, title: 'Book 1', category: 'Action' },
    { id: 2, title: 'Book 2', category: 'Biography' },
    { id: 3, title: 'Book 3', category: 'Learning' },
  ],
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app'),
);

export default INITIAL_STATE;
