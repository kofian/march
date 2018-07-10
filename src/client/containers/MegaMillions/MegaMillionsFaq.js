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

function createFata(id,tier, average) {
  return { id, tier, average };
}
const fata = [
    createFata('1','(5 main numbers+ Megaball)','$49,530,000.00*'),
    createFata('2','(5 main numbers)','$1,000,000.00'),
    createFata('3','(4 main numbers + Megaball)','$10,000.00'),
    createFata('4','(4 main numbers)','$500.00'),
    createFata('5','(3 main numbers+ Megaball)','$200.00'),
    createFata('6','(3 main numbers)','$10.00'),
    createFata('7','(2 main numbers + Megaball)','$10.00'),
    createFata('8','(1 main number + Megaball)','$4.00'),
    createFata('9','(Megaball)','$2.00')
    ];
function createSata(id,amount, aprox, price) {
  return { id, amount, aprox, price };
}
const sata = [
    createSata('1','Less than $500m','Less than €446m','€3.50'),
    createSata('2','$500m - $750m','€446 - €669m','from €7'),
    createSata('3','$750m - $1bn','€446m - €669m','from €10'),
    createSata('4','$1bn and over','€893m and over','from €13.50')
    ];    
class MegaMillionsFaq extends React.Component {
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
             MegaMillions Help & FAQ
           </Typography>
            
            <Paper className={classes.control}>
            <section style={{padding: 20}}>
            <Typography component="p" style={stylos.resultsHead}>
             Mega Millions – home of the record jackpot
            </Typography>
            <Typography variant="body1" gutterBottom>
              Mega Millions is one of America’s multi-state lotteries that regularly produces giant-sized 
              jackpots.<br/><br/>
              Like many other lotto games, Mega Millions has undergone changes both to the brand and the 
              format over the years. Previously known as the The Big Game and then the Big Game Mega 
              Millions, it finally changed to its current name Mega Millions in 2002. <br/><br/>
              The minimum jackpot is $40 million, and each time it is won is paid in 30 yearly 
              instalments, increasing by 5% each year. <br/><br/>
              Mega Millions is most renowned for the largest jackpot win ever, a 
              staggering $656 million was claimed on 30 March 2012 by three ticket-holders; 
              from the states of Illinois, Kansas and Maryland. And if that’s not 
              enough at Lottoland you could have won over a billion dollars thanks to 
              the exclusive DoubleJackpot feature.<br/><br/>
              The biggest single winner of Mega Millions came on the 25 March 2011 drawing, where $319 million was claimed. 
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             Can I participate in the Mega Millions?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              Only residents in the USA are permitted to play the official Mega Millions lottery. At 
              Lottomarch you can still bet on the outcome of the draw, and rest assured if you predict the 
              winning numbers then you will be paid out as if you played the game officially. 
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             What is the format of the Mega Millions lottery?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              Mega Millions changed its draw format in October 2017 and is now 5 from 70 white numbered balls, 
              and 1 “Gold Ball” from a range of 1 – 25. There is one further ball drawn from a range of 1 to 5 
              and this is known as the Megaplier. The Megaplier is an extra feature that if bought will multiply 
              your winnings by the number drawn out, and is applicable to all the prize tiers except the jackpot. 
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             What are my potential Mega Millions winnings?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              The Mega Millions jackpot has no limits either for the size of the pot or the number of times it 
              can rollover. The change in format of the Mega Millions game means it is even more difficult to land 
              the jackpot as there is a 1 in 302,575,350 chance of claiming it. The previous version had odds 
              of 1:258,890,850 of winning the main prize. 
               <br/><br/>
             The second prize tier of $1 million is awarded for matching 5 main numbers, and if the Megaplier
             drawn is number 5, then you will receive $5 million if you added this feature.
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             What are the Mega Millions prize tiers?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              The Mega Millions is a 5 from 70 and 1 from 25 lottery. The more numbers you match with those drawn, 
              the higher the prize category that you qualify for. <br/><br/>
              You can win the jackpot, Prize Category 1, by matching all of the draw numbers i.e. 5 of the balls drawn 
              from 70 plus the Megaball out of 25. <br/><br/>
              The total lottery prize money is divided into 9 tiers. 
           </Typography>
           <Table className={classes.table}>
         <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell numeric>Prize tier</TableCell>
            <TableCell numeric>Average individual prize</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fata.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.id}
                </TableCell>
                <TableCell numeric>{n.tier}</TableCell>
                <TableCell numeric>{n.average}</TableCell>
              </TableRow> 
            );
          })}
        </TableBody>
        </Table> 
        <Typography component="p" variant="body1" gutterBottom>
            * Average jackpot since 6 September 1996
        </Typography>
        <Typography component="p" style={stylos.resultsHead}>
          How much does MegaMillions cost to play?
        </Typography>
        <Table className={classes.table}>
         <TableHead>
          <TableRow>
            <TableCell>Jackpot amount $</TableCell>
            <TableCell numeric>Jackpot amount £(approx)</TableCell>
            <TableCell numeric>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sata.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.amount}
                </TableCell>
                <TableCell numeric>{n.aprox}</TableCell>
                <TableCell numeric>{n.price}</TableCell>
              </TableRow> 
            );
          })}
        </TableBody>
        </Table> 

           <Typography component="p" style={stylos.resultsHead}>
             How do I fill out a MegaMillions Ticket?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
              The MegaMillions Ticket has 6 fields available for you to fill in. A single line requires 5 main 
              numbers picked from a range 1 – 70, and 1 MegaBall out of 25. Each field tells you how many more 
              numbers are required to complete a single line. At Lottomarch if you decide to select more than 5 
              main numbers, then your selections will automatically be combined to enter all the possible 
              different lines in the draw, and this is known as a Combo bet. 
              <br/><br/>
              This is a convenient way of betting, for the serious lotto player or those who bet as a syndicate 
              and want to give each player a number to choose from. You can also choose to add a feature called 
              MegaPlier that boosts your winnings in all prize categories except the jackpot. 
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             What is the MegaPlier?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
             The MegaPlier is a bonus feature that boosts your winnings in all prize tiers except the jackpot. 
             The MegaPlier is drawn from 5 numbers and depending on which number will determine how much your 
             prize is multiplied by. For example if you won prize category 2 of $1 million and the MegaPlier was 
             number 5, you would end up with $5 million. 
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             When are the Mega Millions winning numbers drawn?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
             Mega Millions takes place on Tuesdays and Fridays in the USA and because of the time difference 
             this equates to early Wednesday and Saturday mornings (04:00 UK time). 
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             How do I get my MegaMillions winnings?
            </Typography>
            <Typography component="p" variant="body1" gutterBottom>
             When you play MegaMillions online at Lottomarch, you don’t have to worry about claiming your prize or 
             where your money goes. You will be notified by email of any winnings, and the money will be returned 
             to your Player Account so you can choose to play on for that dream win, or withdraw to your bank 
             account. 
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             What are the differences between the Mega Millions and Powerball lotteries?
            </Typography>
           <Typography component="p" variant="body1" gutterBottom>
             Mega Millions and Powerball are very similar in terms of format; for Mega Millions you choose 5 
             numbers out of a range of 1 to 70 plus 1 Megaball out of 25, while the Powerball is also 5 numbers 
             but from 1 to 59 and an additional “Powerball” is drawn from 1 to 35. <br/><br/>
             The respective odds of winning the jackpot are as follows:
             <br/><br/>
             Powerball: 1 in 175,223,509 <br/>
             Mega Millions: 1 in 302,575,350 <br/>
             Both games have an additional feature called the Megaplier and Power Play, however whilst the 
             Megaplier multiplies winnings by a number drawn (aside from the main prize), Power Play has a fixed 
             bonus for each prize category except the jackpot. 
             <br/><br/>
             Currently Mega Millions holds the world record for the largest jackpot payout of $656 million on 30 
             March 2012, however Powerball is not that far behind with $590,500,000 claimed on 18 May 2013. Mega 
             Millions and Powerball jackpots are both paid out over 30 years, Mega Millions awarded in yearly 
             instalments that increase by 5% per annum, and Powerball is a similar graduated payment plan. 
           </Typography>
           <Typography component="p" style={stylos.resultsHead}>
             Is the payout guaranteed? How do I know?
            </Typography>
            <Typography component="p" variant="body1" gutterBottom>
             At Lottomarch we can guarantee you will be paid out on your winnings - regardless of the 
             jackpot amount. 
             <br/><br/>
             At Lottomarch you bet on the outcome of the official draw. For all intents and purposes you will 
             have the exact same customer experience as if you were playing the official lottery. The key 
             difference is that we take your bet and we pay you if you win. We are able to achieve this in two 
             ways. <br/><br/>
             For smaller prize tier payments we make the payment directly from the fund we have from the total 
             ticket sales. <br/><br/>
             In order for us to make the larger prize tier payments we take out insurance policies to cover the 
             eventuality of a Jackpot win or a substantial payout on the Lotto ticket. Part of the Lotto ticket 
             price you pay goes towards the payment of this policy. <br/><br/>
             We are registered with and regulated by the UK Gambling Commission, the Gibraltar Gambling Commission, 
             and the Revenue Commissioners in Ireland. In order for us to retain these licences we have to prove 
             that we are able to make the required payouts to our players should they win and that we have the 
             correct procedures in place to guarantee this. 
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

MegaMillionsFaq.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MegaMillionsFaq);