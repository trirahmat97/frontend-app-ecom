import React, { Fragment } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import history from './extentions/History';
import { connect } from 'react-redux';
import { AuthContect } from './extentions/Contentext';

import DetailProduk from './UI/Page/DetailProduk';
import Home from './UI/Page/Home';
import Login from './UI/Page/Login';
import TopNavigation from './UI/TopNavigation';

const App = ({ auth }) => {
    return (
        <Fragment>
            <Router history={history}>
                <AuthContect.Provider value={auth}>
                    <TopNavigation />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/detail' component={DetailProduk} />
                        <Route exact path='/login' component={Login} />
                    </Switch>
                </AuthContect.Provider>
            </Router>
        </Fragment>
    );
};

const mapStateToProp = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProp, null)(App);