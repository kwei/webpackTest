import {firebaseConfig, VAPIKEY } from './firebaseConfig';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = () => {
    return getToken(messaging, { vapidKey: VAPIKEY })
    .then((currentToken) => {
        if (currentToken) {
            return currentToken;
        } else {
            console.error('No registration token available. Request permission to generate one.');
            return null;
        }
    })
    .catch((err) => {
        console.error('An error occurred while retrieving token. ', err);
        return null;
    });
};

export const onMessageListener = () => {
    return new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });
};