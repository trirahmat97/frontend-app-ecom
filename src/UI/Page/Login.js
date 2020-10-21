import React, { useState } from 'react';
import { connect } from 'react-redux';

import apiStore from '../../apis/apis';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import MuiAlert from '@material-ui/lab/Alert';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Tri Rahmat Aribowo
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#3F51B5'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Login = () => {
    const classes = useStyles();
    const initialStateLogin = {
        email: '',
        password: '',
        isSubmiting: '',
        errorMessage: null,
        showPassword: false,
        open: false
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setDataLogin({
            ...dataLogin,
            open: false
        });
    };

    const [dataLogin, setDataLogin] = useState(initialStateLogin);
    const handleChange = event => {
        setDataLogin({
            ...dataLogin,
            [event.target.name]: [event.target.value]
        })
    }
    const handleClickShowPassword = () => {
        setDataLogin({ ...dataLogin, showPassword: !dataLogin.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLoginSubmit = event => {
        event.preventDefault();
        setDataLogin({
            ...dataLogin,
            isSubmiting: true,
            errorMessage: null
        });
        const requestBody = JSON.stringify({
            email: dataLogin.email[0],
            password: dataLogin.password[0]
        });
        const config = {
            headers: {
                'Content-Type': 'Application/json'
            }
        }
        apiStore.post('/user/login', requestBody, config)
            .then(res => {
                if (res.data.resCode === '200') {
                    console.log('sukses');
                } else {
                    setDataLogin({
                        ...dataLogin,
                        isSubmiting: false,
                        errorMessage: res.data.resDesc,
                        open: true
                    });
                }
            })
            .catch(err => console.log(err));
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={dataLogin.open}
                    autoHideDuration={5000}
                    onClose={handleClose}
                    action={
                        <React.Fragment>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                    }
                >
                    <Alert onClose={handleClose} severity="error">
                        {dataLogin.errorMessage}
                    </Alert>
                </Snackbar>

                <form className={classes.form} onSubmit={handleLoginSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        // error
                        // helperText="Incorrect entry."
                        value={dataLogin.email}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={dataLogin.showPassword ? 'text' : 'password'}
                        id="password"
                        autoComplete="current-password"
                        value={dataLogin.password}
                        onChange={handleChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {dataLogin.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}> Sign In</Button>
                    {/* <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">Forgot password? </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid> */}
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

const mapStateToProp = state => {
    return {
        isLogin: state.auth.isLogin
    }
}

export default connect(mapStateToProp, null)(Login);