import React from 'react';
import { connect } from 'react-redux';
import { filterBooks } from '../actions/index';

import CATEGORIES from '../constants'

const CategoryFilter = ({ categ, applyFilter }) => {
  const handleFilterChange = event => { applyFilter(event.target.value) };
  console.log(categ)

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
}, console.log(state.filter));

const mapDispatchToProps = dispatch => ({
  applyFilter: category => { dispatch(filterBooks(category)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryFilter);
