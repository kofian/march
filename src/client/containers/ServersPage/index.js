import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {FormattedMessage, FormattedRelative} from 'react-intl';
import Grid from '@material-ui/core/Grid';

import * as actions from 'Constants/Customer.Actions';
import {apiAddServer, apiGetServers} from 'api/actions';
import CreateUser from './CreateUser';
import CreateUserWin from './CreateUserWin';
import MegaMillionsResult from './createMegaMillionsResult';
import EuroMillionsResult from './createEuroMillionsResult';
import EuroMillionsGoResult from './createEuroMillionsGoResult';
import styles from './serversPage.scss';
import { withStyles } from '@material-ui/core/styles';

const stylese = theme => ({
  root: {
    flexGrow: 1,
    justify: 'center',
    alignItems: 'center'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

export class ServersPage extends React.Component {
  constructor(...args) {
    super(...args);
    this.state =  {
      spacing: '16',
      password: '',
      password_confirmation: '',
      email: '',
      user_type: 'lottoCustomer',
      user_id: 0,
      lotteryId: '', 
      drawnDate: '', 
      state: '', 
      drawingType: '',
      jackpot_0: 0, 
      jackpot_1: 0, 
      jackpot_2: 0, 
      jackpot_3: 0, 
      jackpot_4: 0, 
      jackpot_5: 0, 
      lottoJackpot: 0, 
      marketingJackpot: 0, 
      jackpotAmount: '',
      marketingJackpotAmount: '',
      payoutAmount: ''
    };
    this._registerUser = this._registerUser.bind(this);
    this._createUserWin = this._createUserWin.bind(this);
  }
  
  componentDidMount() {
    this.props.actions.fetchAllCustomers();
    this.props.actions.fetchLottoWins();
    //this.props.apiGetServers();
    //setTimeout(() => this.props.apiGetServers(), 1500);
  }
  _delText(){
    debugger
    this.setState({email: ''});
    this.setState({password: ''});
    this.setState({password_confirmation: ''});
  }
  _registerUser(){
    const {email,password,password_confirmation,user_type} = this.state;
    const values = {email,password,password_confirmation,user_type};
    console.log(values);
      this.props.actions.signupUser(values,this.context.router.history);
    this._delText();
  }
  handleUserChange = key => (event) => {
      //debugger;
    this.setState({
      [key]: event.target.value
    });
  }
  _createUserWin(){
    const {user_id,lotteryId, drawnDate, state, drawingType,
      jackpot_0, jackpot_1, jackpot_2, jackpot_3, jackpot_4, jackpot_5, 
      lottoJackpot, marketingJackpot, jackpotAmount,marketingJackpotAmount,payoutAmount} = this.state;
      debugger;
    const wins = {user_id,lotteryId, drawnDate, state, drawingType,jackpot_0, jackpot_1, jackpot_2, 
    jackpot_3, jackpot_4, jackpot_5,lottoJackpot, marketingJackpot, jackpotAmount,marketingJackpotAmount,payoutAmount};
     debugger;
    this.props.actions.createLottoWin(wins);
  }
  render() {
    const {lotto_customers,classes} = this.props;
    //const { spacing} = this.state;

    return (
      <section style={{padding: 20}}>
      <Grid container className={classes.root} spacing={16} justify="center">
      
        <Grid item xs={4}>
        <CreateUser
         handleUserChange={this.handleUserChange}
         _registerUser={this._registerUser}
         email={this.state.email}
         password={this.state.password}
         password_confirmation={this.state.password_confirmation}
        />
        </Grid>
        
        <Grid item xs={8}>
        <CreateUserWin
         handleUserChange={this.handleUserChange}
         _createUserWin={this._createUserWin}
         drawingType={this.state.drawingType}
        />
        </Grid>
        
      </Grid>  
       
        <Table multiSelectable>
          <TableHeader>
            <TableRow displayBorder>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
              <TableHeaderColumn>User Type</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover>
            {lotto_customers.map(({id, email, user_type}) => (
              <TableRow key={id}>
                <TableRowColumn>{id}</TableRowColumn>
                <TableRowColumn>{email}</TableRowColumn>
                <TableRowColumn>{user_type}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Grid container className={classes.root} spacing={16} justify="center">
      
          <Grid item xs={4} style={{border: '3px solid green'}}>
            <EuroMillionsResult />
          </Grid>
          <Grid item xs={4} style={{border: '3px solid green'}}>
            <MegaMillionsResult />
          </Grid>
          <Grid item xs={4} style={{border: '3px solid green'}}>
            <EuroMillionsGoResult />
          </Grid>
        
        </Grid>
      </section>
    );
  }
}
ServersPage.contextTypes = {
  router: PropTypes.object.isRequired
};
ServersPage.propTypes = {
  actions: PropTypes.object.isRequired,
  lotto_customers: PropTypes.array.isRequired,
  lotto_wins: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
    servers: PropTypes.object.isRequired,
    apiAddServer: PropTypes.func.isRequired,
    apiGetServers: PropTypes.func.isRequired,
    serversLastUpdate: PropTypes.number
  };

ServersPage.defaultProps = {
    serversLastUpdate: null
  };
  
function mapStateToProps(state) {
  return {
    lotto_customers: state.customer.lotto_customers,
    lotto_wins: state.customer.lotto_wins,
    servers: state.api.getIn(['data', 'servers']),
    serversLastUpdate: state.api.getIn(['lastUpdate', 'servers'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    apiGetServers() {
      dispatch(apiGetServers());
    },
    apiAddServer(data) {
      dispatch(apiAddServer(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(stylese)(ServersPage));


