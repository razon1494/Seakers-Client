import { getAuth, signInWithPopup,signInWithEmailAndPassword , GoogleAuthProvider, signOut, onAuthStateChanged,createUserWithEmailAndPassword,  updateProfile,sendPasswordResetEmail } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Firebase/firebase.initialize';

initializeAuthentication();

const useFirebase=() => {

    const [user, setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true);

    const auth=getAuth();
//sign in with google
    const signInUsingGoogle=() => {
        setIsLoading(true);
        const googleProvider=new GoogleAuthProvider();

      return signInWithPopup(auth, googleProvider);

    };

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [isLoading])

//sign out system
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
      user, setUser,
      isLoading, setIsLoading,
      signInUsingGoogle,
  logOut
    }
}

export default useFirebase;