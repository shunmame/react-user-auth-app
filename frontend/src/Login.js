import { auth, provider } from './firebase';
import { signInWithPopup, signInWithRedirect, onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  return (
    <div>
        <SiginButton></SiginButton>
    </div>
  )
}

export default Login

function SiginButton(){
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result)  => {
            console.log(result);
            console.log(auth)
            navigate("/user");
        })
        // signInWithRedirect(auth, provider).then((result)  => {
        //     console.log(result);
        //     navigate("/user");
        // })
    };

    return (
        <button onClick={signInWithGoogle}>
            <p>サインイン</p>
        </button>
    )
}