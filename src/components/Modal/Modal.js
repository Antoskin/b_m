import React, {useContext} from 'react';
import { Modal as Mod } from 'antd';
import {withRouter} from 'react-router-dom'
import {ModalContext} from './ModalWrapper';
import uiConfig from '../../utils/uiConfig';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase';


function Modal(props) {
    const {visible, history} = props;
    const modal = useContext(ModalContext);
//    const isLogged = useContext(LogContext);

    const handleCancel = () => modal.show();

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false,
            signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                handleCancel();
                return false
            }
        }
    };

    return (
        <div>
            <Mod
                title="Join-us"
                visible={visible}
                onOk={handleCancel}
                onCancel={handleCancel}
            >
                <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />
            </Mod>
        </div>
    );

}

export default Modal;
