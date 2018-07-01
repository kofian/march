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
function createSata(tier, numbers, probability, aprox_pay) {
  id += 1;
  return { tier, numbers, probability, aprox_pay};
}
const sata = [
    createSata('I','Match 5 numbers + 2 lucky stars','1 in 139,838,160','EuroMillions jackpot'),
    createSata('II','Match 5 numbers + 1 lucky star','1 in 6,991,908','€300,000'),
    createSata('III','Match 5 numbers','1 in 3,107,515','€35,000'),
    createSata('IV','Match 4 numbers + 2 lucky stars','1 in 621,503','€3,000'),
    createSata('V','Match 4 numbers + 1 lucky star','1 in 31,075','€150'),
    createSata('VI','Match 3 numbers + 2 lucky stars','1 in 14,125','€100'),
    createSata('VII','Match 4 numbers','1 in 13,811','€60'),
    createSata('VIII','Match 2 numbers + 2 lucky stars','1 in 985','€20'),
    createSata('IX','Match 3 numbers + 1 lucky star','1 in 706','€15'),
    createSata('X','Match 3 numbers','1 in 314','€12'),
    createSata('XI','Match 1 numbers + 2 lucky stars','1 in 188','€10'),
    createSata('XII','Match 2 numbers + 1 lucky star','1 in 49','€8'),
    createSata('XIII','Match 2 numbers','1 in 22','€4.50'),
    createSata('XIV','0 match','1 in 2.5','€3 (stake back)'),
];    
class EuroMillionsGoFaq extends React.Component {
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
              EuroMillions GO! is Lottomarch’s brand-new instant lotto betting product, with a fresh draw on the 
              hour, every hour! Just like EuroMillions, it’s a classic style 5+2 game format and whatever Friday 
              or Tuesday’s EuroMillions jackpot is, we’ll match it. Best of all, if you don’t match a single 
              number, you’ll get your money back. What’s not to love?!
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             Am I playing the official EuroMillions Lottery?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              No. Absolutely not. EuroMillions GO! is a virtual lotto betting game. These are two completely 
              separate and distinctive games and draws.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             What is similar and what is different?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              We don’t want our Lottomarchers to confuse the games in any way. That’s why we’ve created 
              this helpful table below:
           </Typography>
           <Grid container justify="center">
             <Grid item xs={4}>
              <Typography component="p" style={stylos.resultsHead}>
                SIMILARITIES
              </Typography>
             </Grid>
             <Grid item xs={4}>
              <Typography component="p" style={stylos.resultsHead}>
                EuroMillions GO!
              </Typography>
             </Grid>
             <Grid item xs={4}>
               <Typography component="p" style={stylos.resultsHead}>
                Official EuroMillions
               </Typography>
             </Grid>
           </Grid>
           <Divider/>
           <Grid container justify="center">
             <Grid item xs={4}>
               <Typography component="p" style={stylos.resultsHead}>Format</Typography>
             </Grid>
             <Grid item xs={4}>
               <Typography component="p" variant="body1" gutterBottom>
                 5 numbers from 1-50</Typography>
                 <Typography component="p" variant="body1" gutterBottom>2 numbers from 1-12</Typography>
             </Grid>
             <Grid item xs={4}>
               <Typography component="p" variant="body1" gutterBottom>5 numbers from 1-50</Typography>
               <Typography component="p" variant="body1" gutterBottom>2 numbers from 1-12</Typography>
             </Grid>
           </Grid>
           <Divider/>
           <Grid container justify="center">
             <Grid item xs={4}>
               <Typography component="p" style={stylos.resultsHead}>Odds of Jackpot Win</Typography>
             </Grid>
             <Grid item xs={4}>
               <Typography component="p" variant="body1" gutterBottom>139m to 1</Typography>
             </Grid>
             <Grid item xs={4}>
               <Typography component="p" variant="body1" gutterBottom>139m to 1</Typography>
             </Grid>
           </Grid>
           <Divider/>
           <Grid container justify="center">
             <Grid item xs={4}>
                <Typography component="p" style={stylos.resultsHead}>Price</Typography>
             </Grid>
             <Grid item xs={4}>
               <Typography component="p" variant="body1" gutterBottom>€3</Typography>
             </Grid>
             <Grid item xs={4}>
               <Typography component="p" variant="body1" gutterBottom>€2.50</Typography>
             </Grid>
           </Grid>
           <Divider/>
           <Grid container justify="center">
             <Grid item xs={4}>
               <Typography component="p" style={stylos.resultsHead}>Jackpot values</Typography>
             </Grid>
             <Grid item xs={4}>
                <Typography component="p" variant="body1" gutterBottom>Always matches the EuroMillions jackpot</Typography>
                
             </Grid>
             <Grid item xs={4}>
              <Typography component="p" variant="body1" gutterBottom>From €17M to over €190M</Typography>
             </Grid>
           </Grid>
           <Divider/>
             <Typography component="p" style={stylos.resultsHead}>DIFFERENCES</Typography>
             <Divider/>
           <Grid container justify="center">
             <Grid item xs={4}>
              <Typography component="p" style={stylos.resultsHead}>Draw days</Typography>
             </Grid>
             <Grid item xs={4}>
             <Typography component="p" style={stylos.resultsHead}>On the hour every hour</Typography>
             <Typography component="p" variant="body1" gutterBottom>168 chances to win a week!</Typography>
             </Grid>
             <Grid item xs={4}>
             <Typography component="p" style={stylos.resultsHead}>Tuesday and Fridays</Typography>
             <Typography component="p" variant="body1" gutterBottom>2 draws a week</Typography>
             </Grid>
           </Grid>
           <Divider/>
           <Grid container justify="center">
             <Grid item xs={4}>
              <Typography component="p" style={stylos.resultsHead}>Draw Closing Times</Typography>
             </Grid>
             <Grid item xs={4}>
              <Typography component="p" style={stylos.resultsHead}>5mins before the hour
               EVERY HOUR!</Typography>
             </Grid>
             <Grid item xs={4}>
              <Typography component="p" variant="body1" gutterBottom>20:30 (CEST)</Typography>
             </Grid>
           </Grid>
           <Divider/>
           <Grid container justify="center">
             <Grid item xs={4}>
               <Typography component="p" style={stylos.resultsHead}>Companies</Typography>
             </Grid>
             <Grid item xs={4}>
              <Typography component="p" variant="body1" gutterBottom>Lottomarch</Typography>
             </Grid>
             <Grid item xs={4}>
              <Typography component="p" variant="body1" gutterBottom>Française des Jeux,
               Spain's Loterías y Apuestas del Estado and Camelot</Typography>
             </Grid>
           </Grid>
           <Divider/>
           <Grid container justify="center">
             <Grid item xs={4}>
              <Typography component="p" style={stylos.resultsHead}>Odds of any win</Typography>
             </Grid>
             <Grid item xs={4}>
               <Typography component="p" style={stylos.resultsHead}>1 in 2.1</Typography>
             </Grid>
             <Grid item xs={4}>
               <Typography component="p" variant="body1" gutterBottom>1 in 13</Typography>
             </Grid>
           </Grid>
           <Divider/>
           <Grid container justify="center">
             <Grid item xs={4}>
               <Typography component="p" style={stylos.resultsHead}>Prize for matching no numbers</Typography>
             </Grid>
             <Grid item xs={4}>
               <Typography component="p" variant="body1" gutterBottom>Your money back</Typography>
             </Grid>
             <Grid item xs={4}>
               <Typography component="p" variant="body1" gutterBottom>Nothing</Typography>
             </Grid>
           </Grid>
           <Divider/>
           <Grid container justify="center">
             <Grid item xs={4}>
               <Typography component="p" style={stylos.resultsHead}>Draw mechanism</Typography>
             </Grid>
             <Grid item xs={4}>
               <Typography component="p" variant="body1" gutterBottom>Numbers drawn from virtual
                random number generated draw</Typography>
             </Grid>
             <Grid item xs={4}>
              <Typography component="p" variant="body1" gutterBottom>Numbers drawn from
               EuroMillions draw in Paris</Typography>
             </Grid>
           </Grid>
           <Divider/>
           <Grid container justify="center">
             <Grid item xs={4}>
               <Typography component="p" style={stylos.resultsHead}>Tickets or Lotto bets</Typography>
             </Grid>
             <Grid item xs={4}>
             <Typography component="p" variant="body1" gutterBottom>Virtual Lotto Bet</Typography>
             </Grid>
             <Grid item xs={4}>
              <Typography component="p" variant="body1" gutterBottom>Lottery Ticket</Typography>
             </Grid>
           </Grid>
           <Divider/>
           <Grid container justify="center">
             <Grid item xs={4}>
               <Typography component="p" style={stylos.resultsHead}>Sales proceeds to charity</Typography>
             </Grid>
             <Grid item xs={4}>
              <Typography component="p" variant="body1" gutterBottom>YES</Typography>
             </Grid>
             <Grid item xs={4}>
              <Typography component="p" variant="body1" gutterBottom>NO</Typography>
             </Grid>
           </Grid>
           <Divider/>
           <Grid container justify="center">
             <Grid item xs={4}>
               <Typography component="p" style={stylos.resultsHead}>Additional Millionaire Raffle</Typography>
             </Grid>
             <Grid item xs={4}>
              <Typography component="p" variant="body1" gutterBottom>NO</Typography>
             </Grid>
             <Grid item xs={4}>
              <Typography component="p" variant="body1" gutterBottom>YES</Typography>
             </Grid>
           </Grid>
           <Divider/>
           <Typography component="p" style={stylos.resultsHead}>
             How do I pick my numbers?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              Simply pick five numbers from 1 to 50 and two “lucky star” numbers from 1 to 12, or select the 
              QuickPick option (Quick+1) to choose your numbers at random. After this, just click “submit” to 
              proceed to the checkout. You can play this exciting draw for just €3.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             How does a system bet work?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              A system bet on EuroMillions GO! allows you to choose MORE than the standard 5 required main numbers 
              when selecting your bet. Since a single line on EuroMillions GO! always involves 5 main numbers, 
              the various 5 number combinations of all the numbers you have chosen will all be submitted as lines.
              <br/><br/>
              To create a system bet, simply click on any additional numbers you would like to play, and the 
              feature will be automatically activated. You will also be able to see the number of lines about to 
              be submitted by clicking on the info button next to your stake.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             How many tickets can I purchase?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              On a single ticket, you can purchase up to 6 lines or system bets.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             How many draws can I enter with one ticket?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              You can submit your ticket for the following 1, 2, 3, 4, 5, 10, 12 or 24 draws.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             How does the draw work?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
             Just like many of the quick-play lotteries around the world, the exclusive to Lottomarch 
             EuroMillions GO! draw is based on a verified random number generator. The draw picks 5 numbers 
             from 1 to 50 and 2 “lucky star” numbers from 1 to 12, on the exact hour, every hour. The hourly 
             draws take place 24 hours a day, 7 days a week.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             How do I win the jackpot?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
             The jackpot (guaranteed to be the same amount as the official EuroMillions jackpot) is won 
             when a player’s ticket matches all five main numbers and the two lucky star numbers.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             How is the jackpot determined?How is the jackpot determined?
            </Typography>
            <Typography component="p" variant="body1" gutterBottom>
             The EuroMillions GO! jackpot is based on the estimated jackpot of the official EuroMillions draw. 
             The jackpot amount updates automatically following the EuroMillions draw every Tuesday and Friday. 
             While the official EuroMillions draw result is being established we will continued to offer the 
             same jackpot value.
            </Typography>
            <Typography component="p" style={stylos.resultsHead}>
             How much does it cost?
            </Typography>
            <Typography component="p" variant="body1" gutterBottom>
            A single line costs just €3.
            </Typography>
            <Typography component="p" style={stylos.resultsHead}>
             Can you explain the different prize tiers available?
            </Typography>
            <Typography component="p" variant="body1" gutterBottom>
             For each of the different prize tiers, you will find the winning odds and estimated returns in the tables 
             below. <br/><br/>
             For any given game, only the highest win will be paid. For example, if a bet wins the top 
             tier (5+2), the player will only win the jackpot - that is to say, the corresponding prize for 
             that tier. They will not be able to claim additional prizes for the lower tiers. <br/><br/>
             In the event of a malfunction, all pays and plays will be automatically voided. 
            </Typography>
        
         <Table className={classes.table}>
         <TableHead>
          <TableRow>
            <TableCell>Prize tier</TableCell>
            <TableCell numeric>Correct Numbers</TableCell>
            <TableCell numeric>Probability</TableCell>
            <TableCell numeric>£ Estimated Payout</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sata.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row"> 
                  {n.tier}
                </TableCell>
                <TableCell numeric>{n.numbers}</TableCell>
                <TableCell numeric>{n.probability}</TableCell>
                <TableCell numeric>{n.aprox_pay}</TableCell>
              </TableRow> 
            );
          })}
        </TableBody>
        </Table>
        <Typography component="p" style={stylos.resultsHead}>
          What do I do if I win?
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          If your account has been verified, simply proceed to your account and withdraw your winnings. 
          If your account has not been verified, you will first need to provide proof of your ID and proof of 
          address. Once this has been confirmed you will be able to withdraw your winnings.
        </Typography>
        <Typography component="p" style={stylos.resultsHead}>
          How will I know if I have won?
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
             Winners will receive an e-mail confirmation to inform them and congratulate them on their win!
        </Typography>
        <Typography component="p" style={stylos.resultsHead}>
          Why should I play EuroMillions GO!?
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
           EuroMillions GO! offers a chance to win a jackpot equal to the jackpot of the official EuroMillions 
           draw from just €3 a line. With a new draw on the hour every hour, there’s no waiting around until 
           Tuesday or Friday night. Best of all, even if you don’t match a single number, you still win your 
           money back back!
        </Typography>
        <Typography component="p" style={stylos.resultsHead}>
          How is Lottoland regulated?
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          We are registered with and regulated by the UK Gambling Commission, the Gibraltar Gambling 
          Commission, and the Revenue Commissioners in Ireland.
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

EuroMillionsGoFaq.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EuroMillionsGoFaq);