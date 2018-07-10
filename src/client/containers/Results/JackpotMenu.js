import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import IconMenu from 'material-ui/IconMenu';

import FlatButton from 'material-ui/FlatButton';

import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';

import GuestAccount from './GuestAccount';
import UserAccount from './UserAccount';
import * as actions from 'Constants/Customer.Actions';


export class JackpotMenu extends React.Component {
    
  constructor(...args) {
    super(...args);
    this.state =  {
      password: '',
      email: '',
    };
    this._loginUser = this._loginUser.bind(this);
    this._logoutUser = this._logoutUser.bind(this);
    this.onShowAboutWindow = this.onShowAboutWindow.bind(this);
    this.onShowLogoutConfirmation = this.onShowLogoutConfirmation.bind(this);
  }

  componentDidMount() {
    if (this.props.auth_token){
    this.props.actions.fetchLottoWins();
    }
  }
  onShowLogoutConfirmation() {
    this.props.showLogoutConfirmation({
      text: 'Log out?',
      onOk: (hideModal) => {
        this.props.doLogout(() => {
          hideModal();
        });
      }
    });
  }

  onShowAboutWindow() {
    this.props.showAboutWindow();
  }
  
  handleUserChange = key => (event) => {
      //debugger;
    this.setState({
      [key]: event.target.value
    });
  }
   _loginUser(){
    const {email,password} = this.state;
    const values = {email,password};
    console.log(values);
      this.props.actions.signinUser(values,this.context.router.history);
   }
   _logoutUser(){
       this.props.actions.resetAuth(this.context.router.history);
   }
  render() {
      //debugger;
      //this.state;
 
    return (
      <section>
        <IconMenu
          desktop
          iconButtonElement={
            <FlatButton
              label="You Wins"
              labelPosition="before"
              style={{color: 'white'}}
              icon={<EuroSymbolIcon color="secondary"/>}
            />
          }
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
    {this.props.userId == 0 &&
      <GuestAccount
      handleUserChange={this.handleUserChange}
      _loginUser={this._loginUser}
      />
    }
    {this.props.userId >= 1 &&
    <UserAccount
    emailID={this.props.emailID}
    _logoutUser={this._logoutUser}
    lotto={this.props.lotto}
    lotto_wins={this.props.lotto_wins}
    userId={this.props.userId}
    />
    }
        </IconMenu>
      </section>
    );
  }
}

JackpotMenu.contextTypes = {
  router: PropTypes.object.isRequired
};

JackpotMenu.propTypes = {
  auth_token: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  emailID: PropTypes.string.isRequired,
  lotto: PropTypes.array.isRequired,
  lotto_wins: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
 //debugger;
  return {
  auth_token: state.customer.auth_token,
	userId: state.customer.userId,
	emailID: state.customer.emailID,
	lotto: state.customer.lotto,
	lotto_wins: state.customer.lotto_wins
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JackpotMenu);
