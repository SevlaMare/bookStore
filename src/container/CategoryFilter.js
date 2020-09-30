import React from 'react';
import { connect } from 'react-redux';

const CategoryFilter = ({ filter }) => {
  // TODO: filter books
  // filter.map(books => {})

  return (
    <input type="checkbox"/>
  )
}

export default connect(state => {
  filter: state.FilterBooks.filter
})(CategoryFilter);
