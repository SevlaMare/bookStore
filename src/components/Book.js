import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { id, title, category } = props;

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  category: PropTypes.func.isRequired,
};

Book.defaultProps = {
  id: Math.floor(),
};

export default Book;
