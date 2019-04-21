import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
    
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    titleBar: {
        borderRadius: 5,
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
    img: {
        width: 450,
        height: 520,
        borderRadius: 5,
    },
    listTitle: {
        listStyle: "none",
        borderRadius: 5,
    },
    actionIcon: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    }
});

class CakeGrid extends Component {
    render() {
        const { cakeData, classes } = this.props;
        return (
            <GridListTile className={classes.listTitle}>
                <img src={cakeData.image} alt={cakeData.title} className={classes.img} />
                <GridListTileBar
                    title={cakeData.title}
                    titlePosition="top"
                    actionIcon={
                        <Typography color="secondary" className={classes.actionIcon} >{cakeData.price}</Typography>
                    }
                    actionPosition="left"
                    className={classes.titleBar}
                />
            </GridListTile>
        )
    }
}

CakeGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CakeGrid);