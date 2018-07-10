import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from 'material-ui/TextField';


const LoginForm = ({handleUserChange,_loginUser}) => {
  
  return(
    <form style={{display: 'flex',flexWrap: 'wrap',width: 140, justify: "center", alignItems: "center"}} noValidate autoComplete="off">
      <TextField
            label="User Email"
            style={{width: 140, marginLeft: 10, marginTop: 3, fontSize: 13,color: 'black',borderColor: 'green'}}
            id="email"
            onChange={handleUserChange('email')}
          />
      
      <TextField
            type="password"
            label="password"
            style={{width: 140, marginLeft: 10, marginTop: 3, fontSize: 13,color: 'black',borderColor: 'green'}}
            id="password"
            onChange={handleUserChange('password')}
          />    
       <Button size="small" variant="contained" color="primary" style={{margin:10}} 
       onClick={_loginUser}>
        SignIn
        <SendIcon style={{marginLeft:10}}/>
       </Button>
        </form>
    );
};

LoginForm.propTypes = {
  _loginUser: PropTypes.func.isRequired,
  handleUserChange: PropTypes.func.isRequired
};

export default LoginForm;