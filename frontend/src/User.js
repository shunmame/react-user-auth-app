import { useState, useEffect } from 'react'
import { auth, _ } from './firebase';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";

function User() {
  const [message, setMessage] = useState('');
  useEffect(() =>{
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[])

  const navigate = useNavigate();
  const [user, setUser] = useState("");
  useEffect(() => {

    onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const idToken = await currentUser.getIdToken();
        // 何らかの認証が必要なリクエストをIDトークン付きで飛ばす
        const res = await axios.get(
          "/api/auth",
          {
            headers: {
              Authorization: idToken
            }
          }
        );
        // console.log(res.data);
      } else {
        console.log("please login");
        navigate("/login")
      }
    }, []);
  })

  return (
    <div className="User">
      <h1>ユーザー個人の画面</h1>
      <p>{user.email}</p>
      <p>{user.displayName}</p>
      <p>{ message }</p>
      <SignOutButton />
    </div>
  );
}

export default User;

function SignOutButton() {
  const navigate = useNavigate();

  const signOutWithGoogle = () => {
    auth.signOut().then((result) => {
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