import React from 'react';
import InputForm from './Friends/InputForm.jsx';
import RestaurantsView from './Friends/RestaurantsView.jsx';

const NewPoll = () => (
  <div>
    <div className="top">
      <div className="jumbotron jumbotron-clear">
        <h1>A happy medium is no longer rare.</h1>
      </div>
    </div>
    <div className="container">
      <InputForm />
    </div>
    <RestaurantsView />
  </div>
);

export default NewPoll;
