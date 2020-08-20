import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Container, Spinner, Row } from 'react-bootstrap';
import './styles/App.scss';
import List from './components/List';
import Pager from './components/Pager';
import { getBooks } from './actions/books';
import PropTypes from 'prop-types';

const App = ({ books: { count, loading }, getBooks }) => {
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const [bookParams, setBookParams] = useState({
    page: params.get('page') || 1,
    itemsPerPage: 20,
    filters: []
  });

  useEffect(() => {
    getBooks(bookParams);
  }, [bookParams, getBooks]);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', bookParams.page);
    window.history.pushState({}, '', url.toString());
  }, [bookParams.page]);

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
            <Pager setBookParams={setBookParams} bookParams={bookParams} />
            <List />
          </Container>
        </div>
      )}
    </div>
  );
};

App.propTypes = {
  books: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  books: state.books
});

export default connect(mapStateToProps, { getBooks })(App);
