import React from 'react';
import { connect } from 'react-redux';

import CATEGORIES from '../constants'

const CategoryFilter = ({ etc }) => {
  console.log('ARRAY>>>>>>>', etc)

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

// const mapStateToProps = state => ({
//   categories: state.FilterBooks.categories
// })

// export default connect(mapStateToProps)(CategoryFilter);
export default connect(state => {
  etc: state.FilterBooks
  console.log(state)
})(CategoryFilter);