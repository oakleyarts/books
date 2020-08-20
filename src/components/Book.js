import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';

const Book = (props) => {
  const { author, city, country, year, pages, title, id } = props;

  return (
    <Card id={id}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>Number of pages: {pages}</ListGroup.Item>
        <ListGroup.Item>Pubished: {`${year} in ${city}, ${country}`}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

Book.propTypes = {
  author: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  pages: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default Book;
