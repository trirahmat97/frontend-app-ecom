import React from 'react';
import CategoryFavorit from './UI/CategoryFavorit';
import TopNavigation from './UI/TopNavigation';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Sidenav from './UI/Sidenav';
import Produk from './UI/Produk';
import Footer from './UI/Footer';

const useStyles = makeStyles((theme) => ({
    body: {
        backgroundColor: '#F5F5F5'
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper2: {
        padding: '10px',
        height: '100%'
    }
}));

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <TopNavigation />
            <Container>
                <Grid container spacing={1}>
                    <Grid item xs={3} style={{ marginTop: '10px' }}>
                        <Paper className={classes.paper2}>
                            <Sidenav />
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <CategoryFavorit />
                        <div style={{ backgroundColor: 'white', height: '100%', padding: '5px' }}>
                            <Produk />
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default App;