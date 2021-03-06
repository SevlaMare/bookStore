import React from 'react';

import Header from './Header';
import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';

const App = () => (
  <div>
    <main>
      <Header />
      <BooksList />

      <article className="form">
        <h3 id="add-new">ADD NEW BOOK</h3>
        <BooksForm />
      </article>
    </main>
  </div>
);

export default App;
