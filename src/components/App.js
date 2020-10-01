import React from 'react';

import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';
import CategoryFilter from '../container/CategoryFilter';

const App = () => (
  <div className={"container"}>
    <CategoryFilter />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
