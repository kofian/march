import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';
import Paper from 'material-ui/Paper';

import AppBar from 'containers/AppBar';
import AppMenu from 'containers/AppMenu';
import ModalsLayout from 'containers/ModalsLayout/index';
import NotFound from 'containers/NotFound';
import ServersPage from 'containers/ServersPage/index';
import EuroMillionsBar from 'containers/LotteriesPage/EuroMillionsBar';
import MegaMillionsLayout from 'containers/LotteriesPage/MegaMillionsLayout';
import EuroMillionsLayout from 'containers/LotteriesPage/EuroMillionsLayout';
import EuroMillionsGoLayout from 'containers/LotteriesPage/EuroMillionsGoLayout';
import ProgressBar from 'components/ProgressBar';

export class AppLayout extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired
  };

  render() {
    const {loading} = this.props;

    return (
      <section>
        <Paper zDepth={1} style={{position: 'fixed', width: '100%', zIndex: 10}}>
          <AppBar>
            <AppMenu />
          </AppBar>
          {loading && <ProgressBar />}
        </Paper>
        <section style={{paddingTop: 50}}>
          <Switch>
            <Route exact path="/" component={EuroMillionsLayout} />
            <Route exact path="/euromillionslayout" name="euromillionslayout" component={EuroMillionsLayout} />
            <Route exact path="/megamillionslayout" name="megamillions" component={MegaMillionsLayout} />
            <Route exact path="/euromillionsgolayout" name="euromillionsgo" component={EuroMillionsGoLayout} />
            <Route exact path="/users" name="home-users" component={NotFound} />
            <Redirect to="/" />
          </Switch>
        </section>
        <ModalsLayout />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.api.get('loading')
  };
}

export default connect(mapStateToProps)(AppLayout);
