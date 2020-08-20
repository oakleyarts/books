import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import NoResults from './NoResults';

export const List = (books) => {
  const booksList = books.books;
  const hasBooks = booksList.length > 0;

  return hasBooks ? (
    <ul className="book-list">
      {booksList.map((book, index) => {
        const {
          id,
          book_pages,
          book_author,
          book_title,
          book_publication_year,
          book_publication_city,
          book_publication_country
        } = book;

        return (
          <li key={index}>
            <Book
              id={id}
              pages={book_pages}
              author={book_author}
              title={book_title}
              year={book_publication_year}
              city={book_publication_city}
              country={book_publication_country}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <NoResults />
  );
};

const mapStateToProps = (state) => ({
  books: state.books.books
});

export default connect(mapStateToProps, {})(List);
