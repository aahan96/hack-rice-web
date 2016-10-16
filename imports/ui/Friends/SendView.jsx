import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import { showEnd } from '../redux/actions';
import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

// import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

export const createPoll = (id, recommendations) => (
  Meteor.call('polls.makePoll', id, recommendations,
    (error, result) => {
      if (error) console.log(error);
      else {
        console.log(id);
        console.log(result);
      }
    }
  )
);

const SendView = ({ show, handleClick, recommendations }) => (
  <div>
    <div className="container" style={{ paddingBottom: '10px' }}>
      <h1>Step 2: Invite your friends</h1>
      <Button
        onClick={() => {
          const id = Math.floor(10000000 * Math.random());
          FB.ui({
            method: 'send',
            link: `https://medrare.herokuapp.com/polls/${id}`,
          });
          handleClick();
          createPoll(id, recommendations);
        }}
        bsStyle="success"
        role="button"
      >
        Invite through FB Messenger
      </Button>
    </div>
    {show ?
    (<div className="end">
      <div className="container" style={{ paddingBottom: '10px' }}>
        <h1>Thanks for using our app!</h1>
        <h3>
          <div>
            <AccountsUIWrapper />
          </div>
          for personalized recommendations.
        </h3>
      </div>
    </div>) : null }
  </div>
);

SendView.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  recommendations: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  show: state.show,
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(showEnd());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SendView);
