import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const Book = (bookData) => {
  const {
    book_author,
    book_publication_city,
    book_publication_country,
    book_publication_year,
    book_pages,
    book_title,
    id
  } = bookData;

  return (
    <Card id={id}>
      <Card.Body>
        <Card.Title>{book_title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{book_author.toString()}</Card.Subtitle>
        <Card.Text>
          Number of pages: {book_pages}
          Publication year: {book_publication_year}
          Publication place: {` ${book_publication_city}, ${book_publication_country} `}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Book.propTypes = {
  bookData: PropTypes.object.isRequired,
  book_author: PropTypes.array.isRequired,
  book_publication_city: PropTypes.string.isRequired,
  book_publication_country: PropTypes.string.isRequired,
  book_publication_year: PropTypes.string.isRequired,
  book_pages: PropTypes.number.isRequired,
  book_title: PropTypes.string.isRequired
};

export default Book;
