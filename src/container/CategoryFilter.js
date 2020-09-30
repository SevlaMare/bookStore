import React from 'react';
import { connect } from 'react-redux';

const CategoryFilter = ({ filter }) => {
  console.log('ARRAY>>>>>>>', filter)

  return (
    <form>
      <input type="checkbox"/>
    </form>
  )
}

export default connect(state => {
  console.log('state>>>>>>>', state)
  filter: state.FilterBooks.filter
})(CategoryFilter);
