import React, { Component } from 'react';
import Header from "./components/Header/Header";
import AppTheme from "./AppTheme";
import { MuiThemeProvider } from '@material-ui/core/styles';
import ParticleBG from "./components/Background/ParticleBG";
import AppHome from "./components/AppHome/AppHome";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CupCake from "./components/CupCake/CupCake";
import BirthdayCake from "./components/BirthdayCake/BirthdayCake";
import RollCake from "./components/RollCake/RollCake";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  content: {
      marginTop: theme.spacing.unit * 2,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Router>
        <MuiThemeProvider theme={AppTheme}>
          <div className="App">
            <ParticleBG />
            <div id="App-header">
              <Header />
            </div>
            <div id="App-content" className={classes.content} >
              <Switch>
                <Route path="/" exact={true} component={AppHome} />
                <Route path="/Home" component={AppHome} />
                <Route path="/CupCake" component={CupCake} />
                <Route path="/BirthdayCake" component={BirthdayCake} />
                <Route path="/RollCake" component={RollCake} />
              </Switch>
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);