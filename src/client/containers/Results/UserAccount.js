import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ActionExitToAppIcon from 'material-ui/svg-icons/action/exit-to-app';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {grey300,cyan800,lime400} from 'material-ui/styles/colors';
import NavigationButton from 'components/NavigationButton';
//import classNames from 'classnames';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});
const stylos = {
circleStyle: {
      borderRadius: "50%",
      borderColor: grey300,
      width:20,
      height:20,
      justify:"center",
      alignItems: 'center',
      fontSize: 10,
      textAlign: 'center',
      display: 'flex'
  }
};

function UserAccount(props){
  const { classes,_logoutUser,emailID,lotto_wins,userId, } = props;
  //debugger;
  return(
    <section style={{display: 'flex',flexWrap: 'wrap',width: 220, justify: "center", alignItems: "center"}}>
     <Grid item xs={12}style={{margin:10, fontSize:12}}>Welcome {emailID}</Grid>
     <Grid >
      {lotto_wins.map(valued => (
            <Grid key={valued.id} container style={{marginLeft:20, justify:"center"}}>
              <Paper className={classes.control}>
               <Typography style={{fontSize:10,margin:10}}> Lotto Name:{' '} {valued.lotteryId}</Typography>
               <Typography style={{fontSize:10,margin:10}}> Lotto Status:{' '} {valued.state}</Typography>
               <Typography style={{fontSize:10,margin:10}}> Drawing Type:{' '} {valued.drawingType}</Typography> 
               <Typography style={{fontSize:10,margin:10}}> Jackpot:{' '} {valued.lottoJackpot}</Typography>
               <Typography style={{fontSize:10,margin:10}}> Marketing Jackpot:{' '} {valued.marketingJackpot}</Typography>
               <Typography style={{fontSize:10,margin:10}}>Drawn date: {new Date(valued.drawnDate).toDateString()}</Typography>
              
              <Grid container className={classes.demo} justify="center">
                <Grid item xs={1}>
                 <Paper className={classes.control} style={stylos.circleStyle}>
                 {valued.jackpot_0}
                 </Paper>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={1}>
                 <Paper className={classes.control} style={stylos.circleStyle}>
                  {valued.jackpot_1}
                 </Paper>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={1}>
                 <Paper className={classes.control} style={stylos.circleStyle}>
                  {valued.jackpot_2}
                 </Paper>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={1}>
                 <Paper className={classes.control} style={stylos.circleStyle}>
                  {valued.jackpot_3}
                 </Paper>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={1}>
                 <Paper className={classes.control} style={stylos.circleStyle}>
                  {valued.jackpot_4}
                 </Paper>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={1}>
                 <Paper className={classes.control} style={stylos.circleStyle}>
                  {valued.jackpot_5}
                 </Paper>
                </Grid>
                <Grid item xs={1}/>
              </Grid> 
              <Typography style={{fontSize:10,color:'red',fontWeight:'bolder',margin:10}}>Payout Amount: {valued.payoutAmount}</Typography>
              <Typography style={{fontSize:10,margin:10}}>Marketing Jackpot Amount: {valued.marketingJackpotAmount}</Typography>
              <Typography style={{fontSize:10,margin:10}}>Jackpot Amount: {valued.jackpotAmount}</Typography>
              </Paper>
            </Grid>
       ))}
    </Grid>
    <Typography style={{fontSize:10,color:'red',fontWeight:'bolder',margin:10}}>CONTACT US FOR YOUR PAYOUT</Typography>
     <Button size="small" color="secondary" style={{backgroundColor:lime400,margin:10}} 
       onClick={_logoutUser} className={classes.button}>
        Log Out
        <ActionExitToAppIcon style={{marginLeft:10}} className={classes.rightIcon}/>
     </Button>
     {userId == 1 &&
     <NavigationButton to="/adminpage" label="Admin Page" style={{backgroundColor:cyan800,margin:10}} exact>
        <ActionExitToAppIcon style={{marginLeft:10}} className={classes.rightIcon}/>
     </NavigationButton>
     }
    </section>
    );
}

UserAccount.propTypes = {
  classes: PropTypes.object.isRequired,
  _logoutUser: PropTypes.func.isRequired,
  emailID: PropTypes.string.isRequired
};

export default withStyles(styles)(UserAccount);