import React, { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Polls from '../api/polls';
import ExistingRecs from './ExistingRecs.jsx';

const ExistingPoll = ({ params, poll }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Existing Poll {params.id} Sketch</h1>
      {poll ? <ExistingRecs restaurants={poll.recommendations} /> : null}
    </div>
  );
};

ExistingPoll.propTypes = {
  params: PropTypes.object.isRequired,
  poll: PropTypes.object,
};

export default createContainer((params) => {
  return {
    poll: Polls.findOne({ pathID: parseInt(params.params.id) }),
  };
}, ExistingPoll);
