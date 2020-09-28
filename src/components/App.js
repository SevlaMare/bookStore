import React from 'react';

import store from '../store/index'
import { Provider } from 'react-redux';

import BooksList from './BooksList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <BooksList />
        {/* <BooksForm /> */}
      </div>
    </Provider>
  );
};

export default App;
