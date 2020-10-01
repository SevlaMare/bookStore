import React from 'react';
import { connect } from 'react-redux';
import { filterBooks } from '../actions/index';

import CATEGORIES from '../constants'

const CategoryFilter = ({ filterBooks }) => {
  const handleFilterChange = event =>
    filterBooks(event.target.value);

  return (
    <form className='filter'>
      <select
        type="text"
        id="category"
        name="category"
        onChange={handleFilterChange}
        required
      >
        <option value='all'>all</option>
        { CATEGORIES.map(category => (
            <option value={category}>
              {category}
            </option>
        ))}
      </select>
    </form>
  )
}

export default connect(
  null,
  { filterBooks }
)(CategoryFilter);
