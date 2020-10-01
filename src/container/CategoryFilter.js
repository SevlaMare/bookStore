import React from 'react';
import { connect } from 'react-redux';
import { filterBooks } from '../actions/index';

import CATEGORIES from '../constants'

const CategoryFilter = ({ categ, filterBooks }) => {
  const handleFilterChange = event => {
    console.log(categ);
    filterBooks(event.target.value)
  };

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

const mapStateToProps = state => ({
  categ: state.filter,
}, console.log('filter:', state.filter));

export default connect(
  mapStateToProps,
  { filterBooks }
)(CategoryFilter);
