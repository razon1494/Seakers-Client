import { getAuth, signInWithPopup,signInWithEmailAndPassword , GoogleAuthProvider, signOut, onAuthStateChanged,createUserWithEmailAndPassword,  updateProfile,sendPasswordResetEmail } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Firebase/firebase.initialize';

initializeAuthentication();

const useFirebase=() => {
  // const history=useLocation();
    const [user, setUser]=useState({});
    const [isLoading, setIsLoading]=useState(true);
    const [personName, setPersonName]=useState('');
    const [error, setError]=useState('');
    const [password, setPassword]=useState('');
    const [isLogin, setIsLogin]=useState(false);
    const [email, setEmail]=useState('');

    const auth=getAuth();

    const signInUsingGoogle=() => {
        setIsLoading(true);
        const googleProvider=new GoogleAuthProvider();

      return signInWithPopup(auth, googleProvider);

    };
    //sign up with email pw
     const setUserName=() => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: personName
    })
  .then(() => {
  // Profile updated!
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});
  }
    //Handle Log in
    const HandleLogin=e => {
      e.preventDefault();
        ProcessLogin(email, password)
    }
    // Handle registration
  const HandleRegistration=e => {
        e.preventDefault();
      // const history=useHistory();

        if(password.length<6) {
            setError('Password must be at least 6 character long');
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password enter at least two uppercase number');
            return;
        }
      isLogin? ProcessLogin(email, password) : RegisterNewUser(email, password);

    }
    //process login & regiister
  const ProcessLogin=(email, pw) => {
    signInWithEmailAndPassword(auth, email, pw)
    .then(result => {
      const user=result.user;
      setUser(user);
      setError('');
      window.location.href='/home';
    })
    .catch(error => setError(error.message))
    }

  const RegisterNewUser=(email, pw) => {
// const history=useHistory();
    createUserWithEmailAndPassword(auth, email, pw)
      .then(result => {
        const user=result.user;
        setError('');
        setUserName();
        window.location.href='/home';
      })
      .catch(error => {
      setError(error.message)
      })

  }

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

  //paassword reset
    const HandleResetPw=()=>{
    const auth = getAuth();
sendPasswordResetEmail(auth, email)
  .then(() => {
    setError("Please check your given mail to verify and reset pw");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage=error.message;
    setError(errorMessage);
    // ..
  });
  }
//sign out system
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
user,setUser,
email,setEmail,
isLoading,
personName,setPersonName,
error,setError,
isLogin,setIsLogin,
password,setPassword,
signInUsingGoogle,
setUserName,
signInWithEmailAndPassword,
HandleRegistration,
HandleLogin,
HandleResetPw,
ProcessLogin,
setIsLoading,
logOut
    }
}

export default useFirebase;