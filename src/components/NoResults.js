import React from 'react';
import Alert from 'react-bootstrap/Alert';

const NoResults = () => {
  return (
    <Alert variant="warning">
      <Alert.Heading>Sorry, no results!</Alert.Heading>
      <p>We couldn't find any books!!</p>
    </Alert>
  );
};

export default NoResults;
