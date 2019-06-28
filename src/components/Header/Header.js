import React, { useContext } from 'react';
import {LogContext} from '../../AuthentiController';
import {Link} from "react-router-dom";
import { Layout, Menu } from "antd";
import {If} from 'react-control-statements';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import firebase from 'firebase';
import uiConfig from '../../utils/uiConfig';
import {ModalContext} from '../Modal/ModalWrapper';

const { Header: HeadLayout } = Layout;

const delay = ms => new Promise(_ => setTimeout(_, ms));

function Header() {
    const isLogged = useContext(LogContext);
    const modal = useContext(ModalContext);

    const modalHandler = () => modal.show();
    const handlerLogOut = () => firebase.auth().signOut();

    return (
        <HeadLayout>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1"><Link to="/"><b>Main</b></Link></Menu.Item>
                <Menu.Item key="2"><Link to="/about"><b>About</b></Link></Menu.Item>
                <Menu.Item key="3">
                    <If condition={!isLogged}>
                        <span onClick={modalHandler}>Join</span>
                    </If>
                    <If condition={isLogged}>
                        <span onClick={handlerLogOut}>Log-out</span>
                    </If>
                </Menu.Item>
            </Menu>
        </HeadLayout>
    )

}

export default Header;
