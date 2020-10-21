import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        height: '100px',
        textAlign: 'center'
    },
}));

export default function BottomAppBar() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="absolut" color="primary" className={classes.appBar}>
                <Toolbar>
                    <span>Copyright@tradeveloper</span>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}