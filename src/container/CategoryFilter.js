import React from 'react';
import { connect } from 'react-redux';
import CATEGORIES from '../constant'

const CategoryFilter = ({ categories }) => {

  return (
    <form className='filter'>
      {CATEGORIES.map(category => (
        <label>{category}
          <input type="checkbox" value={category}/>
        </label>
      ))}
    </form>
  )
}

export default connect(state => {
  categories: state.FilterBooks.categories
  console.log('STATE >>>>>>>', state)
  console.log('FILTER REDUCER STATE >>>>>>>', state.FilterBooks)
  console.log('CATEGORIES >>>>>>>', state.FilterBooks.categories)
})(CategoryFilter);
