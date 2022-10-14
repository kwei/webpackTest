import {firebaseConfig, SERVER_KEY, VAPIKEY } from './firebaseConfig';
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

export const subscribe = (token, topic) => {
    fetch('https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/'+topic, {
        method: 'POST',
        headers: new Headers({
            'Authorization': 'key=' + SERVER_KEY
        })
    }).then(response => {
        if (response.status < 200 || response.status >= 400) {
            console.error('Error subscribing to topic: '+response.status + ' - ' + response.text());
        }
        console.log('Subscribed to "'+topic+'"');
    }).catch(error => {
        console.error(error);
    })
};