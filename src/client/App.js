import React from 'react';
import {hot} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store';
import Router from './router';
import muiTheme from './muiTheme';

import jwt_decode from 'jwt-decode';
import localStorage from 'localStorage';
import { AUTH_USER} from './Constants/actionTypes';
import {customerTokenSuccess,fetchUserLotto} from './Constants/Customer.Actions';

//Authenticate
const token = localStorage.getItem('token');
if (token){
    store.dispatch({ type: AUTH_USER });
    const userId = jwt_decode(token).user_id;
    const emailID = jwt_decode(token).email_id;
    //debugger;
    store.dispatch(customerTokenSuccess(token,userId,emailID));
    store.dispatch(fetchUserLotto(userId));
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <IntlProvider locale="en">
          <MuiThemeProvider muiTheme={muiTheme}>
            <Router />
          </MuiThemeProvider>
        </IntlProvider>
      </Provider>
    );
  }
}

export default hot(module)(App);
