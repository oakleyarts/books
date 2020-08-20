import React from 'react';
import Book from './Book';
import NoResults from './NoResults';

export const List = (books) => {
  const hasBooks = books.length > 0;

  return hasBooks ? (
    <ul className="book-list">
      {books.map((book, index) => (
        <li key={index}>
          <Book bookData={book} />
        </li>
      ))}
    </ul>
  ) : (
    <NoResults />
  );
};

export default List;
