import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {lime400,green900,blueGrey900,grey400} from 'material-ui/styles/colors';

const styles = theme => ({
    root: {
    flexGrow: 1,
    justify: 'center',
    alignItems: 'center'
  },
  foot: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  foot_list: {
      fontSize: 14,
      color: green900,
      fontWeight: 'bold'
  },
  foot_list_head: {
      fontSize: 10,
      color: blueGrey900,
      fontWeight: 'italic'
  },
  foot_egr: {
      backgroundColor: lime400,
      marginTop: 20,
      marginBottom: 20,
      height: 200,
      justify: 'center',
      alignItems: 'center'
  },
  footer_bottom: {
      backgroundColor: lime400,
      fontSize: 8,
      justify: 'center',
      alignItems: 'center',
      marginTop: 20,
  }
});

function FooterBar(props) {
  const { classes } = props;

  return (
      <section className={classes.root} style={{padding: 20}}>
      <Grid container className={classes.foot_egr} spacing={16}>
       <Grid item xs={2}/>
       <Grid item xs={2}>
         <img src={require('../../../images/gambleresponsibly_logo_color_150px.png')} width="100" height="100"/>
       </Grid>
       <Grid item xs={2}>
        <img src={require('../../../images/egr-rising-star_icon@2x.png')} width="100" height="100"/>
       </Grid>
       <Grid item xs={2}>
        <img src={require('../../../images/en_label_trustedshops.png')} width="100" height="100"/>
       </Grid>
       <Grid item xs={2}>
       <img src={require('../../../images/egr-power-50-rankings-twitter-banner-768x384.jpg')} width="100" height="100"/>
       </Grid>
       <Grid item xs={2}>
       <img src={require('../../../images/lt-euroJackpot-3399337bb33f1d32.png')} width="100" height="100"/>
       </Grid>
      </Grid>
      <Paper className={classes.demo}>
      <Grid container className={classes.foot} spacing={16} justify="center">
       
        <Grid item xs={2}>
          <Typography component="p" className={classes.foot_list_head}>Lottery</Typography>
          <Typography className={classes.foot_list}>Lottery Results</Typography>
          <Typography className={classes.foot_list}>Jackpots</Typography>
          <Typography className={classes.foot_list}>Help & FAQ</Typography>
          <Typography className={classes.foot_list}>Lotto Comparison</Typography>
          <Typography className={classes.foot_list}>Lottomarch Syndicates</Typography>
        </Grid> 
         <Grid item xs={2}>
          <Typography component="p" className={classes.foot_list_head}>Info</Typography>
          <Typography className={classes.foot_list}>Guaranteed Payout</Typography>
          <Typography className={classes.foot_list}>Privacy Policy</Typography>
          <Typography className={classes.foot_list}>Terms and Conditions</Typography>
          <Typography className={classes.foot_list}>What is Lotto Betting</Typography>
        </Grid> 
        <Grid item xs={2}>
          <Typography component="p" className={classes.foot_list_head}>Contact</Typography>
          <Typography className={classes.foot_list}>About Us</Typography>
          <Typography className={classes.foot_list}>Contact Us</Typography>
          <Typography className={classes.foot_list}>Affiliate program</Typography>
          <Typography className={classes.foot_list}>Careers</Typography>
        </Grid> 
        <Grid item xs={2}>
          <Typography component="p" className={classes.foot_list_head}>Gamble Responsibly</Typography>
          <Typography className={classes.foot_list}>Gamble Responsibly</Typography>
        </Grid> 
        <Grid item xs={2}>
          <Typography component="p" className={classes.foot_list_head}>Country</Typography>
          <Typography className={classes.foot_list}>Österreich</Typography>
          <Typography className={classes.foot_list}>United Kingdom</Typography>
          <Typography className={classes.foot_list}>Ireland</Typography>
          <Typography className={classes.foot_list}>Australia</Typography>
          <Typography className={classes.foot_list}>Magyarország</Typography>
          <Typography className={classes.foot_list}>América Latina</Typography>
          <Typography className={classes.foot_list}>Sverige</Typography>
          <Typography className={classes.foot_list}>Italia</Typography>
        </Grid> 
       
      </Grid>
      </Paper>
      <div className={classes.foot_bottom}>
        <Grid container justify="center" style={{marginTop: 20,backgroundColor: grey400}} spacing={16}>
       <Grid item xs={3}/>
       <Grid item xs={1}>
         <img src={require('../../../images/18_logo@2x.png')} width="100" height="50"/>
       </Grid>
       <Grid item xs={1}>
        <img src={require('../../../images/eu_logo@2x.png')} width="100" height="50"/>
       </Grid>
       <Grid item xs={1}>
        <img src={require('../../../images/gibraltar-gov_logo@2x.png')} width="100" height="50"/>
       </Grid>
       <Grid item xs={1}>
       <img src={require('../../../images/gbga_logo@2x.png')} width="100" height="50"/>
       </Grid>
       <Grid item xs={1}/>
       <Grid item xs={1}>
       <img src={require('../../../images/what-is-lotto-betting_icon@2x.jpg')} width="100" height="50"/>
       </Grid>
       <Grid item xs={3}/>
       <Typography style={{marginTop: 20, marginBottom:20, fontSize:10}}>EU Lotto Limited, of Suite A, Ocean Village Promenade, 
       Ocean Village, Gibraltar GX11 1AA, is licensed by the Government of Gibraltar and regulated by the Gibraltar 
       Gambling Commissioner under the Gibraltar Gambling Act 2005 (Licences: RGL 085 & 066), and is licensed and 
       regulated by the Gambling Commission of Great Britain for customers in 
       Great Britain (Licence: 000-038991-R-319408-005). EU Lotto Limited has a Remote Bookmaker’s Licence issued 
       by the Irish National Excise Licence Office (Reference Number 1011284) for lotto betting activities in 
       the Republic of Ireland. 
       </Typography>
       <Typography style={{marginBottom:20, fontSize:10}}>
        This website is operated by Lottoland. Lottomarch passes on Player’s Bets to EU Lotto, which is acting as a 
        bookmaker. When placing Bets, Lottomarch acts in the name and on behalf of the Player. 
       </Typography>
       <Typography style={{marginBottom:20, fontSize:10}}>
        Persons under 18 years of age are not permitted to gamble. 
       </Typography>
       <Typography style={{marginBottom:20, fontSize:10}}>
        This is a real money gambling app/site. Please gamble responsibly and only bet what you can afford. 
        For gambling addiction help and support, please contact Gamble Aware at 0808 8020 133 or 
        visit https://www.begambleaware.org/. 
       </Typography>
       <Typography style={{marginBottom:50, fontSize:10}}>
        EuroMillions Help & FAQ - Lottomarch.com
       </Typography>
      </Grid>
        
      </div>
     </section> 
  );
}

FooterBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterBar);