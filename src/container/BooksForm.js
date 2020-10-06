import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';
import CATEGORIES from '../constants';

const BooksForm = ({ createBook }) => {
  const [newBook, setNewBook] = useState({ title: '', category: 'Action' });

  const handleChange = event => {
    event.persist();

    setNewBook(state => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = event => {
    createBook(newBook);
    setNewBook({ title: '', category: 'Action' });
    event.preventDefault();
  };

  return (
    <form className="newbook">
      <label htmlFor="title">
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={newBook.title}
          placeholder="Book Title"
        />
      </label>

      <label htmlFor="category">
        <select
          type="text"
          id="category"
          name="category"
          onChange={handleChange}
          value={newBook.category}
          required
        >
          <option disabled value="">Category</option>
          { CATEGORIES.map(category => (
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
        className="btn btn-txt-bold"
      >
        ADD BOOK
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
