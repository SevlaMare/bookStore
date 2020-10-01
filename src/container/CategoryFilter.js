import React from 'react';
import { connect } from 'react-redux';

import CATEGORIES from '../constants'

const CategoryFilter = () => {
  // console.log('ARRAY>>>>>>>', filter)

  return (
    <form className='filter'>
      { CATEGORIES.map(category => (
        <label>{category}
          <input type="checkbox" value={category}/>
        </label>
      ))}
    </form>
  )
}

export default CategoryFilter;

// export default connect(state => {
//   console.log('state>>>>>>>', state)
//   filter: state.FilterBooks.filter
// })(CategoryFilter);
