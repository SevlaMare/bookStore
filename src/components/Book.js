import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const {
    id, title, category, children,
  } = props;

  return (
    <tr className='book'>
      <td className="category">{category}</td>
      <td className="title">{title}</td>
      <td className="text-blue">Author</td>

      <td className="text-blue">Comments</td>
      <td className="text-blue">
        {children}
      </td>
      <td className="text-blue">Edit</td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  children: PropTypes.shape().isRequired,
};

export default Book;
