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

function Header() {
    const data = useContext(LogContext);
    const modal = useContext(ModalContext);

    const modalHandler = () => {
        console.log('open')
        modal.show()
    };


    return (
        <HeadLayout>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                {/*<If condition={!data}>*/}
                {/*    <StyledFirebaseAuth*/}
                {/*        uiConfig={uiConfig}*/}
                {/*        firebaseAuth={firebase.auth()}*/}
                {/*    />*/}
                {/*</If>*/}
                <Menu.Item key="0" onClick={modalHandler}>Log-in</Menu.Item>
                <Menu.Item key="1"><Link to="/"><b>Main</b></Link></Menu.Item>
                <Menu.Item key="2"><Link to="/about"><b>About</b></Link></Menu.Item>
            </Menu>
        </HeadLayout>
    )

}

export default Header;
