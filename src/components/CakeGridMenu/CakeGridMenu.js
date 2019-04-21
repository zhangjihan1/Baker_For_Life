import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import CakeGrid from "./CakeGrid";
import uuidv1 from 'uuid/v1'

const styles = theme => ({
    root: {

    },
});

class CakeGridMenu extends Component {

    render() {
        const { classes, cakeList } = this.props;

        return (
            <Fragment>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={8}
                    className={classes.root}
                >
                    {cakeList.map((cakeData, index) =>
                        <Grid
                            key={uuidv1()}
                            item
                        >
                            <CakeGrid cakeData={cakeData} />
                        </Grid>
                    )}
                </Grid>
            </Fragment>

        )
    }
}

CakeGridMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CakeGridMenu);

