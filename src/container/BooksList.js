import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ fetchedBooks, remove }) => {
  const handleClick = book => { remove(book); };

  return (
    <table className={"bookstore"}>
      <tbody>
        { fetchedBooks.map(book => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
          >
            <label htmlFor={`rmv-${book.id}`}>
              <input
                id={`rmv-${book.id}`}
                name={`rmv-${book.id}`}
                onClick={() => handleClick(book)}
                type="button"
                value="remove"
              />
            </label>
          </Book>
        ))}
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
  remove: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  fetchedBooks: PropTypes.array,
};

const mapStateToProps = state => ({
  fetchedBooks: state.book.books.filter(book => book.category === (state.filter || book.category)),
});

const mapDispatchToProps = dispatch => ({
  remove: book => { dispatch(removeBook(book)); },
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(BooksList);
