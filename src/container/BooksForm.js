import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = ({ createBook }) => {
  const [newBook, setNewBook] = useState({ title: '', category: '' });

  const handleChange = event => {
    event.persist();

    setNewBook(state => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    createBook(newBook);
    setNewBook({ title: '', category: '' });
    event.preventDefault();
  };

  return (
    <form>
      <label htmlFor="title">
        Title:
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={newBook.title}
        />
      </label>

      <label htmlFor="category">
        Category:
        <select
          type="text"
          id="category"
          name="category"
          onChange={handleChange}
          required
        >

          { categories.map(category => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          )) }
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

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => { dispatch(createBook(book)); },
});

export default connect(
  null,
  mapDispatchToProps,
)(BooksForm);
