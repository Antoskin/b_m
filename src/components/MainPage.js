import React from 'react';
import firebase from '../config/config';
import {RenderPerson} from './Person'
import {If} from 'react-control-statements';
import { Row } from 'antd';

class MainPage extends React.Component {
    state = {
        notes: [],
    };

    componentDidMount() {
        const db = firebase.firestore();

        db.collection('peoples')
            .get()
            .then(querySnapshot => {
                const notes = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    data['id'] = doc.id;
                    return data;
                });
                this.setState({ notes });
            });
    }

    render() {
        const { notes } = this.state;

        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <If condition={notes}>
                        <RenderPerson persons={notes}/>
                    </If>
                </Row>
            </div>
        )
    }
}

export default MainPage;
