import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

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

// TODO: specify reducer on component

export default connect(state => ({
  fetchedBooks: state.ReducerBooks,
}))(BooksList);
