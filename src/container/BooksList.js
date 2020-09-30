import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ fetchedBooks }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>

    <tbody>
      { fetchedBooks.map(books => (
        <Book
          key={books.id}
          id={books.id}
          title={books.title}
          category={books.category}
        />
      )) }
    </tbody>
  </table>
);

BooksList.propTypes = {
  fetchedBooks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ),
};

BooksList.defaultProps = {
  fetchedBooks: PropTypes.array,
};

export default connect(state => ({
  fetchedBooks: state.ReducerBooks.books,
}))(BooksList);
