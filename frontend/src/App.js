import { BrowserRouter, Routes, Route } from "react-router-dom";
import firebase from "firebase/compat/app";

import User from "./User";
import Login from "./Login";

console.log(process.env.REACT_APP_FIREBASE_API_KEY)
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/user`} element={<User />} />
        <Route path={`/login/`} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
