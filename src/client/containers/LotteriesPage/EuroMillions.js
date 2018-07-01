import React from 'react';
import PropTypes from 'prop-types';
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
};
class EuroMillions extends React.Component {
  state = {
    spacing: '16',
    jackpot_0: '0',
    jackpot_1: '0',
    jackpot_2: '0',
    jackpot_3: '0',
    jackpot_4: '0',
    jackpot_5: '0',
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
  
  render() {
      //debugger;
    const { classes} = this.props;
    const { spacing} = this.state;

    return (
     <section style={{padding: 20}}>
      <Grid container className={classes.root} spacing={16} justify="center">
      
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container justify="center">
            <Grid item xs={6} />
              <Grid item xs={6} >
                <Typography component="p">
                <FormLabel>Your Choice Numbers</FormLabel>{' : '}{' '}
                 {this.state.jackpot_0}{' '}{this.state.jackpot_1}{' '}{this.state.jackpot_2}{' '}
                 {this.state.jackpot_3}{' '}{this.state.jackpot_4}{' '}{this.state.jackpot_5}
                </Typography>
               </Grid>
            </Grid>
          </Paper>
        </Grid>
        
        <Grid container className={classes.demo} justify="center">
        <Grid item xs={2}/>
        <Grid item xs={8}>
        <Paper className={classes.control}>
        <section style={{padding: 20}}>
         <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
          <Grid item xs={10} style={{...stylos.topperBlue}}>
           <Typography component="div" variant="headline" gutterBottom>
            EuroMillions {' '}<FormLabel>Regular Jackpot</FormLabel>{' '}
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
            <Button aria-label="delete" className={classes.button}>
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
          <Grid item xs={2}/>
        </Grid>
        
      </Grid>
     </section>
    );
  }
}

EuroMillions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EuroMillions);