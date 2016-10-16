import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory } from 'react-router';
// import { createContainer } from 'meteor/react-meteor-data';

import reduxStore from './redux/reducers.js';
import NewPoll from './NewPoll.jsx';
import ExistingPoll from './ExistingPoll.jsx';

const store = createStore(reduxStore, applyMiddleware(thunkMiddleware));

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={NewPoll} />
        <Route path="/polls/(:id)" component={ExistingPoll} />
      </Router>
    </MuiThemeProvider>
  </Provider>
);

export default App;
