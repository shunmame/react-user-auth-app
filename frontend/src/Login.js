import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import React from 'react'

function Login() {
  return (
    <div>
        <SiginButton></SiginButton>
    </div>
  )
}

export default Login

function SiginButton(){
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
    };

    return (
        <button onClick={signInWithGoogle}>
            <p>サインイン</p>
        </button>
    )
}