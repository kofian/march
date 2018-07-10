import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justify: 'center',
    alignItems: 'center'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  numberField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 100,
  },
});
const drawType = [
    {
     value: 'WEB',
     label: 'WE',
    },
    {
     value: 'TELEVISED',
     label: 'TV',
    }
];    
const CreateUserWin = ({handleUserChange,_createUserWin,classes,drawingType}) => {
  
  return(
    <form style={{display: 'flex',flexWrap: 'wrap',justify: "center", alignItems: "center"}} noValidate autoComplete="off">
     <Grid container className={classes.root} spacing={16} justify="center">
     
      <Grid item xs={4}>
      <TextField
            label="Payout Amount"
            className={classes.textField}
            id="payoutAmount"
            onChange={handleUserChange('payoutAmount')}
            margin="normal"
          />
      <TextField
            label="Marketing Jackpot Amount"
            className={classes.textField}
            id="marketingJackpotAmount"
            onChange={handleUserChange('marketingJackpotAmount')}
            margin="normal"
          />  
          <TextField
            label="Jackpot Amount"
            className={classes.textField}
            id="jackpotAmount"
            onChange={handleUserChange('jackpotAmount')}
            margin="normal"
          /> 
          <TextField
            label="Drawing Type"
            className={classes.textField}
            id="drawingType"
            select
            value={drawingType}
            onChange={handleUserChange('drawingType')}
            SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your draw type"
          margin="normal"
           > 
            {drawType.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          </Grid>
          <Grid item xs={4}>
           <TextField
            label="Lottery Name"
            className={classes.textField}
            id="lotteryId"
            onChange={handleUserChange('lotteryId')}
            margin="normal"
           />
           <TextField
            type="datetime-local"
            className={classes.textField}
            id="drawnDate"
            onChange={handleUserChange('drawnDate')}
            margin="normal"
          />  
          <TextField
            label="Lotto State"
            className={classes.textField}
            id="state"
            onChange={handleUserChange('state')}
            margin="normal"
          /> 
          <TextField
          id="user_id"
          label="User ID"
          onChange={handleUserChange('user_id')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
          </Grid>
          
          <Grid item xs={4}>
           <Grid container className={classes.root} spacing={16} justify="center">
           
           <Grid item xs={6}>
           <TextField
            label="One"
            className={classes.numberField}
            id="jackpot_0"
            onChange={handleUserChange('jackpot_0')}
            margin="normal"
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
           />
           <TextField
           label="Two"
            className={classes.numberField}
            id="jackpot_1"
            onChange={handleUserChange('jackpot_1')}
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
            margin="normal"
          />  
          <TextField
            label="Three"
            className={classes.numberField}
            id="jackpot_2"
            onChange={handleUserChange('jackpot_2')}
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
            margin="normal"
          /> 
          <TextField
          id="jackpot_3"
          label="Four"
          onChange={handleUserChange('jackpot_3')}
          type="number"
          className={classes.numberField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        </Grid>
        <Grid item xs={6}>
           <TextField
            label="Five"
            className={classes.numberField}
            id="jackpot_4"
            onChange={handleUserChange('jackpot_4')}
            margin="normal"
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
           />
           <TextField
            label="Six"
            className={classes.numberField}
            id="jackpot_5"
            onChange={handleUserChange('jackpot_5')}
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
            margin="normal"
          />  
          <TextField
            label="Jackpot"
            className={classes.numberField}
            id="lottoJackpot"
            onChange={handleUserChange('lottoJackpot')}
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
            margin="normal"
          /> 
          <TextField
          id="marketingJackpot"
          label="Marketing Jackpot"
          onChange={handleUserChange('marketingJackpot')}
          type="number"
          className={classes.numberField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        </Grid>
        
        </Grid>
        </Grid>
          
          </Grid>
       <Button size="small" variant="contained" color="primary" style={{margin:10}} 
       onClick={_createUserWin}>
        Register User
        <SendIcon style={{marginLeft:10}}/>
       </Button>
        </form>
    );
};

CreateUserWin.propTypes = {
  classes: PropTypes.object.isRequired,
  _createUserWin: PropTypes.func.isRequired,
  handleUserChange: PropTypes.func.isRequired,
  drawingType: PropTypes.string.isRequired
};

export default withStyles(styles)(CreateUserWin);
