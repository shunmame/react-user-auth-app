// import { useState,useEffect } from 'react'
import { auth, _ } from './firebase';
import { useNavigate } from "react-router-dom";

function User() {
  // const [message, setMessage] = useState('');
  // useEffect(() =>{
  //   fetch('/api')
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // },[])
  return (
    <div className="User">
      <h1>ユーザー個人の画面</h1>
      {/* <p>{ message }</p> */}
      <SignOutButton />
    </div>
  );
}

export default User;


function SignOutButton() {
  const navigate = useNavigate();
  
  const signOutWithGoogle = () => {
    auth.signOut().then((result)  => {
        console.log(result);
        navigate("/login");
    })
};
  return (
    <button onClick={signOutWithGoogle}>
      <p>サインアウト</p>
    </button>
  )
}