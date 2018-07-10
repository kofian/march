import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import IconMenu from 'material-ui/IconMenu';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import ActionExitToAppIcon from 'material-ui/svg-icons/action/exit-to-app';
import ActionHelpOutlineIcon from 'material-ui/svg-icons/action/help-outline';
import ActionInfoOutlineIcon from 'material-ui/svg-icons/action/info-outline';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import SaveIcon from '@material-ui/icons/Save';

import {showModal} from 'containers/ModalsLayout/actions';
import {apiGetServers} from 'api/actions';
import AboutWindow from 'components/AboutWindow';
import ConfirmationDialog from 'components/ConfirmationDialog';
import LoginForm from './LoginForm';
import UserAccount from './UserAccount';
import * as actions from 'Constants/Customer.Actions';


export class LoginMenu extends React.Component {
    
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
              label="User Account"
              labelPosition="before"
              style={{color: 'white'}}
              icon={<NavigationExpandMoreIcon color="white" />}
            />
          }
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
    {this.props.userId == 0 &&
      <LoginForm 
      handleUserChange={this.handleUserChange}
      _loginUser={this._loginUser}
      />
    }
    {this.props.userId >= 1 &&
    <UserAccount
    emailID={this.props.emailID}
    _logoutUser={this._logoutUser}
    lotto={this.props.lotto}
    />
    }
        </IconMenu>
      </section>
    );
  }
}

LoginMenu.contextTypes = {
  router: PropTypes.object.isRequired
};

LoginMenu.propTypes = {
  auth_token: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  emailID: PropTypes.string.isRequired,
  lotto: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
 //debugger;
  return {
  auth_token: state.customer.auth_token,
	userId: state.customer.userId,
	emailID: state.customer.emailID,
	lotto: state.customer.lotto
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginMenu);
