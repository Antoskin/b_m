import React, { Component } from "react";
//import { If, Else } from 'react-control-statements';
import AuthentiController from './AuthentiController';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import MainPage from './components/MainPage';
import ModalWrapper from './components/Modal/ModalWrapper';
import {NewPerson} from './components/Person';

import { Layout } from 'antd';

class RootApp extends Component {

    render() {
        return (
            <AuthentiController>
                <Layout className="layout">
                    <Router>
                        <ModalWrapper>
                            <Header/>
                            <Switch>
                                <Route exact path="/" component={MainPage}/>
                                <Route path="/about" component={About}/>
                                <Route path="/add" component={NewPerson}/>
                            </Switch>
                        </ModalWrapper>
                    </Router>
                </Layout>
            </AuthentiController>
        );
    }
}

export default RootApp;
