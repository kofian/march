import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import * as actions from 'Constants/Customer.Actions';

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
    
export class EuroMillionsGoResult extends React.Component {
    constructor(...args) {
    super(...args);
    this.state =  {
      jackpot_0: 0, 
      jackpot_1: 0, 
      jackpot_2: 0, 
      jackpot_3: 0, 
      jackpot_4: 0, 
      jackpot_5: 0,
      jackpot_6: 0,
      drawnDate: ''
    };
    this._createEuroMillionsGoResult = this._createEuroMillionsGoResult.bind(this);
   }

   handleUserChange = key => (event) => {
      //debugger;
    this.setState({
      [key]: event.target.value
    });
  }
   _createEuroMillionsGoResult(){
    const {jackpot_0, jackpot_1, jackpot_2, jackpot_3, jackpot_4, jackpot_5, jackpot_6,drawnDate} = this.state;
    const values = {jackpot_0, jackpot_1, jackpot_2, jackpot_3, jackpot_4, jackpot_5,jackpot_6,drawnDate };
    console.log(values);
      this.props.actions.createEuroMillionsGoResult(values);
   }
   
   render() {    
   const { classes } = this.props;
   
   return(
    <form style={{display: 'flex',flexWrap: 'wrap',justify: "center", alignItems: "center"}} noValidate autoComplete="off">
     <Grid container className={classes.root} spacing={16} justify="center">

           <Grid item xs={6}>
           <TextField
            type="datetime-local"
            className={classes.textField}
            id="euro_go_drawnDate"
            onChange={this.handleUserChange('drawnDate')}
            margin="normal"
          />
           <TextField
            label="One"
            className={classes.numberField}
            id="euro_go_jackpot_0"
            onChange={this.handleUserChange('jackpot_0')}
            margin="normal"
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
           />
           <TextField
           label="Two"
            className={classes.numberField}
            id="euro_go_jackpot_1"
            onChange={this.handleUserChange('jackpot_1')}
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
            margin="normal"
          />  
          <TextField
            label="Three"
            className={classes.numberField}
            id="euro_go_jackpot_2"
            onChange={this.handleUserChange('jackpot_2')}
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
            margin="normal"
          /> 
        </Grid>
        <Grid item xs={6}>
         <TextField
          id="euro_go_jackpot_3"
          label="Four"
          onChange={this.handleUserChange('jackpot_3')}
          type="number"
          className={classes.numberField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          />
           <TextField
            label="Five"
            className={classes.numberField}
            id="euro_go_jackpot_4"
            onChange={this.handleUserChange('jackpot_4')}
            margin="normal"
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
           />
           <TextField
            label="Six"
            className={classes.numberField}
            id="euro_go_jackpot_5"
            onChange={this.handleUserChange('jackpot_5')}
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
            margin="normal"
          />  
           <TextField
            label="Seven"
            className={classes.numberField}
            id="euro_go_jackpot_6"
            onChange={this.handleUserChange('jackpot_6')}
            type="number"
            InputLabelProps={{
            shrink: true,
            }}
            margin="normal"
          /> 
        </Grid>
          
      </Grid>
       <Button size="small" variant="contained" color="primary" style={{margin:10}} 
       onClick={this._createEuroMillionsGoResult}>
        Create EuroMillionsGo Result
        <SendIcon style={{marginLeft:10}}/>
       </Button>
     </form>
    );
   }
}

EuroMillionsGoResult.propTypes = {
  actions: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(EuroMillionsGoResult));

