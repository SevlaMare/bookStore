import React from 'react';
const bookList = [
  {id: 1, title: 'Book 1', category: 'Action'}
];

const BooksList = (books) => (
  <>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        { bookList.map(book =>
          <tr key={book.id}>
            <td>{book.id}</td>
          </tr>
          ) } 
      </tbody>
    </table>
  </>
);

export default BooksList;