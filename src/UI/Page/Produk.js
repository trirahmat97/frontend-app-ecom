import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ItemProduk from '../../component/produk/ItemProduk';

const useStyles = makeStyles((theme) => ({
    body: {
        flexGrow: 1,
        marginTop: '10px'
    }
}));

export default function Produk() {
    const classes = useStyles();

    return (
        <div className={classes.body}>
            <Grid container spacing={2}>
                <Grid item xs={3} md={3} lg={3}>
                    <ItemProduk />
                </Grid>
            </Grid>
        </div>
    );
}
