import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAi63ycbUaVV09sjZV_OGHo-0FVOg5k9W0",
    authDomain: "cart-e8252.firebaseapp.com",
    databaseURL: "https://cart-e8252.firebaseio.com",
    projectId: "cart-e8252",
    storageBucket: "cart-e8252.appspot.com",
    messagingSenderId: "1030646510047",
    appId: "1:1030646510047:web:5c05ae59d8c761576d946a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
