import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/style.css';

import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.querySelector('#app'));
