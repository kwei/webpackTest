importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBL3RbDKBzZNgMkpBbyGMV-YFtkTTNJVl8",
    authDomain: "kw-app-31758.firebaseapp.com",
    databaseURL: "https://kw-app-31758.firebaseio.com",
    projectId: "kw-app-31758",
    storageBucket: "kw-app-31758.appspot.com",
    messagingSenderId: "927718245969",
    appId: "1:927718245969:web:60adb04503fceea869da70"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
});