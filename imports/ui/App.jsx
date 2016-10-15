import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import { createContainer } from 'meteor/react-meteor-data';

import reduxStore from './redux/reducers.js';
import InputForm from './Friends/InputForm.jsx';
import RestaurantsView from './Friends/RestaurantsView.jsx';

const store = createStore(reduxStore, applyMiddleware(thunkMiddleware));

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <div className="top">
          <div className="jumbotron jumbotron-clear">
            <h1>A happy medium is no longer rare.</h1>
          </div>
        </div>
        <div className="container">
          <InputForm />
          <RestaurantsView />
          <h1>Step 2: Invite your friends</h1>
        </div>
      </div>
    </MuiThemeProvider>
  </Provider>
);

export default App;
