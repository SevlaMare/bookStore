import React from 'react';

import Header from './Header';
import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';
import CategoryFilter from './CategoryFilter';

const App = () => (
  <div>
    <main>
      <Header />
      <BooksList />

      <article className="form">
        <hr className="line-horizontal" />

        <h3>SELECT CATEGORY</h3>
        <CategoryFilter />

        <h3>ADD NEW BOOK</h3>
        <BooksForm />
      </article>
    </main>
  </div>
);

export default App;
