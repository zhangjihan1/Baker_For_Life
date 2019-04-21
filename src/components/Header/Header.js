import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import BakerLogo from "../../img/logo.jpeg"
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        background: 'transparent'
    },
    logo: {
        width: 250
    },
    headerText: {
        fontFamily: 'Dancing Script'
    },
    cardCactionArea: {
        borderRadius: 80,
        backgroundColor: "#ffb2b2",
        '&:hover': {
            backgroundColor: "#ffb2b2"
        },
    },
    cardFocus: {
        borderRadius: 80,
        backgroundColor: "#ffb2b2",
    },
    media: {
        width: 250,
        height: 250
    },
    logoGrid: {
        marginRight: theme.spacing.unit * 1.5,
    }
});

class Header extends Component {


    render() {
        const { classes } = this.props;

        return (
            <AppBar position="static" color="default" className={classes.appBar}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item className={classes.logoGrid}>
                        <Link style={{ textDecoration: 'none' }} to={"/"}>

                            <CardActionArea
                                classes={{
                                    root: classes.cardCactionArea,
                                    focusHighlight: classes.cardFocus,
                                    focusVisible: classes.cardFocus
                                }}
                            >
                                <CardMedia
                                    className={classes.media}
                                    image={BakerLogo}
                                    title={"Baker for Life"}
                                />
                            </CardActionArea>

                        </Link>

                    </Grid>
                    <Grid item>
                        <Typography className={classes.headerText}> 精品蛋糕定制 </Typography>
                        <Typography className={classes.headerText}> 新鲜材料制作 </Typography>
                        <Typography className={classes.headerText}> Wollongong 地区免费派送 </Typography>
                        <Typography className={classes.headerText}> WeChat: HHsStarlight_ </Typography>
                    </Grid>

                </Grid>

            </AppBar>
        );
    }
}



Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);