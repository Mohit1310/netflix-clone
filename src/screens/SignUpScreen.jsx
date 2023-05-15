import React, { useRef } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './SignUpScreen.css'

function SignUpScreen() {

    const emailRef = useRef(null); // to get text from the input field
    const passwordRef = useRef(null); // to get password from the input field

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth,  emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
            // Signed up
            console.log(userCredential.user.email);
          })
          .catch((error) => {
            alert(error.message);
            // ..
          });
    }
    
    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((cred) => {
          console.log("user logged in: ",cred.user);
        })
        .catch((error) => {
          alert(error.message)
        })
    }

  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder='email'/>
            <input ref={passwordRef} type="password" placeholder='Password'/>
            <button type='submit' onClick={signIn}>Sign In</button>

            <h4><span className="signUpScreen__gray">New to Netflix?</span> <span className='signUpScreen__link' onClick={register}>Sign Up now.</span></h4>
        </form>
    </div>
  )
}

export default SignUpScreen