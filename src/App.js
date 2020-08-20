import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Spinner, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles/App.scss';
import List from './components/List';
import Book from './components/Book';
import { getBooks } from './actions/books';

const App = ({ books: { count, books, loading }, getBooks }) => {
  const [bookParams, setBookParams] = useState({
    page: 1,
    itemsPerPage: 20,
    filters: []
  });

  useEffect(() => {
    getBooks(bookParams);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="page-wrapper">
          <Container>
            <Row className="justify-content-md-center">
              <h2>Found {count} books</h2>
            </Row>

            <List />
          </Container>
        </div>
      )}
    </div>
  );
};

Book.propTypes = {
  books: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  getBooks: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  books: state.books
});

export default connect(mapStateToProps, { getBooks })(App);
