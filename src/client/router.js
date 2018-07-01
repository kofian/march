import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AppLayout from 'containers/AppLayout';
import LoginForm from 'containers/LoginForm';
import EuroMillions from 'containers/LotteriesPage/EuroMillions';

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" name="login" component={LoginForm} />
        <Route path="/" name="home" component={AppLayout} />
        <Route path="/euromillions" name="euromillions" component={EuroMillions} />
      </Switch>
    </BrowserRouter>
  );
}
