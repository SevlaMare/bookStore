import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const {
    id, title, category, children,
  } = props;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        {children}
      </td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default Book;
