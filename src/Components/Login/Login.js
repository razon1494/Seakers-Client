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
      <div className='login-container'>
        <div className='login'>
        <h2 className='pt-4'>Simply Login With Your Google Account</h2>
        <h2 className='pb-4'>Click Below And Start an adventures Journey</h2>
        <button  onClick={handleGoogleLogin} className='google-btn me-3'>Google Sign In</button>
        </div></div>
    );
};

export default Login;