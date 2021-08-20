
import { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Choose } from './component/Choose';
import { Route, Switch } from 'react-router-dom';
import { ChooseHostel } from './component/ChooseHostel';
import { ChooseFloor } from './component/ChooseFloor';
import { DataExists } from './component/DataExists';


function UserControl(props){
    const username = props;
    const value = localStorage.getItem(username.username);
    if(value!==null&&value.includes(":")){
      
      return <DataExists username={username.username} value={value}/>
    }
   
    
   
    return <Choose username={username.username}/>
}




const uiConfig = {
 
  signInFlow: 'popup',
 
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
  
    signInSuccessWithAuthResult: () => false,
  },
};
function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); 
 
 
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); 
  }, []);

  if (!isSignedIn) {
    return (
      <div className="Container">
        <h1>Hostel Allocation</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div>
      <UserControl username={firebase.auth().currentUser.email}/>
      <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
    </div>
  );
}
function App() {
  
  
  return <>
    
    <Switch>
      <Route exact path="/">
          <SignInScreen/>
     </Route>
     <Route exact path="/hostel/:name/:username">
         <ChooseHostel/>
     </Route>
     <Route exact path="/floors/:floors/:username">
         <ChooseFloor/>
     </Route>
     </Switch>
     
     </>
}

export default App;
