import React from 'react';

import { Provider } from 'react-redux';
import store from '../store/index';

import BooksList from './BooksList';
import BooksForm from './BooksForm';

const App = () => (
  <Provider store={store}>
    <div>
      <BooksList />
      <BooksForm />
    </div>
  </Provider>
);

export default App;
