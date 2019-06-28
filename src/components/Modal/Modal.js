import React, {useContext} from 'react';
import {Menu, Modal as Mod} from 'antd';
import {ModalContext} from './ModalWrapper';
import uiConfig from '../../utils/uiConfig';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase';


function Modal(props) {

    const {visible} = props;
    const modal = useContext(ModalContext);

    const handleCancel = () => modal.show();

    //console.log('in modal visible', visible);

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
