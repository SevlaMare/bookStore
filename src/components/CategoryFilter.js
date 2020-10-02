import React from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../constants';

const CategoryFilter = ({ filterBooks }) => {
  return (
    <form className="filter">
      <select
        type="text"
        id="category"
        name="category"
        onChange={filterBooks}
        required
      >
        <option key="all" value="all">all</option>
        { CATEGORIES.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </form>
  );
};

CategoryFilter.propTypes = {
  filterBooks: PropTypes.func.isRequired,
};

export default CategoryFilter;
