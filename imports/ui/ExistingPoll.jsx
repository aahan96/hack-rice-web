import React, { PropTypes } from 'react';

const ExistingPoll = ({ id }) => (
  <h1>Existing Poll {id}</h1>
);

ExistingPoll.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ExistingPoll;
