import React, {useContext} from 'react';
import { Modal as Mod } from 'antd';
import {ModalContext} from './ModalWrapper';


function Modal(props) {

    const {visible} = props;
    const modal = useContext(ModalContext);

    const handleCancel = () => modal.show();

    console.log('in modal visible', visible);

    return (
        <div>
            <Mod
                title="Basic Modal"
                visible={visible}
                onCancel={handleCancel}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Mod>
        </div>
    );

}

export default Modal;
