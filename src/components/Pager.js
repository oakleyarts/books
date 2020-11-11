import React from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Pagination from '@vlsergey/react-bootstrap-pagination';
import PropTypes from 'prop-types';

const Pager = ({ setBookParams, bookParams, count }) => {
  const { page, itemsPerPage } = bookParams;
  const currentPage = page - 1;
  const totalPages = Math.ceil(count / itemsPerPage);

  const updateRequest = (e) => {
    setBookParams({ ...bookParams, page: e.target.value + 1 });
  };

  return (
    <Row className="justify-content-md-center pager">
      <Pagination value={currentPage} totalPages={totalPages} onChange={(e) => updateRequest(e)} />
    </Row>
  );
};

Pager.propTypes = {
  setBookParams: PropTypes.func.isRequired,
  bookParams: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  count: state.books.count
});

export default connect(mapStateToProps, {})(Pager);
