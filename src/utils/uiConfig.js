import firebase from "firebase"

const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
        signInSuccess: () => false
    }
};

export default uiConfig;
