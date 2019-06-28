import firebase from "firebase"

const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        signInSuccess: () => false,
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            console.log('signInSuccessWithAuthResult', authResult, redirectUrl);
            //this.props.history.push('/');
            return false
        }
    }
};

export default uiConfig;
