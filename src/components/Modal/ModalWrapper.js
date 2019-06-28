import React, { useState } from 'react';
import Modal from './Modal';

export const ModalContext = React.createContext(null);

function ModalWrapper(props) {
    const [ visible, setVisible ] = useState(false);

    const handleOpenModal = () => {
        setVisible(visible ? false : true);
    };

    return (
        <ModalContext.Provider value={{ show: handleOpenModal }}>
            {props.children}
            <Modal visible={visible} />
        </ModalContext.Provider>
    )
}

export default ModalWrapper;
