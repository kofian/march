import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import withTheme from '@material-ui/core/styles/withTheme';
import {lime400,cyan800} from 'material-ui/styles/colors';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';


const styles = {
  root: {
    flexGrow: 1,
    justify: 'center',
    alignItems: 'center',
    width: 300,
  },
  control: {
    fontSize: 12,
    justify: 'center',
    alignItems: 'center',
    backgroundColor: lime400,
  },
  picks: {
      fontSize: 14,
      color: 'white',
      fontWeight: 'bold'
  }
};

function EuroBar() {
  return (
    <div style={styles.root}>
    <Grid container justify="center" spacing={16}>
     <Grid item xs={8}>
       <FormLabel style={styles.control}>1 day 10 hours remaining</FormLabel>
        <Typography component="p" variant="headline" gutterBottom>
          € 44 Million
        </Typography>
        <Button variant="outlined" size="large" color="primary" style={{backgroundColor: lime400, marginBottom: 20}}>
          <ShoppingCartIcon  /> <FormLabel style={styles.control}>Only € 17.70 <br/> 
           <Typography style={styles.picks}>6 QuickPicks</Typography></FormLabel>
        </Button>
        <Button variant="outlined" size="large" color="primary" style={{backgroundColor: lime400, marginBottom: 20}}>
          <ShoppingCartIcon /> <FormLabel style={styles.control}>Only € 34.50 <br/>
          <Typography style={styles.picks}>12 QuickPicks</Typography></FormLabel>
        </Button>
    </Grid> 
        <Grid item xs={4}>
          <img src={require('../../../images/lt-euroMillionsGo-1484550eebce1a83.png')} width="50" height="50"/>
        </Grid>
    </Grid>
    <Divider light/>
    <FormLabel style={styles.control}>Numbers from Tue 26 June</FormLabel>
        <Grid container justify="center" style={{marginTop: 20, marginBottom: 20}} spacing={16}>
         <Grid item xs={1}>
         <Badge color="primary" badgeContent={24}>.</Badge>
         </Grid>
         <Grid item xs={2}>
          <Badge color="primary" badgeContent={4} >.</Badge>
          </Grid>
          <Grid item xs={1}>
          <Badge color="primary" badgeContent={4} >.</Badge>
          </Grid>
          <Grid item xs={2}>
          <Badge color="primary" badgeContent={4} >.</Badge>
          </Grid>
          <Grid item xs={1}>
          <Badge color="primary" badgeContent={4} >.</Badge>
          </Grid>
          <Grid item xs={2}>
          <Badge color="primary" badgeContent={42}>.</Badge>
          </Grid>
        </Grid>
        <Divider light/><br/>
        <Typography style={{color: cyan800}} variant="body2" gutterBottom>» EuroMillions Results & Prizes</Typography>
        <Typography style={{color: cyan800}} variant="body2" gutterBottom>» EuroMillions Help & FAQs</Typography>
        <Divider light/><br/>
        <Grid item xs={12}>
        <img src={require('../../../images/flyout_small-cac4ff0f364aea4a.jpg')} width="300" height="50"/>
        </Grid>
    </div>
  );
}

EuroBar.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withTheme()(EuroBar);