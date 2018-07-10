import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DeleteIcon from '@material-ui/icons/Delete';
import {grey300} from 'material-ui/styles/colors';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import * as actions from 'Constants/Customer.Actions';
//import CustomizedSwitches from './CustomizedSwitches';


//import styless from './serversPage.scss';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justify: 'center',
    alignItems: 'center'
  },
  paper: {
    height: 380,
    width: 100,
  },
  paperbox: {
    height: 30,
    width: 20,
    textAlign:'center'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  topper: {
    height: 80,
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
  }
});
const stylos = {
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 28,
    minWidth: 20,
    padding: '0 0px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  buttonBlue: {
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
  },
  topperBlue: {
    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    justify: 'center',
    alignItems: 'center'
  },
  topperGray: {
    background: grey300,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .30)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    justify: 'center',
    alignItems: 'center'
  },
  circleStyle: {
      borderRadius: "50%",
      borderColor: grey300,
      width:40,
      height:40,
      justify:"center",
      alignItems: 'center',
      fontSize: 12,
      textAlign: 'center',
      display: 'flex'
  }
};
class EuroMillionsGo extends React.Component {
  state = {
    spacing: '16',
    jackpot_0: 0,
    jackpot_1: 0,
    jackpot_2: 0,
    jackpot_3: 0,
    jackpot_4: 0,
    jackpot_5: 0,
    lottoJackpot: 0,
    marketingJackpot: 2,
    doubleJackpotAllowed: false,
    drawingType: 'TV',
    lotteryId: 'EuroMillionsGO',
    drawingDate: "2018-07-27T17:30:00.000+0000",
    closingDate: "2018-07-17T17:30:00.000+0000",
    state: "IN_PLAY",
    price: '€ 35.50'
  };

  handleClickChange = key => (event,value) => {
      //debugger;
    this.setState({
      [key]: event.target.outerText
    });
    console.log(event.target.outerText);
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  
  _submitLotto(){
    const user_id = this.props.userId;
    debugger;
    const {lotteryId,drawingDate,closingDate,state,doubleJackpotAllowed,
     drawingType, jackpot_0, jackpot_1, jackpot_2, jackpot_3, jackpot_4, jackpot_5,
     lottoJackpot,marketingJackpot,price} = this.state;
    const values = {user_id,lotteryId,drawingDate,closingDate,state,doubleJackpotAllowed,
     drawingType, jackpot_0, jackpot_1, jackpot_2, jackpot_3, jackpot_4, jackpot_5,
     lottoJackpot,marketingJackpot,price};
    console.log(values);
      this.props.actions.playLotto(values);
   }
   _delNumbers(){
    this.setState({jackpot_0: 0});
    this.setState({jackpot_1: 0});
    this.setState({jackpot_2: 0});
    this.setState({jackpot_3: 0});
    this.setState({jackpot_4: 0});
    this.setState({jackpot_5: 0});
  }
  
  render() {
      //debugger;
    const { classes,lotto} = this.props;
    const { spacing} = this.state;

    return (
     <section style={{padding: 20}}>
      <Grid container className={classes.root} spacing={16} justify="center">
      
      <Grid container className={classes.control} justify="center">
        <Grid item xs={1}/>
        <Grid item xs={10}>
          <Paper className={classes.control}>
            <Grid container justify="center">
            <Grid item xs={6}>
              <Button size="small" variant="contained" color="primary" style={{margin:10}} 
                onClick={this._submitLotto.bind(this)}>
                Submit Your Winning Numbers {this.props.emailID}
               <NavigationExpandMoreIcon style={{marginLeft:10}}/>
              </Button>
            </Grid>
              <Grid item xs={6} >
              <Grid container className={classes.demo} justify="center" spacing={16}>
              <FormLabel>Your Choice Numbers</FormLabel>{' : '}{' '}
              </Grid>
              <Grid container className={classes.demo} justify="center" style={{margin:10}} spacing={16}>
              
                <Grid item xs={1}>
                 <Paper className={classes.control} style={stylos.circleStyle}>
                 {this.state.jackpot_0}
                 </Paper>
                </Grid>
                <Grid item xs={1}>
                 <Paper className={classes.control} style={stylos.circleStyle}>
                  {this.state.jackpot_1}
                 </Paper>
                </Grid>
                <Grid item xs={1}>
                 <Paper className={classes.control} style={stylos.circleStyle}>
                  {this.state.jackpot_2}
                 </Paper>
                </Grid>
                <Grid item xs={1}>
                 <Paper className={classes.control} style={stylos.circleStyle}>
                  {this.state.jackpot_3}
                 </Paper>
                </Grid>
                <Grid item xs={1}>
                 <Paper className={classes.control} style={stylos.circleStyle}>
                  {this.state.jackpot_4}
                 </Paper>
                </Grid>
                <Grid item xs={1}>
                 <Paper className={classes.control} style={stylos.circleStyle}>
                  {this.state.jackpot_5}
                 </Paper>
                </Grid>
                <Grid item xs={1}/>
              </Grid> 
               </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>  
        
        <Grid container className={classes.demo} justify="center">
        <Grid item xs={2}/>
        <Grid item xs={9}>
        <Paper className={classes.control}>
        <section style={{padding: 20}}>
         <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
          <Grid item xs={10} style={{...stylos.topperBlue}}>
           <Typography component="div" variant="headline" gutterBottom>
            EuroMillions  GO!{' '}<FormLabel>Regular Jackpot</FormLabel>{' '}
            <FormControl component="fieldset">
          <FormControlLabel 
            control={
              <Switch
                checked={this.state.gilad}
                onChange={this.handleChange('gilad')}
                value="gilad"
              />
            }
            label="Double Jackpot"
          />  
          </FormControl>
          €44 Million 
           </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button aria-label="delete" className={classes.button} onClick={this._delNumbers.bind(this)}>
            Clear
              <DeleteIcon />
            </Button>
          </Grid>
         </Grid>
        </section>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {[0, 1, 2, 3, 4, 5].map(valued => (
              <Grid key={valued} item style={{border: '3px solid green'}}>
                <Paper className={classes.paper}>
                 <Grid container className={classes.demo} justify="center" spacing={0}>
                  {[0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17,18,19,20,21,22,23,24,25,
                  26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50].map(value => (
                   <Grid key={value} item>
                     
                      <Button style={{...stylos.button}} onClick={this.handleClickChange(`jackpot_${valued}`,value)}>
                        {value}
                      </Button>
                    
                   </Grid>
                   ))}
                 </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
          </Paper>
          </Grid>
          <Grid item xs={1}/>
        </Grid>
        
      </Grid>
     </section>
    );
  }
}

EuroMillionsGo.propTypes = {
  classes: PropTypes.object.isRequired,
  emailID: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  lotto: PropTypes.array.isRequired
  //actions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
  //debugger;
  return {
	emailID: state.customer.emailID,
	userId: state.customer.userId,
	lotto: state.customer.lotto
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EuroMillionsGo));


