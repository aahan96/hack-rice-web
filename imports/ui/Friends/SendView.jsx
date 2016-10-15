import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { showEnd } from '../redux/actions';
import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

// import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

const SendView = ({ show, handleClick }) => (
  <div>
    <div className="container" style={{ paddingBottom: '10px' }}>
      <h1>Step 2: Invite your friends</h1>
      <Button
        onClick={() => {
          FB.ui({
            method: 'send',
            link: 'http://www.nytimes.com/interactive/2015/04/15/travel/europe-favorite-streets.html',
          });
          handleClick();
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
};

const mapStateToProps = state => ({
  show: state.show,
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(showEnd()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendView);
