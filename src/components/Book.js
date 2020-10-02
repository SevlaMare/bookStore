import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { title, category, children } = props;

  return (
    <tr className='book'>
      <td className='col'>
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <p className="text-blue">Author</p>
        <p className="text-blue">
          Comments | {children} | Edit
        </p>
      </td>
    </tr>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  children: PropTypes.shape().isRequired,
};

export default Book;
