import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC8WKiXB19qj3C3a1lwA9NTVGh6ifKc09M",
    authDomain: "webstorm-test-project.firebaseapp.com",
    databaseURL: "https://webstorm-test-project.firebaseio.com",
    projectId: "webstorm-test-project",
    storageBucket: "webstorm-test-project.appspot.com",
    messagingSenderId: "1019758735214",
    appId: "1:1019758735214:web:db0aaa327f04313680db7f",
    measurementId: "G-B2LVFDZVZM"
};
const fire=firebase.initializeApp(firebaseConfig);

export default fire;