import React from 'react';
import PropTypes from 'prop-types';
import firebase from '../../config/config';

function RemovePerson({id}) {

    const handleRemove = () => {
        firebase
            .firestore()
            .collection('peoples')
            .doc(id)
            .delete()
    };

    return (
        <p onClick={handleRemove}>remove</p>
    )
}

RemovePerson.propTypes = {
    id: PropTypes.string.isRequired
};

export default RemovePerson;
