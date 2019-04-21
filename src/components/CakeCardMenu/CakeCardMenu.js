import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import uuidv1 from 'uuid/v1'
import CakeCard from "../CakeCardMenu/CakeCard";
import {CAKE_MENU_UI_DATA} from "../CakeCardMenu/CakeMenuUIData";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
  
    },
});

class CakeCardMenu extends Component {
    
    render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={8}
                className={classes.root}
            >
                {CAKE_MENU_UI_DATA.map((cardData, index) =>
                    <Grid
                        key={uuidv1()}
                        item
                    >
                        <CakeCard cakeData={cardData}/>
                    </Grid>
                )}
            </Grid>
        )
    }
}

CakeCardMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CakeCardMenu);