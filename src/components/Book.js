import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const {
    id, title, category, children,
  } = props;

  return (
    <tr className={"book"}>
      <td>{category}</td>
      <td>{title}</td>
      <td>{children}</td>
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
