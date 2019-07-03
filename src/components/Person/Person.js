import React, {useState} from 'react';
import firebase from '../../config/config';

function Person() {
    const [user, setUser] = useState('');

    const handleAddPerson = (e) => {
        e.preventDefault();

        const db = firebase.firestore();

        db.settings({
            timestampsInSnapshots: true
        });

        db.collection('peoples').add({
            description: user
        });
    };

    return (
        <form onSubmit={handleAddPerson}>
            <input type="text" value={user}  onChange={(e) => setUser(e.target.value)} />
            <input type="submit" value="Отправить" />
        </form>
    )
}

export default Person;
