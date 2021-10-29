import React from 'react';
import './Login.css';
import useAuth from '../../context/useAuth'
import {useHistory, useLocation} from 'react-router-dom/cjs/react-router-dom.min';
const Login=() => {
    const {signInUsingGoogle, setIsLoading}=useAuth();

      //redirect google login
  const location=useLocation();
  const history=useHistory();

  const redirect_uri=location.state?.from.pathname || '/home';
     const handleGoogleLogin=() => {
    signInUsingGoogle().then(result => {
      history.push(redirect_uri);
    }).finally(()=>setIsLoading(true))
  }
    return (
        <div>
            <h2>Please Complete Your Login</h2>
            <button onClick={handleGoogleLogin} className='google-btn me-3'>Google Sign In</button>
        </div>
    );
};

export default Login;