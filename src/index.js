
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import { BrowserRouter } from 'react-router-dom';



firebase.initializeApp ({
  apiKey: "AIzaSyAgwYz6M1TAP4VJbgyGjR3B7bkWJsd7d9Y",
  authDomain: "hostelbooking-b14ca.firebaseapp.com",
  projectId: "hostelbooking-b14ca",
  storageBucket: "hostelbooking-b14ca.appspot.com",
  messagingSenderId: "701218700713",
  appId: "1:701218700713:web:fd0258eb69825e812b18b8",
  measurementId: "G-MEYHQSMCE2"
});


ReactDOM.render(
 
  <BrowserRouter>
   
    <App />
   
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
