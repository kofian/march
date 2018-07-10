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
function createData(tier, match, winners, amount, megaPlier_winners,megaPlier_amount) {
  id += 1;
  return { id, tier, match, winners, amount,megaPlier_winners, megaPlier_amount};
}

const data = [
  createData('i', '5 Numbers + Megaball', '0x', '€199,130,691.53','',''),
  createData('ii', '5 Numbers', '1x', '€858,321.95', '1x','€3,433,287.79'),
  createData('iii', '4 Numbers + Megaball', '15x', '€8,583.22','1x','€34,332.88'),
  createData('iv', '4 Numbers', '411x', '€429.16','53x','€1,716.64'),
  createData('v', '3 Numbers + Megaball', '1,015x', '€171.66','119x','€686.66'),
  createData('vi', '3 Numbers','26,612x','€8.58','3,763x','€34.33'),
  createData('vii', '2 Numbers + Megaball','22,276x','€8.58','3,159x','€34.33'),
  createData('viii', '1 Number + Megaball','177,842x','€3.43','25,385x','€13.73'),
  createData('ix', 'Megaball','439,561x','€1.72','63,026x','€6.87')
];
class MegaMillionsResults extends React.Component {
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
    this.props.actions.fetchLastMegaMillionsResult();
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
              <Typography component="p" style={stylos.resultsHead}>MEGAMILLIONS RESULTS & WINNING NUMBERS</Typography>
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
         <Typography>MegaMillions Results for: {new Date(this.props.megamillions.drawnDate).toDateString()}</Typography>
         </Paper>
            <Grid item xs={2}/>
            <Grid item xs={8}>
            <Grid container className={classes.demo} justify="center">
            <Grid item xs={1}>
            <Paper className={classes.control} style={stylos.circleStyle}>
                {this.props.megamillions.jackpot_0}
            </Paper>
            </Grid>
            <Grid item xs={1}>
            <Paper className={classes.control} style={stylos.circleStyle}>
                {this.props.megamillions.jackpot_1}
            </Paper>
            </Grid>
            <Grid item xs={1}>
            <Paper className={classes.control} style={stylos.circleStyle}>
                {this.props.megamillions.jackpot_2}
            </Paper>
            </Grid>
            <Grid item xs={1}>
            <Paper className={classes.control} style={stylos.circleStyle}>
                {this.props.megamillions.jackpot_3}
            </Paper>
            </Grid>
            <Grid item xs={1}>
            <Paper className={classes.control} style={stylos.circleStyle}>
                {this.props.megamillions.jackpot_4}
            </Paper>
            </Grid>
            <Grid item xs={1}>
            <Paper className={classes.control} style={stylos.circleStyle}>
                {this.props.megamillions.jackpot_5}
            </Paper>
            </Grid>
            </Grid>
            </Grid>
            <Grid item xs={2}/>
        </Grid>      
            
        <Grid container className={classes.demo} justify="center">
        
        <Paper className={classes.control}>
        <section style={{padding: 20}}>
         <Table className={classes.table}>
         <TableHead>
          <TableRow>
            <TableCell>Tier</TableCell>
            <TableCell numeric>Match</TableCell>
            <TableCell numeric>Winners</TableCell>
            <TableCell numeric>Amount</TableCell>
            <TableCell numeric>MegaPlier Winners</TableCell>
            <TableCell numeric>MegaPlier Amount</TableCell>
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
                <TableCell numeric>{n.megaPlier_winners}</TableCell>
                <TableCell numeric>{n.megaPlier_amount}</TableCell>
              </TableRow> 
            );
          })}
        </TableBody>
        </Table>
        </section>
          
          </Paper>
        </Grid>
        
      </Grid>
     </section>
    );
  }
}

MegaMillionsResults.propTypes = {
  classes: PropTypes.object.isRequired,
  megamillions: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
 //debugger;
  return {
	megamillions: state.customer.megamillions
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(MegaMillionsResults));


