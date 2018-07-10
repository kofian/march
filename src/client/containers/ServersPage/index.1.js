import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {FormattedMessage, FormattedRelative} from 'react-intl';

import * as actions from 'Constants/Customer.Actions';
import {apiAddServer, apiGetServers} from 'api/actions';
import CreateUser from './CreateUser';
import styles from './serversPage.scss';

export class ServersPage extends React.Component {
  constructor(...args) {
    super(...args);
    this.state =  {
      password: '',
      password_confirmation: '',
      email: '',
    };
    this._registerUser = this._registerUser.bind(this);
  }
  
  componentDidMount() {
    this.props.apiGetServers();
    setTimeout(() => this.props.apiGetServers(), 1500);
  }
  _registerUser(){
    const {email,password,password_confirmation} = this.state;
    const values = {email,password,password_confirmation};
    console.log(values);
      this.props.actions.signupUser(values,this.context.router.history);
  }
  handleUserChange = key => (event) => {
      //debugger;
    this.setState({
      [key]: event.target.value
    });
  }
  render() {
    const {servers, serversLastUpdate} = this.props;

    return (
      <section style={{padding: 20}}>
        <CreateUser
         handleUserChange={this.handleUserChange}
         _registerUser={this._registerUser}
        />
        <h2>
          <FormattedMessage id="app.servers.title" defaultMessage="Servers" />
          {serversLastUpdate && (
            <span className={styles.lastUpdate}>
              (updated <FormattedRelative value={serversLastUpdate} />)
            </span>
          )}
        </h2>
        <TextField
          style={{marginRight: 10}}
          onChange={(e, value) => {
            this.addServerTextFieldValue = value;
          }}
          hintText={<FormattedMessage id="app.servers.addServer.hintText" defaultMessage="Add server" />}
        />
        <RaisedButton
          label={<FormattedMessage id="app.servers.addServer.button" defaultMessage="Add server" />}
          onClick={() => {
            this.props.apiAddServer({name: this.addServerTextFieldValue});
          }}
        />
        <Table multiSelectable>
          <TableHeader>
            <TableRow displayBorder>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover>
            {servers.map(({id, name}) => (
              <TableRow key={id}>
                <TableRowColumn>{id}</TableRowColumn>
                <TableRowColumn>{name}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    );
  }
}
ServersPage.propTypes = {
  actions: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(ServersPage);
