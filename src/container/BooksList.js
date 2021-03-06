import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, filterBooks } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  fetchedBooks, remove, filterBooks,
}) => {
  const handleClick = book => { remove(book); };
  const handleFilterChange = event => filterBooks(event.target.value);

  return (
    <>
      <table className="bookstore">
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
                  className="btn-actions"
                  name={`rmv-${book.id}`}
                  onClick={() => handleClick(book)}
                  type="button"
                  value="Remove"
                />
              </label>
            </Book>
          ))}
        </tbody>
      </table>

      <hr className="line-horizontal" />

      <article className="form">
        <h3>SELECT CATEGORY</h3>
        <CategoryFilter filterBooks={handleFilterChange} />
      </article>
    </>
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
  filterBooks: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  fetchedBooks: PropTypes.array,
};

const mapStateToProps = state => ({
  fetchedBooks: state.book.books.filter(book => book.category === (state.filter || book.category)),
});

const mapDispatchToProps = dispatch => ({
  remove: book => { dispatch(removeBook(book)); },
  filterBooks: filter => { dispatch(filterBooks(filter)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BooksList);
