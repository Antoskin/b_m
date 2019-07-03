import React from 'react';
import firebase from '../config/config';
import {RenderPerson} from './Person'
import {If} from 'react-control-statements';

class MainPage extends React.Component {
    state = {
        data: [],
    };

    componentDidMount() {
        const db = firebase.firestore();

        db.collection('peoples')
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                this.setState({ data });
            });
    }

    render() {
        const { data } = this.state;
        console.log('data', data)

        return (
            <If condition={data}>
                <RenderPerson persons={data}/>
            </If>
        )
    }
}

export default MainPage;
