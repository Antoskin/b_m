import React, { Component } from "react";
//import { If, Else } from 'react-control-statements';
import AuthentiController from './AuthentiController';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import MainPage from './components/MainPage';
import ModalWrapper from './components/Modal/ModalWrapper';

import { Layout } from 'antd';

class RootApp extends Component {

    render() {
        return (
            <AuthentiController>
                <ModalWrapper>
                    <Layout className="layout">
                        <Router>
                            <Header />
                            <Switch>
                                <Route exact path="/" component={MainPage} />
                                <Route path="/about" component={About} />
                            </Switch>
                        </Router>
                    </Layout>
                </ModalWrapper>
            </AuthentiController>
        );
    }
}

export default RootApp;
