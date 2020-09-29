import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';

import { useDispatch } from 'react-redux';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = ({ fetchedBooks }) => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({ title: '', category: '' });

  const handleChange = event => {
    event.persist();
    setNewBook(state => {
      console.log(state);
      return { ...state, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = () =>
    dispatch(createBook(newBook));

  return (
    <form>
      <label htmlFor="title">
        Title:
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="category">
        Category:
        <select type="text" id="category" name="category" onChange={handleChange} >
          { categories.map(category => <option key={category}>{category}</option>)}
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


export default connect(state => ({
  fetchedBooks: state.ReducerBooks.books,
}))(BooksForm);
