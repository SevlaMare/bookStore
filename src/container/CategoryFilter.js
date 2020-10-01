import React from 'react';
import { connect } from 'react-redux';

import CATEGORIES from '../constants'

const CategoryFilter = ({ categories }) => {
  console.log('ARRAY>>>>>>>', categories)

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

const mapStateToProps = state => ({
  categories: state.FilterBooks.categories
})

export default connect(mapStateToProps)(CategoryFilter);