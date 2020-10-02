import React from 'react';

import Header from './Header';
import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';
import CategoryFilter from '../container/CategoryFilter';

const App = () => (
  <div>
    <Header />
    <CategoryFilter />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
