import React from 'react';
import { connect } from 'react-redux';

import CATEGORIES from '../constants'

const CategoryFilter = ({ categ }) => {
  console.log('ARRAY>>>>>>>', categ)

  const handleFilterChange = event => {
    console.log(event.target);
    console.log('changed');
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
        <option
          key='all'
          value='all'>all</option>

      { CATEGORIES.map(category => (
          <option>
            {category}
          </option>
      ))}
      </select>
    </form>
  )
}

const mapStateToProps = state => ({
  categ: state.filter.filter,
});

const mapDispatchToProps = dispatch => ({
  filter: category => { dispatch(filterBook(category)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryFilter);
