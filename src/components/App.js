import React from 'react';

import Header from './Header';
import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';
import CategoryFilter from '../container/CategoryFilter';

const App = () => (
  <div>
    <Header />
    <h3>SELECT CATEGORY</h3>
    <CategoryFilter />
    <BooksList />
    <h3>ADD NEW BOOK</h3>
    <BooksForm />
  </div>
);

export default App;
