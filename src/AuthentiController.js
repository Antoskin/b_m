import React from 'react';
//import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from './config/config';

export const LogContext = React.createContext(null);

// firebase.initializeApp({
//     apiKey: "AIzaSyApg9iNQ_kW-iN3W_4nA03c25tQvn8KRsk",
//     authDomain: "bmoney-e1afd.firebaseapp.com"
// });

class AuthentiController extends React.Component {
    state = { isSignedIn: false };

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false
        }
    };

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: user });
            //console.log("user", user);
        })
    }

    render() {
        const { isSignedIn } = this.state;

        return (
            <LogContext.Provider value={isSignedIn}>
                { this.props.children }
            </LogContext.Provider>
        )
    }
}

export default AuthentiController;
