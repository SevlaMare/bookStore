import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { title, category, children } = props;

  return (
    <tr className='book'>
      <td>
        <div className='book-info'>
          <div>
            <h6 className="book-category">Action</h6>
            <h2 className="book-title">The Hunger Games</h2>
            <p className="author">Suzanne Collins</p>
          </div>
          <div className="book-footer">
            <button className="btn-actions" type="button">Comments</button>
            <button className="btn-actions" type="button">Remove</button>
            <button className="btn-actions" type="button">Edit</button>
          </div>
        </div>
      </td>

      <td className="percentage-col">
        <div className="percentage-container">
          <div className="percent-img-container">
            <img src="../img/progress-bar.png" />
          </div>
          <div>
            <p className="percentage-number">62%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
      </td>

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
