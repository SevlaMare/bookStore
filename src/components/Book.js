import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { title, category, children } = props;

  return (
    <tr className='book'>
      <td>
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <p className="text-blue">Author</p>
        <p className="text-blue">
          Comments | {children} | Edit
        </p>
      </td>

      <td className="col-2">
      <img className="f-left percentage_test" src="img/percentage_test.png" />
        <p>75%</p>
        <p>Completed</p>
      </td>

      <hr className="vertical-line"></hr>

      <td>
        <h6>CURRENT CHAPTER</h6>
        <p>Chapter 17</p>
        <button className="btn btn-sm btn-white" type="button">UPDATE PROGRESS</button>
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
