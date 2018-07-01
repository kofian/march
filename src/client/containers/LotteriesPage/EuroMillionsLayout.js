import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import {lime400} from 'material-ui/styles/colors';
import Typography from '@material-ui/core/Typography';
import EuroMillions from './EuroMillions';
import EuroMillionsResults from './EuroMillionsResults';
import EuroMillionsFaq from './EuroMillionsFaq';
import FooterBar from '../Bars/FooterBar';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 2 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  moot: {
    flexGrow: 1,
    justify: 'center',
    alignItems: 'center'
  }
});

class EuroMillionsLayout extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
     <section style={{marginTop: 40}}>
      <Grid container className={classes.moot} spacing={16}>
      <div className={classes.root}> 
      <Grid container justify="center">
      <Grid item xs={2}/>
        <Grid item xs={8}>
        <AppBar position="static" style={{backgroundColor: lime400}}>
          <Tabs value={value} onChange={this.handleChange} centered indicatorColor="secondary"
          textColor="secondary">
            <Tab icon={<PhoneIcon />} label="EuroMillions"/>
            <Tab icon={<FavoriteIcon />} label="EuroMillions Results" />
            <Tab icon={<PersonPinIcon />} label="EuroMillions Help & FAQ" />
          </Tabs>
        </AppBar>
        </Grid>
      <Grid item xs={2}/>
      </Grid>
        {value === 0 && <TabContainer><EuroMillions /></TabContainer>}
        {value === 1 && <TabContainer><EuroMillionsResults /></TabContainer>}
        {value === 2 && <TabContainer><EuroMillionsFaq /></TabContainer>}
      </div>
      
      </Grid>
      <FooterBar/>
     </section>
    );
  }
}

EuroMillionsLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EuroMillionsLayout);