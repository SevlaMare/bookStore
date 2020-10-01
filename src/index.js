import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';

import App from './components/App';
import './css/style.css';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App className={"Bookstore-CMS"} />
  </Provider>,
  document.querySelector('#app'),
);
