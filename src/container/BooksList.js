import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ fetchedBooks, remove }) => {
  const handleClick = book => { remove(book); };

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th />
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
        ))}
      </tbody>
    </table>
  );
};

// BooksList.propTypes = {
//   fetchedBooks: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//     }),
//   ),
// };

// BooksList.defaultProps = {
//   fetchedBooks: PropTypes.array,
// };

// const dispatch = useDispatch();

const mapStateToProps = state => ({
  fetchedBooks: state.ReducerBooks.books,
});

const mapDispatchToProps = dispatch => ({
  remove: book => { dispatch(removeBook(book)); },
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(BooksList);
