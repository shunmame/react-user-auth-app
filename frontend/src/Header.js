import { useState, useEffect } from 'react'
import { auth, _ } from './firebase';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";

function Header() {
  const [user, setUser] = useState("");
  useEffect(() => {

    onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
    }, []);
  })

  return (
    <div className="Header">
      <h1>ヘッダー</h1>
      <p>{user.email}</p>
      <p>{user.displayName}</p>
    </div>
  );
}

export default Header;