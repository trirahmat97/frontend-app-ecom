import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '10px'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    imgContainer: {
        height: '390px',
        width: '100px',
        textAlign: 'center',
        border: '1px solid red',
        justifyContent: 'center'
    },
    imgChild: {
        height: '100px',
        width: '100px',
        margin: '3px',
        textAlign: 'center'
    },
    images: {
        height: '86px',
        width: '100px'
    },
    image: {
        height: '250px',
        width: '300px',
    },
    flex: {
        flexGrow: 1
    },
    paper2: {
        width: '100%',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const DetailItem = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={9} container direction='row' spacing={1}>
                    <Grid item xs={6} container spacing={1}>
                        <Grid item container justify="center" alignItems="center">
                            <Paper elevation={0}>
                                <img alt='tes' className={classes.image} src="https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/OPPO_A52/OPPO_A52_L_1.jpg" />
                            </Paper>
                        </Grid>

                        <Grid item container>
                            <Paper className={classes.paper2} elevation={0}>
                                <Grid item container justify='center' spacing={1}>
                                    <Grid item>
                                        <Paper className={classes.paper} variant="outlined" square>
                                            <img className={classes.images} alt='tes' src="https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/OPPO_A52/OPPO_A52_L_1.jpg" />
                                        </Paper>
                                    </Grid>
                                    <Grid item>
                                        <Paper className={classes.paper} variant="outlined" square>
                                            <img className={classes.images} alt='tes' src="https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/OPPO_A52/OPPO_A52_L_1.jpg" />
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} container>
                        <Paper style={{ width: '100%' }} elevation={0} variant="outlined" square>
                            <Grid item container direction='column'>
                                <Typography variant="h5" gutterBottom>
                                    Oppo A52 4/64
                                    <Chip
                                        icon={<FavoriteBorderIcon />}
                                        label="415"
                                        size='small'
                                        color="secondary"
                                        variant="outlined"
                                    />
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Rp. 3000.000 <s>Rp. 5000.000</s>
                                    <Chip
                                        label="10%"
                                        size='small'
                                        color="secondary"
                                        variant="outlined"
                                    />
                                </Typography>
                            </Grid>
                            <Grid item container direction="column">
                                <b>Quantity: 1</b>
                                <Grid item justify="flex-start">
                                    <Fab size="small" aria-label="add">
                                        <RemoveIcon />
                                    </Fab>
                                    <span style={{ margin: '10px' }}>1</span>
                                    <Fab size="small" aria-label="add">
                                        <AddIcon />
                                    </Fab>
                                </Grid>
                                <b>Shipping: Rp. 3000.000</b>
                            </Grid>
                            <Grid item container>
                                <Typography variant="body2" gutterBottom>
                                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                          </Typography>
                            </Grid>
                            <Grid item container justify="space-between">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="madium"
                                    className={classes.button}
                                    startIcon={<ShoppingBasketIcon />}
                                >
                                    Buy Now
                                 </Button>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="madium"
                                    className={classes.button}
                                    startIcon={<ShoppingCartIcon />}
                                >
                                    Add to Cart
                                </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        iklan
                    </Paper>
                </Grid>
            </Grid>
        </div >
    );
};
export default DetailItem;