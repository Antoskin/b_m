import React, {useState} from 'react';
import firebase from '../../config/config';
import ReactFilestack from 'filestack-react';
import { Form, Input, Button } from 'antd';

function NewPerson() {
    const [name, setName] = useState('');
    const [wiki, setWiki] = useState('');
    const [ava, setAva] = useState('');
    const YOUR_API_KEY = 'AVlhlMaBiSrmeQ8mD3gbCz';

    const handleAva = res => setAva(res.filesUploaded[0].url);

    const handleAddPerson = (e) => {
        e.preventDefault();

        const db = firebase.firestore();

        db.settings({
            //timestampsInSnapshots: true
        });

        db.collection('peoples').add({
            name,
            wiki,
            ava,
        });
    };

    return (
        <>
            <Form onSubmit={handleAddPerson}>
                <Form.Item label="Name:">
                    <Input
                        type="text"
                        value={name}
                        placeholder="full name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Wiki link:">
                    <Input
                        type="text"
                        value={wiki}
                        placeholder="wiki.."
                        onChange={(e) => setWiki(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <ReactFilestack
                        apikey={YOUR_API_KEY}
                        onSuccess={res => handleAva(res)}
                    />
                </Form.Item>
                <input type="submit" className="btn" value="Add" />
            </Form>
        </>
    )
}

export default NewPerson;
