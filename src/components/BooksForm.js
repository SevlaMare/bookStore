import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => (
  <form>
    <div>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" />
    </div>
    <div>
      <label htmlFor="category">Category:</label>
      <select type="text" id="category" name="category">
        { categories.map(category => <option key={category}>{category}</option>)}
      </select>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
);

export default BooksForm;