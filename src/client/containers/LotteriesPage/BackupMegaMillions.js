import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 380,
    width: 200,
  },
  paperbox: {
    height: 30,
    width: 20,
    textAlign:'center'
  },
  control: {
    padding: theme.spacing.unit * 2,
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
};
class MegaMillions extends React.Component {
  state = {
    spacing: '16',
    jackpot_0: '0',
    jackpot_1: '0',
    jackpot_2: '0',
    jackpot_3: '0',
    jackpot_4: '0'
  };

  handleChange = key => (event) => {
    this.setState({
      [key]: event.target.outerText
    });
    //console.log(event.target.outerText);
  };

  render() {
    const { classes } = this.props;
    const { spacing} = this.state;

    return (
     <section style={{padding: 20}}>
      <Grid container className={classes.root} spacing={16}>
      
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container>
              <Grid item>
                <FormLabel>Numbers</FormLabel>
                <Typography component="p" elevation={4}>
                 {this.state.jackpot_0}{' '}{this.state.jackpot_1}{' '}{this.state.jackpot_2}{' '}
                 {this.state.jackpot_3}{' '}{this.state.jackpot_4}
                </Typography>
               </Grid>
            </Grid>
          </Paper>
        </Grid>
      
        <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {[0, 1, 2, 3, 4].map(valued => (
              <Grid key={valued} item>
                <Paper className={classes.paper}>
                 <Grid container className={classes.demo} justify="center" spacing={0}>
                  {[0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17,18,19,20,21,22,23,24,25,
                  26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
                  51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,
                  77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,'00'].map(value => (
                   <Grid key={value} item>
                     
                      <Button style={{...stylos.button}} onClick={this.handleChange(`jackpot_${valued}`,value)}>
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
        
        <Grid item xs={12}>
          <Paper className={classes.control}>
            <Grid container>
              <Grid item>
                <FormLabel>spacing</FormLabel>
                <RadioGroup
                  name="spacing"
                  aria-label="spacing"
                  value={spacing}
                  onChange={this.handleChange('spacing')}
                  row
                >
                  <FormControlLabel value="0" control={<Radio />} label="0" />
                  <FormControlLabel value="8" control={<Radio />} label="8" />
                  <FormControlLabel value="16" control={<Radio />} label="16" />
                  <FormControlLabel value="24" control={<Radio />} label="24" />
                  <FormControlLabel value="32" control={<Radio />} label="32" />
                  <FormControlLabel value="40" control={<Radio />} label="40" />
                </RadioGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        
      </Grid>
     </section>
    );
  }
}

MegaMillions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MegaMillions);