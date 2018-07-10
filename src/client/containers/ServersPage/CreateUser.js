import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from 'material-ui/TextField';


const CreateUser = ({handleUserChange,_registerUser,email,password,password_confirmation}) => {
  
  return(
    <form style={{display: 'flex',flexWrap: 'wrap',width: 300, justify: "center", alignItems: "center"}} noValidate autoComplete="off">
      <TextField
            label="User Email"
            style={{width: "100%", marginLeft: 10, marginTop: 3, fontSize: 13,color: 'black',borderColor: 'green'}}
            id="email"
            value={email}
            onChange={handleUserChange('email')}
            placeholder="User email"
          />
      
      <TextField
            type="password"
            label="password"
            style={{width: "100%", marginLeft: 10, marginTop: 3, fontSize: 13,color: 'black',borderColor: 'green'}}
            id="password"
            value={password}
            onChange={handleUserChange('password')}
            placeholder="password"
          />  
          <TextField
            type="password"
            label="confirm password"
            style={{width: "100%", marginLeft: 10, marginTop: 3, fontSize: 13,color: 'black',borderColor: 'green'}}
            id="password_confirmation"
            value={password_confirmation}
            onChange={handleUserChange('password_confirmation')}
            placeholder="password confirmation"
          /> 
       <Button size="small" variant="contained" color="primary" style={{margin:10}} 
       onClick={_registerUser}>
        Register User
        <SendIcon style={{marginLeft:10}}/>
       </Button>
        </form>
    );
};

CreateUser.propTypes = {
  _registerUser: PropTypes.func.isRequired,
  handleUserChange: PropTypes.func.isRequired
};

export default CreateUser;
