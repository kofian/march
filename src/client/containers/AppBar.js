import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionSearchIcon from 'material-ui/svg-icons/action/search';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import AirplanemodeActiveIcon from 'material-ui/svg-icons/device/airplanemode-active';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import NavigationButton from 'components/NavigationButton';
import JackpotMenu from './Results/JackpotMenu';
import EuroBar from './Bars/EuroBar';
import EuroGoBar from './Bars/EuroGoBar';
import MegaBar from './Bars/MegaBar';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit,
  },
  popover: {
    pointerEvents: 'none',
  },
  popperClose: {
    pointerEvents: 'none',
  },
});

class AppBar extends React.Component {
  state = {
    anchorEl: null,
    anchorEl1: null,
    anchorEl2: null,
  };
  static propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired
  };

 handlePopoverOpen = event => {
    this.setState({ anchorEl: event.target });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };
   handleGoPopoverOpen = event => {
    this.setState({ anchorEl2: event.target });
  };

  handleGoPopoverClose = () => {
    this.setState({ anchorEl2: null });
  };
   handleMegaPopoverOpen = event => {
    this.setState({ anchorEl1: event.target });
  };

  handleMegaPopoverClose = () => {
    this.setState({ anchorEl1: null });
  };
  render() {
    // <img src={require('../../images/lt-megaMillions-f64957c20d2af511.png')} />
    //<JackpotMenu />
    //debugger;
    const {children, classes} = this.props;
    const { anchorEl,anchorEl1,anchorEl2 } = this.state;
    const open = !!anchorEl;
    const open1 = !!anchorEl1;
    const open2 = !!anchorEl2;

    return (
      <Toolbar>
        <ToolbarGroup style={{paddingLeft: 20}} firstChild>
          <img src={require('./../../images/lt-bitCoinLotto-4f8a3994cb56dc7c.png')} style={{height: 40, width: 40, marginRight: 30}} />
          <NavigationButton to="/" label="EuroMillions" exact 
          onMouseOver={this.handlePopoverOpen} onMouseOut={this.handlePopoverClose}>
          <Popover
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={this.handlePopoverClose}
          disableRestoreFocus
        >
        <Grid container justify="center">
          <EuroBar />
        </Grid>
        </Popover>
        </NavigationButton>
          <NavigationButton to="/megamillionslayout" label="MegaMillions" exact 
          onMouseOver={this.handleMegaPopoverOpen} onMouseOut={this.handleMegaPopoverClose}>
          <Popover
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open1}
          anchorEl={anchorEl1}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={this.handleMegaPopoverClose}
          disableRestoreFocus
        >
        <Grid container justify="center">
          <MegaBar />
        </Grid>
        </Popover>
        </NavigationButton>
        <NavigationButton to="/euromillionsgolayout" label="EuroMillionsGo!" 
        exact onMouseOver={this.handleGoPopoverOpen} onMouseOut={this.handleGoPopoverClose}>
        <Popover
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open2}
          anchorEl={anchorEl2}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={this.handleGoPopoverClose}
          disableRestoreFocus
        >
        <Grid container justify="center">
          <EuroGoBar />
        </Grid>
        </Popover>
        </NavigationButton>
          
        </ToolbarGroup>
        <ToolbarGroup>
        <JackpotMenu />
          <TextField
            hintText="Filter"
            style={{width: 120, marginLeft: 20, marginTop: 3, fontSize: 13}}
            inputStyle={{color: 'white'}}
            hintStyle={{color: 'white'}}
            underlineFocusStyle={{borderColor: 'white'}}
          />
          <IconButton tooltip="Filter">
            <ActionSearchIcon color="white" />
          </IconButton>
          {children}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
export default withStyles(styles)(AppBar);
