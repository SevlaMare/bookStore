import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const BooksList = ({ fetchedBooks }) => (
  <>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>

      <tbody>
        { fetchedBooks.map(book => (
          <Book {...book} />
        )) }
      </tbody>
    </table>
  </>
);

export default connect(state => ({
  fetchedBooks: state.books,
}))(BooksList);
