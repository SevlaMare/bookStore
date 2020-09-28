import React from 'react';

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

export default Book;
