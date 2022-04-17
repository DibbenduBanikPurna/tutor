import fireBaseInitialize from '../../Firebase/Firebaseinitial/FirebaseInitial'
import {getAuth, signInWithPopup,onAuthStateChanged, GoogleAuthProvider,signOut } from "firebase/auth";
import { useEffect, useState } from 'react';

fireBaseInitialize();

const useFirebase=()=>{
    const [user,setUser]=useState({})
    const [error,setError]=useState('')
    const auth = getAuth();
    const signInUsingGoogle=()=>{
        const provider = new GoogleAuthProvider();
        
signInWithPopup(auth, provider)
  .then((result) => {
   
    const user = result.user;
    //console.log(user)
    setUser(user)
    
  }).catch((error) => {
   console.log(error.message)
   setError(error.message)
  });


    }

    const logOut=()=>{
        signOut(auth).then(() => {
           
            
          }).catch((error) => {
            
          });

    }

    useEffect(()=>{
     


onAuthStateChanged(auth, (user) => {
  if (user) {
   
    setUser(user)
  } else {

    setUser({})
  }
});
    },[])

    return {
        signInUsingGoogle,
        user,
        error,
        logOut,
    }

}

export default useFirebase