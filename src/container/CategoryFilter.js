import React from 'react';
import { connect } from 'react-redux';
import CATEGORIES from '../constant'

const CategoryFilter = ({ filter }) => {
  console.log('ARRAY>>>>>>>', filter)

  return (
    <form>
      {CATEGORIES.map(category => (
        <label>{category}
          <input type="checkbox" value={category}/>
        </label>
      ))}
    </form>
  )
}

export default connect(state => {
  console.log('state>>>>>>>', state)
  filter: state.FilterBooks.filter
})(CategoryFilter);
