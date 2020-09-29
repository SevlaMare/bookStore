import React from 'react';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { connect, useDispatch } from 'react-redux';
import { removeBook } from '../actions';

const BooksList = ({ fetchedBooks }) => {
  const dispatch = useDispatch();

  const handleClick = book => {
    const index = 
    dispatch(removeBook(book, ))
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        { fetchedBooks.map(book => (
          <>
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              category={book.category}
            />
            <tr key={`btn-${book.id}`}>
              <button onClick={() => handleClick(book)}>
                Remove
              </button>
            </tr>
          </>
        ))
        }
      </tbody>
    </table>
  );
};

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
