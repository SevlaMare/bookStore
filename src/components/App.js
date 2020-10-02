import React from 'react';

import Header from './Header';
import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';
import CategoryFilter from '../container/CategoryFilter';

const App = () => (
  <div>
    <main>
      <Header />
      <BooksList />
    </main>

    <article className="forms">
      <hr className="line-horizontal"></hr>

      <h3>SELECT CATEGORY</h3>
      <CategoryFilter />

      <h3>ADD NEW BOOK</h3>
      <BooksForm />
    </article>
  </div>
);

export default App;
