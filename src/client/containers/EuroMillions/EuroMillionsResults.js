import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
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
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as actions from 'Constants/Customer.Actions';

//import styless from './serversPage.scss';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justify: 'center',
    alignItems: 'center'
  },
  toot: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
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
  resultsHead: {
      fontSize: 18,
      color: 'black',
      fontWeight: 'bold',
      justify: 'center',
      alignItems: 'center'
  },
  circleStyle: {
      borderRadius: "50%",
      borderColor: grey300,
      width:50,
      height:50,
      justify:"center",
      alignItems: 'center',
      fontSize: 18,
  }
};

let id = 0;
function createData(tier, match, winners, amount) {
  id += 1;
  return { id, tier, match, winners, amount };
}

const data = [
  createData('i', '5 Numbers + 2 Stars', '0x', '€24,657,714.46'),
  createData('ii', '5 Numbers + 1 Star', '0x', 'No hits'),
  createData('iii', '5 Numbers + 0 Stars', '2x', '€431,632.70'),
  createData('iv', '4 Numbers + 2 Stars', '19x', '€4,198.30'),
  createData('v', '4 Numbers + 1 Star', '383x', '€222.10'),
  createData('vi', '3 Numbers + 2 Stars', '1,168x', '€101.60'),
  createData('vii', '4 Numbers + 0 Stars', '893x', '€75.40'),
  createData('viii', '2 Numbers + 2 Stars', '18,939x', '€16.30'),
  createData('ix', '3 Numbers + 1 Star', '20,424x', '€16.00'),
  createData('x', '3 Numbers + 0 Stars', '43,238x', '€14.30'),
  createData('xi', '1 Number + 2 Stars', '110,788x', '€7.90'),
  createData('xii', '2 Numbers + 1 Star', '327,131x', '€8.00'),
  createData('xiii', '2 Numbers + 0 Stars', '668,626x', '€4.80')
];
class EuroMillionsResults extends React.Component {
  state = {
    spacing: '16',
    jackpot_0: '0',
    jackpot_1: '0',
    jackpot_2: '0',
    jackpot_3: '0',
    jackpot_4: '0',
    jackpot_5: '0',
  };

  componentDidMount() {
    this.props.actions.fetchLastEuroMillionsResult();
  }
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
            <Grid container className={classes.demo} justify="center" style={{marginBottom: 20}}>
            <Grid item xs={2}/>
            <Grid item xs={6}>
              <Typography component="p" style={stylos.resultsHead}>EUROMILLIONS RESULTS & WINNING NUMBERS</Typography>
            </Grid>  
              <Grid item xs={4} >
                <Typography component="p">
                 {this.state.jackpot_0}{' '}{this.state.jackpot_1}{' '}{this.state.jackpot_2}{' '}
                 {this.state.jackpot_3}{' '}{this.state.jackpot_4}{' '}{this.state.jackpot_5}
                </Typography>
               </Grid>
            </Grid>
            <Divider />
        </Grid>
            
        <Grid container className={classes.demo} justify="center" spacing={16} style={{marginBottom: 20, marginTop:20}}>
        <Paper className={classes.control} style={{marginBottom: 20}}>
         <Typography>EuroMillions Results for: {new Date(this.props.euromillions.drawnDate).toDateString()}</Typography>
         </Paper>
            <Grid item xs={2}/>
            <Grid item xs={8}>
            <Grid container className={classes.demo} justify="center">
            <Grid item xs={1}>
            <Paper className={classes.control} style={stylos.circleStyle}>
                {this.props.euromillions.jackpot_0}
            </Paper>
            </Grid>
            <Grid item xs={1}>
            <Paper className={classes.control} style={stylos.circleStyle}>
                {this.props.euromillions.jackpot_1}
            </Paper>
            </Grid>
            <Grid item xs={1}>
            <Paper className={classes.control} style={stylos.circleStyle}>
                {this.props.euromillions.jackpot_2}
            </Paper>
            </Grid>
            <Grid item xs={1}>
            <Paper className={classes.control} style={stylos.circleStyle}>
                {this.props.euromillions.jackpot_3}
            </Paper>
            </Grid>
            <Grid item xs={1}>
            <Paper className={classes.control} style={stylos.circleStyle}>
                {this.props.euromillions.jackpot_4}
            </Paper>
            </Grid>
            <Grid item xs={1}>
            <Paper className={classes.control} style={stylos.circleStyle}>
               {this.props.euromillions.jackpot_5}
            </Paper>
            </Grid>
            </Grid>
            </Grid>
            <Grid item xs={2}/>
        </Grid>      
            
        <Grid container className={classes.demo} justify="center">
        <Grid item xs={1}/>
        <Grid item xs={8}>
        <Paper className={classes.control}>
        <section style={{padding: 20}}>
         <Table className={classes.table}>
         <TableHead>
          <TableRow>
            <TableCell>Tier</TableCell>
            <TableCell numeric>Match</TableCell>
            <TableCell numeric>Winners</TableCell>
            <TableCell numeric>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.tier}
                </TableCell>
                <TableCell numeric>{n.match}</TableCell>
                <TableCell numeric>{n.winners}</TableCell>
                <TableCell numeric>{n.amount}</TableCell>
              </TableRow> 
            );
          })}
        </TableBody>
        </Table>
        </section>
          
          </Paper>
          </Grid>
          <Grid item xs={2}>
           <Paper className={classes.control}>
           <Typography variant="caption" align="center">
             The EuroMillions draw
           </Typography> 
           <Divider />
             <Typography component="p">
             This week's EuroMillions draw was for a jackpot of 36 million Euros. 
             The EuroMillions has two weekly draws, conducted on Tuesdays and Fridays, 
             held at the Parisian studios of the French "Radio Broadcasting Company". 
             The draw is broadcast live on French TV 2, under the watchful 
             eye of Anne-Gaelle Riccio.
             </Typography>
           </Paper>
          </Grid>
        </Grid>
        
      </Grid>
     </section>
    );
  }
}

EuroMillionsResults.propTypes = {
  classes: PropTypes.object.isRequired,
  euromillionsgo: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
 //debugger;
  return {
	euromillions: state.customer.euromillions
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(EuroMillionsResults));

