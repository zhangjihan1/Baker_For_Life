import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'


const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 400,
    },
    link: {
        textDecoration: 'none',
    },
    cardCactionArea: {
        '&:hover': {
            backgroundColor: "#fff7fa"
        },
    },
    cardFocus: {
        backgroundColor: "transparent"
    }
};

class CakeCard extends Component {

    render() {
        const { classes, cakeData } = this.props;
        return (
            <Card className={classes.card}>

                <Link style={{ textDecoration: 'none' }} to={cakeData.link}>
                    <CardActionArea
                        classes={{
                            root: classes.cardCactionArea,
                            focusHighlight: classes.cardFocus,
                            focusVisible: classes.cardFocus
                        }}
                    >
                        <CardMedia
                            className={classes.media}
                            image={cakeData.image}
                            title={cakeData.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2" color="primary">
                                {cakeData.title}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {cakeData.comment}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions>

                        <Button size="small" color="secondary">
                            Menu
                           </Button>
                    </CardActions>

                </Link>
            </Card>
        );
    }

}

CakeCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CakeCard);