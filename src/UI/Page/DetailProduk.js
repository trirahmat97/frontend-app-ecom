import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Sidebar from '../Sidebar';
import DetailItem from '../../component/produk/DetailItem';

const useStyles = makeStyles((theme) => ({
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


const DetailProduk = () => {
    const classes = useStyles();
    return (
        <div style={{ margin: '10px' }}>
            <Grid container spacing={1}>
                <Grid item xs={3} style={{ marginTop: '10px' }}>
                    <Paper className={classes.paper2}>
                        <Sidebar />
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <DetailItem />
                </Grid>
            </Grid>
        </div>
    );
};

export default DetailProduk;