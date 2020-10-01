import React from 'react';
import { connect } from 'react-redux';

import CATEGORIES from '../constants'

const CategoryFilter = ({ categ }) => {
  console.log('ARRAY>>>>>>>', categ)

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
  categ: state.filter.filter,
});

// const mapDispatchToProps = dispatch => ({
//   filter: book => { dispatch(filterBook(book)); },
// });

export default connect(
  mapStateToProps
  // , mapDispatchToProps
)(CategoryFilter);
