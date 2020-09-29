import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = ({ fetchedBooks }) => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({ title: '', category: '' });

  const handleTitle = event => {
    event.persist();

    setNewBook(state =>
    // console.log(state);

      ({
        ...state,
        title: event.target.value,
        category: document.querySelector('#category').value,
      }));
  };

  const handleSubmit = () => dispatch(createBook(newBook));

  return (
    <form>
      <label htmlFor="title">
        Title:
        <input type="text" id="title" name="title" onChange={handleTitle} />
      </label>

      <label htmlFor="category">
        Category:
        <select type="text" id="category" name="category" onChange={handleTitle}>
          { categories.map(category => <option key={category} value={category}>{category}</option>)}
        </select>
      </label>

      <button
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

// BooksForm.propTypes = {
//   fetchedBooks: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//     }),
//   ),
// };

// BooksForm.defaultProps = {
//   id: Math.random(),
// };

export default connect(state => ({
  fetchedBooks: state.ReducerBooks.books,
}))(BooksForm);
