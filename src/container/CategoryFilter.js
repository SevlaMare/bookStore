import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterBooks } from '../actions/index';

import CATEGORIES from '../constants';

const CategoryFilter = ({ filterBooks }) => {
  const handleFilterChange = event => filterBooks(event.target.value);

  return (
    <form className="filter">
      <select
        type="text"
        id="category"
        name="category"
        onChange={handleFilterChange}
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

export default connect(
  null,
  { filterBooks },
)(CategoryFilter);
