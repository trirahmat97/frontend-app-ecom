import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Ranting from './Ranting';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: '50px',
        paddingTop: '56.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    ranting: {
        margin: '5px'
    },
    amount: {
        marginLeft: '15px',
        padding: '3px',
        marginTop: '4px'
    },
    link: {
        color: 'black',
        textDecoration: 'none'
    }
}));

export default function ItemProduk() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/OPPO_A52/OPPO_A52_L_1.jpg"
                title="Paella dish"
            />
            <Grid container spacing={0} direction="row" justify="space-between" alignItems="center">
                <Grid item xs={9}>
                    <Grid item xs className={classes.amount}>
                        <Typography gutterBottom variant="subtitle1">
                            Rp. 300.000
                        </Typography>
                        <Typography variant='body1' color="textSecondary">
                            <span style={{ color: 'red' }}><strike>Rp. 4000.000</strike></span>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Fab color="secondary" aria-label="add" size='small'>
                        90%
                    </Fab>
                </Grid>
            </Grid>
            <CardContent>
                <Typography variant="h6" gutterBottom><Link to='detail' className={classes.link}>Oppo A52 4/64</Link></Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                    Oppo A52 terbaru di ta....
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <div className={classes.ranting}>
                    <Ranting />
                </div>
                <IconButton className={classes.expand}>
                    <FavoriteIcon color='secondary' />
                </IconButton>
                <IconButton
                    className={classes.expand}
                    onClick={handleExpandClick}
                >
                    <ShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
