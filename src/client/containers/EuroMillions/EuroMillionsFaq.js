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
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


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
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 10
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
  createData('Match 5 numbers + 2 stars','43.2%','1 in 139,838,160','€37,290,176.00'),
  createData('Match 5 numbers + 1 star','3.95%','1 in 6,991,908','€310,751.47'),
  createData('Match 5 numbers','0.92%','1 in 3,107,515','€51,791.91'),
  createData('Match 4 numbers + 2 stars','0.45%','1 in 621,503','€4,143.35'),
  createData('Match 4 numbers + 1 star','0.48%','1 in 31,076','€201.41'),
  createData('Match 3 numbers + 2 stars','0.67%','1 in 14,126','€113.86'),
  createData('Match 4 numbers','0.38%','1 in 13,812','€56.25'),
  createData('Match 2 numbers + 2 stars','1.75%','1 in 986','€18.89'),
  createData('Match 3 numbers + 1 star','1.85%','1 in 707','€14.39'),
  createData('Match 3 numbers','3.5%','1 in 314','€12.10'),
  createData('Match 1 numbers + 2 stars','4.95%','1 in 188','€10.17'),
  createData('Match 2 numbers + 1 star','14.85%','1 in 50','€8.03'),
  createData('Match 2 numbers','18.25%','1 in 22','€4.11')
];
class EuroMillionsFaq extends React.Component {
  state = {
    spacing: '16',
    jackpot_0: '0',
    jackpot_1: '0',
    jackpot_2: '0',
    jackpot_3: '0',
    jackpot_4: '0',
    jackpot_5: '0',
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
      
        <Grid container className={classes.root} spacing={0} justify="center"> 
          <section style={{margin: 20}}>
           
           <Typography component="p" style={stylos.resultsHead}>
             EuroMillions Help & FAQ
           </Typography>
            
            <Paper className={classes.control}>
            <section style={{padding: 20}}>
            <Typography variant="body1" gutterBottom>
              EuroMillions is Europe’s biggest and most popular lottery draw. 
              It takes place every Tuesday and Friday night in Paris.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             How does betting on the EuroMillions at Lottomarch work?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              Instead of entering the EuroMillions draw you are placing a bet on 
              the outcome. You pick your numbers in the same way and you can win all 
              the same main game prizes, including the jackpot, as you could had you 
              entered the official draw.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             How do I play?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              Choose 5 numbers from the main pool of 1–50 and 2 further numbers from 1–12.
               <br/><br/>
             You can also select the QuickPick option (Quick+1) and this will choose a line 
             for you randomly. Once you have chosen your numbers, select which draw you want 
             to play, either Tuesday or Friday, and press Submit. This will take you through 
             to a checkout – at this stage just click Confirm and proceed to place your bet.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             How do I win the Jackpot?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              You will win our jackpot if your 5 main numbers and 2 additional numbers are the same as those 
              in the official EuroMillions draw.
               <br/><br/>
             You can win all the same main game prizes playing with us, as you would in the official draw, 
             including the jackpot.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             How much does it cost?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              A single line costs €2.95. A line with the DoubleJackpot feature costs €5.90. For more on DoubleJackpot 
              please see below.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             How much can I win?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              The EuroMillions jackpot is capped at €190 million. However, you can select our 
              DoubleJackpot feature for the chance to win twice the official EuroMillions jackpot 
              amount. See below for information on how this feature works.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             How does the DoubleJackpot feature work?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              The <b>DoubleJackpot</b> feature allows you to go for twice the official lottery jackpot. 
              So, for instance, if the official EuroMillions draw is €80m and you play with us 
              and activate the <b>DoubleJackpot</b> feature, your potential prize will be €160m. 
              The prizes for all other tiers will remain the same.
              <br/><br/>
              It costs double the price of your normal line to activate the feature. So, if you wish to 
              play EuroMillions with the DoubleJackpot feature you’ll pay €5.90, instead of €2.95.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             When does the draw take place?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
             The EuroMillions draw takes place every Tuesday and Friday night in Paris at approximately 21:00 CET.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             What are the odds of winning the jackpot?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
             The odds of winning the jackpot are 1 in 139,838,160. A breakdown of all the odds for 
             each prize tier, together with estimated returns is included below.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             Can you explain the different prize tiers available?
            </Typography>
        
         <Table className={classes.table}>
         <TableHead>
          <TableRow>
            <TableCell>Prize tier</TableCell>
            <TableCell numeric>Share of the total prize money</TableCell>
            <TableCell numeric>Odds Of Winning</TableCell>
            <TableCell numeric>Average individual prize</TableCell>
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
        <Typography component="p" style={stylos.resultsHead}>
             What is the difference between the EuroMillions and EuroJackpot lotteries?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
             From a gameplay perspective, EuroMillions and EuroJackpot are similar; both lotteries require you to pick 5 
             numbers from 50, and 2 supplementary numbers. The supplementary numbers are where the difference becomes 
             clear as you must pick 2 supplementary (Star) numbers from 8 for the EuroJackpot and for the EuroMillions 
             you must pick 2 supplementary numbers from 12.
             <br/>
            The prices for the two lotteries are also similar – €2.95 for the EuroMillions and €2 for EuroJackpot
             <br/>
            The EuroJackpot organisers guarantee a weekly minimum jackpot of €10 million, with a maximum jackpot of €90 
            million. The EuroMillions is much larger in comparison, with a minimum of €15 million available at each of 
            the two weekly draws (i.e. €30 million weekly), with a maximum jackpot size of a whopping €190 million!
             <br/>
            The winning numbers for the EuroJackpot are drawn every Friday in Helsinki (Finland), while the EuroMillions 
            has two weekly draws on Tuesdays and Fridays in Paris (France).
             <br/>
             A great tip for EuroMillions fans - whenever there's a Friday draw coming up with a low jackpot check out our 
             EuroJackpot page, as it may well have a bigger jackpot, and at great odds too!
             <br/>
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             Does the EuroMillions have system combinations?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
             Yes, it is possible to select number combinations for the EuroMillions. If you select more than the minimum 
             required numbers (5 main + 2 Stars), then a system selection is made using all the possible combinations 
             possible from your numbers. The more numbers and stars you select, the more EuroMillions number combinations 
             can be made from them.
           </Typography>
        </section>
        </Paper>
        </section>
        </Grid>
        
      </Grid>
     </section>
    );
  }
}

EuroMillionsFaq.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EuroMillionsFaq);