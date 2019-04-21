import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import CakeGridMenu from "../CakeGridMenu/CakeGridMenu";
import ROLL_CAKE_DATA from "./RollCakeData";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 2,
    },
});

class RollCake extends Component {
    render() {
        const { classes } = this.props;
        return(
            <CakeGridMenu cakeList={ROLL_CAKE_DATA}  />
        )
    }
}


RollCake.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RollCake);