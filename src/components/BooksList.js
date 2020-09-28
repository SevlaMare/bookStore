import React from 'react';
import { connect } from 'react-redux';

const BooksList = ({fetchedBooks}) => (
  <>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>

      <tbody>
        { fetchedBooks.map(book =>
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.category}</td>
          </tr>
          ) }
      </tbody>
    </table>
  </>
);

export default connect(state => ({
  fetchedBooks: state.books
}))(BooksList);
